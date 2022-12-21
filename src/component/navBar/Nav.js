import React from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div className="navbar" >
      <div className="nav-logo">
        <h4>Your logo</h4>
      </div>
      <div className="nav-menu-list">
        <ul className="menu-list">
          <li>
            <Link
              activeClass="active"
              to="homeSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="courseSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              COURSES
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blogSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              BLOG
            </Link>
          </li>
        </ul>
      </div>
      <div className="sign-menu">
        <div className="login-button">
          <button className="button button_signIn">SIGN IN</button>
        </div>
        <div className="responsive-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
