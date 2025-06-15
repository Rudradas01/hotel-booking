import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
<<<<<<< HEAD
  if (isConnected) return;  
 
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
      connectTimeoutMS: 70000,
      socketTimeoutMS: 70000,
    });

=======
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

>>>>>>> f4b7a28 (added)
    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

<<<<<<< HEAD
export default connectDB;
=======
export default connectDB;
>>>>>>> f4b7a28 (added)
