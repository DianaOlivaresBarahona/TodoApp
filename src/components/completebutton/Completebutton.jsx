import React from "react";
import { useNavigate } from "react-router-dom";

const Completebutton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate("/completed-tasks");
  };
  return <button onClick={onClick}>✔</button>;
};

export default Completebutton;
