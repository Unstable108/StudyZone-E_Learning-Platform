import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Your Name" required />
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="Enter Your E-mail" required />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter New Password" required />
          <button className="common-btn">Register</button>
        </form>
        <p>
          Already Have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
