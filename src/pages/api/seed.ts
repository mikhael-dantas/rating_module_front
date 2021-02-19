import dbConnect from '../../database/DbConection'
// import Pokemon from '../../database/models/Pokemon'

export default async function handler(req: any, res: any) {
    const {
        query: { key },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            if ( process.env.DB_RESET === "available" && process.env.DB_RESET_PASSWORD === key) {
                return res.status(200).json({ success: true })
            }
            res.status(200).json({ success: false })
            // try {
            //     const pokemons = await Pokemon.find({}) /* find all the data in our database */
            //     res.status(200).json({ success: true, data: pokemons })
            // } catch (error) {
            // res.status(200).json({ success: false })
            // }
        break
        // // case 'POST':
        // //   try {
        // //     const pokemon = await Pokemon.create(
        // //       req.body
        // //     ) /* create a new model in the database */
        // //     res.status(201).json({ success: true, data: pokemon })
        // //   } catch (error) {
        // //     res.status(400).json({ success: false })
        // //   }
        // //   break
        default:
        res.status(400).json({ success: false })
        break
    }
}