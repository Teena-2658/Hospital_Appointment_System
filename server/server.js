const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
import path from "path";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/UserRoutes");
const appointmentRoutes = require("./routes/appointmentsroutes"); // ✅ fixed filename

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes); // ✅ appointment route

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// MongoDB Connection
mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(5000, () => console.log("🚀 Server running on port 5000"));
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
});
