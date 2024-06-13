import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Verify from "./components/pages/auth/Verify-otp";
import Footer from "./components/footer/Footer";
import About from "./components/pages/about/About";
import Account from "./components/pages/account/Account";
import { Userdata } from "./context/UserContext";
import Loading from "./components/loading/Loading";

const App = () => {
  const { isAuth, loading, user } = Userdata();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route
              path="/verify_otp"
              element={isAuth ? <Home /> : <Verify />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
