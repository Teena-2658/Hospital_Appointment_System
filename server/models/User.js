const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["doctor", "patient"], // only these are allowed
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
