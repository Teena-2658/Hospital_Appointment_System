const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");

// Book appointment
router.post("/book", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to book", error: err.message });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("patientId doctorId", "username email role");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

// Cancel appointment
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment cancelled" });
  } catch (err) {
    res.status(500).json({ message: "Error cancelling appointment" });
  }
});

module.exports = router;
