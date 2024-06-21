import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import "./account.css";
import { Userdata } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = Userdata();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <>
      {user && (
        <div className="container">
          <div className="sidenav">
            <div className="profile">
              <img
                src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
                alt="Profile Pic"
                width="100"
                height="100"
              />
              <div className="name">{user.name}</div>
            </div>
            <div className="sidenav-links">
              <a href="#profile" className="active">
                Profile
              </a>
              {user.role === "admin" && (
                <a href="/admin/dashboard">Admin Dashboard</a>
              )}
              <a href={`/${user._id}/dashboard`}>Dashboard</a>
            </div>
          </div>
          <div className="main">
            <h2>Identity</h2>
            <div className="card">
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button onClick={logoutHandler} className="logout-btn">
              <IoIosLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
