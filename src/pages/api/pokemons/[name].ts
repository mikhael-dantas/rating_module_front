import dbConnect from '../../../database/DbConection'
import Pokemon from '../../../database/models/Pokemon'

export default async function handler(req: any, res: any) {
    const { name } = req.query

    try {
        await dbConnect()
        const pokemon = await Pokemon.findOne({name: name})
        if (!pokemon) {
            return res.status(500).json({message: 'pokemon not found'})
        }
        return res.status(200).json({ success: true, results: pokemon })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false })
    }
}