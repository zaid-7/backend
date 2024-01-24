import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        console.log(DB_NAME,"getting this as db name"+process.env.MONGODB_URI);
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host }`);

    } catch (error) {
        console.log("ERROR! zzzzzzzzzzzzzzzzz",error);
    }

}
export default connectDB;