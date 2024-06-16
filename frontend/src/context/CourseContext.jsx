import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";
import axios from "axios";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  async function fetchCourses() {
    try {
      const response = await axios.get(`${server}/api/course/all`);

      setCourses(response.data.courses); // Make sure this matches the structure
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, setCourses, fetchCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
