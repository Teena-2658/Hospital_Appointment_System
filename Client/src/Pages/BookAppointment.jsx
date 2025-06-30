import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Redirect Hook
import axios from "axios";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate(); // ✅ Initialize

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => {
      const docList = res.data.filter((user) => user.role === "doctor");
      setDoctors(docList);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login to book appointment.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/appointments", {
        ...form,
        patient: user._id,
      });

      alert("✅ Appointment booked successfully!");
      setForm({ doctor: "", date: "", time: "" });

      // ✅ Redirect to My Appointments Page
      navigate("/my-appointments");
    } catch (err) {
      alert("❌ Failed to book appointment");
    }
  };

  return (
    <div className="appointment-fullpage">
      <h2 className="appointment-heading">Book an Appointment</h2>
      <form className="appointment-form-no-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Doctor</label>
          <select
            value={form.doctor}
            onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            required
          >
            <option value="">-- Choose Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.username}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />
        </div>

        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
