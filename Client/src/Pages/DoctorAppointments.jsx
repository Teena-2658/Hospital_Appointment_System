
import { useEffect, useState } from "react";
import axios from "axios";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:5000/api/appointments?doctor=" + user._id)
      .then(res => setAppointments(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>My Appointments</h3>
      <ul className="list-group">
        {appointments.map((a) => (
          <li key={a._id} className="list-group-item">
            {a.date} at {a.time} with Patient ID: {a.patient}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DoctorAppointments;
