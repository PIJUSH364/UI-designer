import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-col footer-about">
        <p className="footer-col-title">About</p>
        <ul>
          <li>History</li>
          <li>Our team</li>
          <li>Mission statement</li>
          <li>Terms&Condition</li>
          <li>PrivacyPolicy</li>
        </ul>
      </div>
      <div className="footer-col footer-what">
        <p className="footer-col-title">What we do</p>
        <ul>
          <li>News & Stories</li>
          <li>Publication</li>
          <li>Take action</li>
          <li>Recomendation</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="footer-col footer-newslettrer">
        <div className="newsletter-titleAll">
          <p className="footer-col-title">Sign Up To Receive</p>
          <p className="footer-col-title">___ Our newsletter</p>
        </div>
        <div>
          <div className="follow-icon">
            <div>
              {" "}
              <input type="text" />
            </div>

            <div className="icon-list icon-container">
              {" "}
              <p>Follow Us!</p>
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
