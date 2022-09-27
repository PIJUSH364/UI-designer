import React from "react";
import "./Testemonial.css";
import Testimonial from "./testimonial/Testimonial";

function Testemonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-title">
        <p>WHAT</p>
        <p className="sub-testimonial-title">users think</p>
      </div>

      <div>
        <Testimonial />
      </div>
    </div>
  );
}

export default Testemonial;
