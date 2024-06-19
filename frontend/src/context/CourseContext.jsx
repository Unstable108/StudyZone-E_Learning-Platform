import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";
import axios from "axios";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [mycourse, setMyCourse] = useState([]);

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

  const fetchMyCourse = async () => {
    try {
      const { data } = await axios.get(`${server}/api/mycourse`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setMyCourse(data.courses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchMyCourse();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        course,
        setCourses,
        fetchCourses,
        fetchCourse,
        mycourse,
        fetchMyCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
