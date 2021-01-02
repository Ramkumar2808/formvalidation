import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav id="nav-bar">
      <div id="logo">
        <i className="fa fa-cubes" aria-hidden="true"></i>
        {props.head}
      </div>
      <input type="search" name="" id="search-bar" placeholder="Search" />

      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>
            <i className="fa fa-sign-in" aria-hidden="true"></i>Login
          </li>
        </Link>
        <Link to="/Signup" style={{ textDecoration: "none", color: "black" }}>
          <li>
            <i className="fa fa-user-plus" aria-hidden="true"></i>Register
          </li>
        </Link>
        <Link to="/Products" style={{ textDecoration: "none", color: "black" }}>
          <li>
            <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>Products
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
