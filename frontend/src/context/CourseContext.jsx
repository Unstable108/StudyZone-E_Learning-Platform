import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";
import axios from "axios";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);

  async function fetchCourses() {
    try {
      const response = await axios.get(`${server}/api/course/all`);
      setCourses(response.data.courses);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  }

  const fetchCourse = async (id) => {
    try {
      const { data } = await axios.get(`${server}/api/course/${id}`);
      setCourse(data.singleCourse); // Make sure to set singleCourse from response data
    } catch (error) {
      console.log("Error fetching course:", error);
      setCourse(null); // Set course to null if fetching fails
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider
      value={{ courses, course, setCourses, fetchCourses, fetchCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
