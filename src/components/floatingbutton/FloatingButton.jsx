import React from "react";
import "./FloatingButton.css";

const FloatingButton = ({ showForm, setShowForm }) => {
  return (
    <button onClick={() => setShowForm(!showForm)} className="floating-btn">
      {showForm ? "←" : "+"}
    </button>
  );
};

export default FloatingButton;
