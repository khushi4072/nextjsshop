import mongoose from "mongoose";

export const MONGODB_URI =
  "mongodb+srv://khushisingh89208:khushi%401234@cluster0.koiwk.mongodb.net/shop?retryWrites=true&w=majority";

console.log("🔍 Checking MONGODB_URI:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined.");
}

let isConnected = false; // Track connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log("🔄 Using existing MongoDB connection.");
    return;
  }

  try {
    console.log("⏳ Connecting to MongoDB...");

    // Improved connection options
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Prevents infinite waiting
      socketTimeoutMS: 45000, // Allows queries to run longer
      connectTimeoutMS: 10000, // Timeout for initial connection
      maxPoolSize: 10, // Limits number of concurrent connections
    });

    isConnected = true;
    console.log("✅ MongoDB Connected Successfully!");
    console.log("🔹 Mongoose Connection State:", mongoose.connection.readyState);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Event Listeners for Better Debugging
mongoose.connection.on("connected", () => console.log("🟢 Mongoose connected."));
mongoose.connection.on("error", (err) => console.error("🔴 Mongoose error:", err));
mongoose.connection.on("disconnected", () => console.log("🟡 Mongoose disconnected."));

// Auto-reconnect on disconnection
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🔴 MongoDB connection closed due to app termination.");
  process.exit(0);
});
