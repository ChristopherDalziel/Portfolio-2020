import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>nav</h1>
      <h2>
        <Link to="/">Home page</Link>
      </h2>
      <h2>
        <Link to="/about">About Me</Link>
      </h2>
      <h2>
        <Link to="/portfolio">Portfolio</Link>
      </h2>
      <h2>
        <Link to="/contact">Contact Me</Link>
      </h2>
    </div>
  );
};

export default Nav;
