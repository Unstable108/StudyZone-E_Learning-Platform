import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../../context/CourseContext";
import { server } from "../../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Userdata } from "../../../context/UserContext";
import Loading from "../../loading/Loading";

const CourseDescription = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { course, fetchCourse, fetchCourses, fetchMyCourse } = CourseData();
  const [loading, setLoading] = useState(false);
  const { fetchUser } = Userdata();

  useEffect(() => {
    fetchCourse(id);
  }, [id, fetchCourse]);

  if (!course) {
    return <Loading />;
  }

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_test_sNa01KXL7AYaAP", // Enter the Key ID generated from the Dashboard
      amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Study Zone", // your business name
      description: "Test Transaction",
      order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      },
      theme: {
        color: "#8a4baf",
      },
    };
    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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

          <p className="course-price">
            Let's get started with the course at ₹{course.price}
          </p>

          {user && user.subscription.includes(course._id) ? (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          ) : (
            <button onClick={checkoutHandler} className="common-btn3">
              Enroll Now
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CourseDescription;
