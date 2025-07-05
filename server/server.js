const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// ✅ Monkey-patch Express to log all route paths before registering
const originalUse = express.application.use;
express.application.use = function (...args) {
  if (typeof args[0] === "string") {
    console.log("🔍 Registering route path:", args[0]);
  }
  return originalUse.apply(this, args);
};

// ✅ Debug path-to-regexp crash
const pathToRegexp = require("path-to-regexp");
const originalParse = pathToRegexp.parse;
pathToRegexp.parse = function (str, options) {
  try {
    return originalParse(str, options);
  } catch (err) {
    console.error("❗ Broken route path detected:", str);
    throw err;
  }
};

// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express
const app = express();

// ✅ Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/UserRoutes");
const appointmentRoutes = require("./routes/appointmentsroutes");

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// ✅ Static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client", "dist", "index.html"));
  });
}

// ✅ MongoDB Connection
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
