import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () => {
    try{
        const connectioninstance = await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}');
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error: " + error);
        process.exit(1);
    }

}

export default connectDB;