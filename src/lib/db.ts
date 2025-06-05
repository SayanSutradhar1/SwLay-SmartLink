import mongoose from "mongoose";

const connection: { isConnected?: boolean } = {};

export async function connectDb() {
  if (connection.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        dbName: process.env.DB_NAME,
      }
    );
    connection.isConnected = connectionInstance.connections[0].readyState === 1;
    console.log("Connected to MongoDB", connectionInstance.connections[0].host);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
