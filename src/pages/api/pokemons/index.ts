import dbConnect from '../../../database/DbConection'
import Pokemon from '../../../database/models/Pokemon'

export default async function handler(req: any, res: any) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pokemons = await Pokemon.find({}).limit(10)
        res.status(200).json({ success: true, data: pokemons })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}