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
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name - {user.name}</strong>
            </p>
            <p>
              <strong>Email - {user.email}</strong>
            </p>
            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn1"
            >
              <MdDashboard />
              Dashboard
            </button>
            <br />
            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn1"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}
            <br />
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
