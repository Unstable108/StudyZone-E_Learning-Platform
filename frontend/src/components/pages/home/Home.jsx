import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimontials from "../../testimonials/Testimontials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learing Platform</h1>
          <p>Learn, Grow, and Earn</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Testimontials />
    </>
  );
};

export default Home;
