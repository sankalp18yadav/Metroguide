require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');

// Get Mongo URI from environment
const connection = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});
