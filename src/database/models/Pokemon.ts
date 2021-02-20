import mongoose, {Document} from 'mongoose'

interface IPokemon extends Document {
    name: string,
    image_url: string,
}
/* PetSchema will correspond to a collection in your MongoDB database. */
const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this pet.'],
    },
    image_url: {
        required: [true, 'Please provide an image url for this pet.'],
        type: String,
    },
})

export default mongoose.models.Pokemon || mongoose.model<IPokemon>('Pokemon', PokemonSchema)