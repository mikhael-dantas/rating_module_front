import mongoose from 'mongoose'

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

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

export default Pokemon