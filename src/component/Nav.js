import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h4>Your logo</h4>
      </div>
      <div className="nav-menu-list">
        <ul className="menu-list">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>COURSES</li>
          <li>BLOG</li>
        </ul>
      </div>
      <div className="sign-menu">
        <div className="login-button">
          <button className="button">SIGN IN</button>
        </div>
        <div className="responsive-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
