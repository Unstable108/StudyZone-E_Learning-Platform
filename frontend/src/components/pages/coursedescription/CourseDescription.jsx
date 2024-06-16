import React, { useEffect } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../../context/CourseContext";
import { server } from "../../../main";

const CourseDescription = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { course, fetchCourse } = CourseData();

  useEffect(() => {
    fetchCourse(id);
  }, [id, fetchCourse]);

  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <div className="course-description">
      <div className="course-header">
        <img
          src={`${server}/${course.image}`}
          alt={course.title}
          className="course-image"
        />
        <div className="course-info">
          <h2>{course.title}</h2>
          <p>Instructor: {course.createdBy}</p>
          <p>Duration: {course.duration} weeks</p>
        </div>
      </div>

      <p className="course-description-text">{course.description}</p>

      <div className="course-actions">
        <p>Let's get started with course at ₹{course.price}</p>
        {user && user.subscription.includes(course._id) ? (
          <button
            onClick={() => navigate(`/course/study/${course._id}`)}
            className="action-btn"
          >
            Study
          </button>
        ) : (
          <button className="action-btn">Buy Now</button>
        )}
      </div>
    </div>
  );
};

export default CourseDescription;
