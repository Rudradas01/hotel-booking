import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;  
 
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
      connectTimeoutMS: 70000,
      socketTimeoutMS: 70000,
    });

    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectDB;
