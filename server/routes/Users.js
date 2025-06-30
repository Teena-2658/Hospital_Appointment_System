const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ GET all users (excluding password)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users" });
  }
});

// ✅ UPDATE user by ID
router.put("/:id", async (req, res) => {
  try {
    const { username, email } = req.body;

    // Check for existing username
    const existingUsername = await User.findOne({ username });
    if (existingUsername && existingUsername._id.toString() !== req.params.id) {
      return res.status(400).json({ message: "Username already exists, try another" });
    }

    // Check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail && existingEmail._id.toString() !== req.params.id) {
      return res.status(400).json({ message: "Email already exists, try another" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { username, email } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Error updating user" });
  }
});

// ✅ DELETE user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });

  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
