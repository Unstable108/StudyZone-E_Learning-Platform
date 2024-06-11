import React from "react";
import "./testimonials.css";
import { testimonialsData } from "./Testimonital-data";

const Testimontials = () => {
  return (
    <>
      <section className="testimonials">
        <h2>What our learners say</h2>
        <div className="testimonials-cards">
          {testimonialsData.map((e) => (
            <div className="testimonial-card" key={e.id}>
              <div className="student-image">
                <img src={e.image} alt="Student Image" />
              </div>
              <p className="message">{e.message}</p>
              <div className="info">
                <p className="name">{e.name}</p>
                <p className="position">{e.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimontials;
