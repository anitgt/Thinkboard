import mongoose from 'mongoose'


export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDb Connected Successfully!')
    } catch (e) {
        console.log('Cannot connect to the database!', e);
        process.exit(1);
    }
}