import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
