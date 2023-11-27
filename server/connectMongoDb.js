import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
