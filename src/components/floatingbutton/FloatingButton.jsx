import React from "react";
import "./FloatingButton.css";
import { useNavigate, useLocation } from "react-router";
const FloatingButton = ({ showForm, setShowForm }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      onClick={() => {
        if (location.path !== "todos") {
          navigate("/todos");
          setShowForm(!showForm);
        }
      }}
      className="floating-btn"
    >
      {showForm ? "←" : "+"}
    </button>
  );
};

export default FloatingButton;
