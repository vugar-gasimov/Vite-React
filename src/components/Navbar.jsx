import React from "react";
import img from "../assets/reactjs-icon.svg";

const Navbar = () => {
  return (
    <nav>
      <img className="nav--logo" src={img} width="50" alt="react icon" />
      <p className="nav--logo_title">ReactFacts</p>
      <p className="nav--title">React Course Project 1</p>
    </nav>
  );
};

export default Navbar;
