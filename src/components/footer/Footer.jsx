import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to="/alltodos">
        <button className="all-todos-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
          <span>Alla Göromål</span>
        </button>
      </Link>

      <Link to="/completed-tasks">
        <button className="check-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 19l-7-7 1.41-1.41L9 16.17l11.59-11.59L22 6l-13 13z" />
          </svg>
          <span>Slutförda</span>
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
