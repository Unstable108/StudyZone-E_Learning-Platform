import React from "react";
import "./coursecard.css";
import { server } from "../../main";
import { Userdata } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  // Replace backslashes with forward slashes in the image path
  const imageUrl = `${server}/${course.image}`.replace(/\\/g, "/");

  const navigate = useNavigate();
  const { user, isAuth } = Userdata();

  return (
    <div className="course-card">
      <img src={imageUrl} alt={course.title} className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor - {course.createdBy}</p>
      <p>Duration - {course.duration} weeks</p>
      <p>Price - INR {course.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}

      <br />
      {user && user.role === "admin" && (
        <button className="delete-btn">Delete</button>
      )}
    </div>
  );
};

export default CourseCard;
