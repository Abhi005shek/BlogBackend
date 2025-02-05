import mongoose from "mongoose";
import { config } from "dotenv";

config({
  path: "./config.env",
});

export default async function connectDB() {
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully!!");
  } catch (error) {
    console.log("Couldn't Connect: ", error);
  }
}
