import React from "react";
import "./Input.css";

const Input = ({ name, type, onChange, placeholder, value }) => {
  return (
    <div className="inputfield">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
