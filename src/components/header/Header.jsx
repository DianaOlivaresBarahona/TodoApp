import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <Link to="/" className="header-logo">
            PrioritEase
          </Link>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <NavBar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
    </section>
  );
};

export default Header;
