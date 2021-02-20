import dbConnect from '../../../database/DbConection'
import Pokemon from '../../../database/models/Pokemon'

export default async function handler(req: any, res: any) {
    const {
        query: { name },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
        try {
            const pokemon = await Pokemon.findOne({name: name}).catch(() => {
                return res.status(500).json({message: 'error finding in db'})
            })
            res.status(200).json({ success: true, results: pokemon })
        } catch (error) {
            console.log(error)
            res.status(400).json({ success: false })
        }
        break

        // case 'PUT' /* Edit a model by its ID */:
        // try {
        //     const pet = await Pet.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //     runValidators: true,
        //     })
        //     if (!pet) {
        //     return res.status(400).json({ success: false })
        //     }
        //     res.status(200).json({ success: true, data: pet })
        // } catch (error) {
        //     res.status(400).json({ success: false })
        // }
        // break

        // case 'DELETE' /* Delete a model by its ID */:
        // try {
        //     const deletedPet = await Pet.deleteOne({ _id: id })
        //     if (!deletedPet) {
        //     return res.status(400).json({ success: false })
        //     }
        //     res.status(200).json({ success: true, data: {} })
        // } catch (error) {
        //     res.status(400).json({ success: false })
        // }
        // break

        default:
        res.status(400).json({ success: false })
        break
    }
}