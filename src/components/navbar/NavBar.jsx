import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <Link to="/info">Info</Link>
        </li>

        <li className="navbar-item">
          <Link to="/todos">Todos</Link>
        </li>

        <li className="navbar-item">
          <Link to="/calendar">
            <FaCalendarAlt size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
