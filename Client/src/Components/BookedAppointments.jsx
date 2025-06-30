import React from "react";
import "./BookedAppointments.css";

const BookedAppointments = () => {
  const appointments = [
    { _id: "1", doctorName: "Dr. Teena Sharma", date: "2025-07-02", time: "10:00 AM" },
    { _id: "2", doctorName: "Dr. Shivi Mehra", date: "2025-07-03", time: "11:30 AM" },
    { _id: "3", doctorName: "Dr. Mahi Kapoor", date: "2025-07-04", time: "01:00 PM" },
    { _id: "4", doctorName: "Dr. Goutam Bhadra", date: "2025-07-05", time: "02:30 PM" },
    { _id: "5", doctorName: "Dr. Swati Choudhary", date: "2025-07-06", time: "09:15 AM" },
    { _id: "6", doctorName: "Dr. Teena Sharma", date: "2025-07-07", time: "03:45 PM" },
    { _id: "7", doctorName: "Dr. Mahi Kapoor", date: "2025-07-08", time: "12:00 PM" },
    { _id: "8", doctorName: "Dr. Swati Choudhary", date: "2025-07-09", time: "10:45 AM" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary fw-bold mb-4">My Appointments</h2>
      <div className="row g-4">
        {appointments.length === 0 ? (
          <p className="text-center">No appointments booked yet.</p>
        ) : (
          appointments.map((appt) => (
            <div className="col-md-4" key={appt._id}>
              <div className="appointment-card">
                <h5 className="doctor-name">{appt.doctorName}</h5>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Time:</strong> {appt.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookedAppointments;
