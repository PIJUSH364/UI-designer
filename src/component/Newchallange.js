import React from "react";
import "./Newchallange.css";
// import challange from "../images/pijush5.png";

function Newchallange() {
  return (
    <div
      className="challenge"
      // sco
    >
      <div className="section-title">
        <p className="one">ACCEPT</p>
        <p className="two">NEW</p>
        <p className="three">CHALLENGES</p>
      </div>
      <div className="button-challenge">
        <p>EXPLORE</p>
        <p>
          <i className="fa-solid fa-arrow-down-long"></i>
        </p>
        <p>ABOUT</p>
      </div>
    </div>
  );
}

export default Newchallange;
