import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongouRL = process.env.MONGODB_URL;

const conDb = async (cb) => {
  try {
    const db = await mongoose.connect(mongouRL);
    console.log("Connection to the db was succefful");
    if (cb) {
      cb();
    }
  } catch (err) {
    console.log("Connection Failed: ", err.message);
    process.exit(1);
  }
};
export default conDb;
