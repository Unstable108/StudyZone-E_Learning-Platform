import React from "react";
import "./coursecard.css";
import { server } from "../../main";

const CourseCard = ({ course }) => {
  // Replace backslashes with forward slashes in the image path
  const imageUrl = `${server}/${course.image}`.replace(/\\/g, "/");

  return (
    <div className="course-card">
      <img src={imageUrl} alt={course.title} className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor - {course.createdBy}</p>
      <p>Duration - {course.duration} Hrs</p>
      <p>Price - INR {course.price}</p>
      <button className="common-btn">Get Started</button>
    </div>
  );
};

export default CourseCard;
