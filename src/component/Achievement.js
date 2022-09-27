import React from "react";
import "./Achievement.css";
function Achievement() {
  return (
    <div className="achievement">
      <div className="achievement-box student">
        <p className="number">
          <i className="fa-solid fa-plus"></i>
          <p>150</p>
        </p>
        <div className="highlight-tag">
          <p className="subtag">HAPPY</p>
          <p className="maintag">STUDENTS</p>
        </div>
      </div>
      <div className="achievement-box courses">
        <p className="number">
          <i className="fa-solid fa-plus"></i>
          <p>50</p>
        </p>
        <div className="highlight-tag">
          <p className="subtag">CERTIFIED</p>
          <p className="maintag">COURSES</p>
        </div>
      </div>
      <div className="achievement-box award">
        <p className="number">
          <i className="fa-solid fa-plus"></i>
          <p>1000</p>
        </p>
        <div className="highlight-tag">
          <p className="subtag">AWARDS</p>
          <p className="maintag">RECIVED</p>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
