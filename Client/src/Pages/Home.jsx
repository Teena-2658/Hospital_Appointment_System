    import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Include your CSS file

const Home = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(to right, #eef5fc, #e0f7fa)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Text Area */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-info fw-bold mb-2">
                Caring for Life
              </h5>
              <h1
                className="fw-bold text-primary mb-4"
                style={{ fontSize: "2.8rem" }}
              >
                Leading the Way in <br /> Medical Excellence
              </h1>
              <p className="text-muted lead mb-4">
                A modern solution to manage patients, appointments, and records
                with ease and security.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/services" className="btn btn-outline-primary btn-lg">
                  Our Services
                </Link>
                <Link
                  to="/appointment"
                  className="btn btn-primary btn-lg text-white"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://www.appletechsoft.com/wp-content/uploads/2020/06/Hospital-Management-System.jpg"
                alt="Doctor"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
     {/* Key Features Section */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold text-primary">Key Features</h2>
    <div className="row g-4">
      {[
        {
          icon: "📝",
          title: "Easy Registration",
          desc: "Quick and secure patient and doctor registration."
        },
        {
          icon: "🔒",
          title: "Secure Login",
          desc: "Authenticate users with safe and encrypted login."
        },
        {
          icon: "👨‍⚕️",
          title: "Doctor Directory",
          desc: "View all available doctors in the system."
        },
        {
          icon: "📅",
          title: "Appointment Booking",
          desc: "Book appointments with your selected doctor easily."
        },
        {
          icon: "❌",
          title: "Cancel Anytime",
          desc: "Cancel your bookings whenever needed with one click."
        },
        {
          icon: "📋",
          title: "Appointment History",
          desc: "View your appointment history and track records."
        },
      ].map((feature, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="feature-card p-4 text-center h-100">
            <div className="feature-icon mb-3">{feature.icon}</div>
            <h5 className="fw-bold mb-2">{feature.title}</h5>
            <p className="text-muted">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
