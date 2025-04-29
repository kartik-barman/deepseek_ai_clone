import mongoose from "mongoose";
import dotev from "dotenv";
dotev.config();

const mongoURI = process.env.MONGO_URI;

console.log(mongoURI);

const connectDb = async () => {
  if (!mongoURI) {
    throw new Error("MongoDB URI is not defined.");
  }

  try {
    // Check if mongoose is already connected
    if (mongoose.connection.readyState === 0) {
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: 40000,
      });
      console.log("MongoDB Connected:", conn.connection.host);
    } else {
      console.log("MongoDB already connected.");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDb;
