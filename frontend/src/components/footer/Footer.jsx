import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>
            &copy; 2024 My own E-padhai Platform. <br />
            Made by
            <a href="https://debasish-das-portfolio0.netlify.app/"> Unstable</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/unstable108/">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/debasish-das-092503149/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
