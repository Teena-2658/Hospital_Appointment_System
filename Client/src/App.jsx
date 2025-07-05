import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Appointment from './Pages/Appointment';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RegisteredUsers from './Components/RegisteredUsers';
import BookedAppointments from './Components/BookedAppointments'; // ✅ New Import

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
