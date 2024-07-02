import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { Userdata } from "../../../context/UserContext";
import { CourseData } from "../../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = Userdata();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  const guestLoginHandler = async () => {
    const guestEmail = "debasish2000.26@gmail.com"; // Replace with the guest email
    const guestPassword = "123456"; // Replace with the guest password
    await loginUser(guestEmail, guestPassword, navigate, fetchMyCourse);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-mail"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
          <button disabled={btnLoading} type="submit" className="common-btn">
            {btnLoading ? "Please wait..." : "Login"}
          </button>
        </form>
        <button
          disabled={btnLoading}
          onClick={guestLoginHandler}
          className="common-btn guest-btn"
        >
          {btnLoading ? "Please wait..." : "Guest Login"}
        </button>
        <p>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
