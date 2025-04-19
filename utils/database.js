
import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
  
    if (isConnected) {
      console.log("MongoDB is already connected");
      return;
    }
  
    const mongoURI = process.env.MONGODB_URI;
  
    if (!mongoURI) {
      console.error("❌ MONGODB_URI is not defined. Check your .env file.");
      return;
    }
  
    try {
      await mongoose.connect(mongoURI, {
        dbName: "Mailing_System",
      });
      isConnected = true;
      console.log("✅ MongoDB connected");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
    }
  };
  