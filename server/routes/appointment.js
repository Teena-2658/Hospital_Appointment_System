const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const User = require("../models/User");

// Book Appointment
router.post("/", async (req, res) => {
  try {
    const { doctorId, patientId, date, time } = req.body;

    // Optional: Validate users exist
    const doctor = await User.findById(doctorId);
    const patient = await User.findById(patientId);
    if (!doctor || !patient) {
      return res.status(404).json({ message: "Doctor or Patient not found" });
    }

    const newAppointment = new Appointment({
      doctorId,
      patientId,
      date,
      time,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });

  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Error booking appointment" });
  }
});

// Get All Appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctorId", "username email")
      .populate("patientId", "username email");

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

// Cancel Appointment
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Appointment cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling appointment" });
  }
});



module.exports = router;
