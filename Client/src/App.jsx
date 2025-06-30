import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisteredUsers from './components/RegisteredUsers';
import BookedAppointments from './components/BookedAppointments'; // ✅ New Import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<RegisteredUsers />} />
        <Route path="/my-appointments" element={<BookedAppointments />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;
