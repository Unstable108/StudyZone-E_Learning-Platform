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
import Courses from "./components/pages/courses/Courses";
import CourseDescription from "./components/pages/coursedescription/CourseDescription";
import PaymentSuccess from "./components/pages/paymentsuccess/PaymentSuccess";
import Dashboard from "./components/pages/dashboard/Dashboard";
import CourseStudy from "./components/pages/courseStudy/CourseStudy";
import Lecture from "./components/pages/lecture/Lecture";
import AdminDashboard from "./admin/dashboard/AdminDashboard";
import AdminCourses from "./admin/courses/AdminCourses";
import AdminUsers from "./admin/users/AdminUsers";

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
            <Route path="/courses" element={<Courses />} />
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
            <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            />
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user} /> : <Login />}
            />
            <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
            <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />
            <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashboard user={user} /> : <Login />}
            />
            <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUsers user={user} /> : <Login />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
