import axios from 'axios'
import dbConnect from '../../database/DbConection'
import Pokemon from '../../database/models/Pokemon'

export default async function handler(req: any, res: any) {
    const {
        query: { key },
        method,
    } = req

    
    await dbConnect()
    
    switch (method) {
        case 'GET':
            if ( !(process.env.DB_RESET === "available") || !(process.env.DB_RESET_PASSWORD === key)) {
                return res.status(401).json({ success: false, message: "resource not available" })
            }
        
            try {
                // check database
                const pokemons = await Pokemon.find({})
                if (pokemons.length > 0) {
                    return res.status(400).json({ success: false, message: 'pokemons already exist on the database' })
                }

                // make queries to get lists of pokemons
                let nextUrl = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"

                for (let index = 0; index < 8; index++) {
                    if (!nextUrl) {break}
                    const pokeapireponse = await axios.get(nextUrl)
                    nextUrl = pokeapireponse.data.next
                    const results = pokeapireponse.data.results
                    // get individual images and save in the db 
                    await Promise.all(results.map(async (pokemonFromResults: any) => {
                        const individualPoke = await axios.get(`${pokemonFromResults.url}`)
                        const image = `${individualPoke.data.sprites.front_default}`
                        await Pokemon.create({
                            name: pokemonFromResults.name,
                            image_url: image
                        })
                    }))
                }
                return res.status(200).json({success: true})
            } catch (error) {
                return res.status(500).json({ success: false })
            }
        break
        default:
            res.status(400).json({ success: false })
        break
    }
}