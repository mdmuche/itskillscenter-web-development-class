import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongouRL = process.env.MONGODB_URL;

const conDb = async (cb) => {
  try {
    const db = await mongoose.connect(mongouRL);
    if (db.connect) {
      console.log("Connection to the db was succefful");
      cb();
    } else {
      console.log("Connection to the db was not succesfful");
    }
  } catch (err) {
    console.error("Server Error: ", err.message);
  }
};
export default conDb;
