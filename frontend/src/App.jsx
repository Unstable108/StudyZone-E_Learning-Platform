import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Verify from "./components/pages/auth/Verify-otp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify_otp" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
