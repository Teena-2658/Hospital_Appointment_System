import React from 'react';
import './Services.css';

const services = [
  {
    title: "Outpatient Services",
    desc: "Consult with our top doctors without hospitalization.",
    image: "https://study.com/cimages/videopreview/videopreview-full/inm2rzotgx.jpg"
  },
  {
    title: "Emergency Services",
    desc: "24/7 emergency care by expert physicians and staff.",
    image: "https://img.freepik.com/premium-vector/set-emergency-service_108061-1764.jpg"
  },
  {
    title: "Diagnostics",
    desc: "Modern diagnostic and lab testing services.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQbJoE4O1fG4vjp8cOE2aACASvT4WNo16YQ&s"
  },
  {
    title: "Pharmacy",
    desc: "Well-stocked pharmacy with prescribed medicines.",
    image: "https://thumbs.dreamstime.com/b/pharmacy-interior-blurred-background-58416047.jpg"
  },
  {
    title: "Inpatient Care",
    desc: "Comfortable rooms and attentive nursing staff.",
    image: "https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2020/10/14035723/RC-BSN-DNP-2020-Q3-Skyscraper-Inpatient-vs-Outpatient-Care-Whats-the-Difference-miniIG1-a-v2-1000x594.jpg"
  },
  {
    title: "Surgery & Operation",
    desc: "Safe and advanced surgical procedures.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggzCUK6YkXnjzN2iCC3pOiOy4T2PtU6gLHg&s"
  }
];

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary fw-bold">Our Medical Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card service-card h-100 shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top service-image"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-muted">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
