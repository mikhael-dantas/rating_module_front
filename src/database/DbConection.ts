import mongoose from 'mongoose'

async function dbConnect() {
    const uri = process.env.MONGODB_URI
    // check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (!uri) return

    if (mongoose.connection.readyState >= 1) {
    return
    }

    return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    })
}

export default dbConnect