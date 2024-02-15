import React from "react";
import "./Navbar.scss";

import logo from "../../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar nav">
      <img src={logo} alt="logo" className="nav__image-logo" />
      <ul className="nav__wrapper">
        <a href="#" className="nav__pathname">
          ABOUT
        </a>
        <main className="nav__toggle">
          <div className="nav__toggle-line"></div>
          <div className="nav__toggle-line"></div>
          <div className="nav__toggle-line"></div>
        </main>
      </ul>
    </nav>
  );
};

export default Navbar;
