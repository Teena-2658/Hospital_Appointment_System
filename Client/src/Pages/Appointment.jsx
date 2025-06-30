import React, { useState } from 'react';

const Appointment = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', doctor: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    setForm({ name: '', email: '', date: '', doctor: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Doctor's Name</label>
          <input type="text" name="doctor" value={form.doctor} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
