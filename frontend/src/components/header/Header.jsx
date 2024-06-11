import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";

const Header = () => {
  const logos = [logo3];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <div className="logo-container">
          <img
            src={logos[currentLogoIndex]}
            alt="logo"
            className="logo-image"
          />
          <div className="logo-text">Study Zone</div>
        </div>
        <div className="link">
          <Link to={"/"}>Home</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/account"}>Account</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
