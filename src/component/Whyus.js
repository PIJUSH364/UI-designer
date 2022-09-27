import React from "react";
import { useEffect } from "react";
import "./Whyus.css";
// import whyimg from "../images/pijush.png";
function Whyus() {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".hidden--why");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show--why");
        } else {
          e.target.classList.remove("show--why");
        }
      });
    });

    hiddenElement.forEach((el) => {
      observer.observe(el);
      // console.log(el);
    });
  }, []);
  return (
    <div
      className="whyus"
      // style={{
      //   backgroundImage: `url(${"https://images.unsplash.com/photo-1548630435-998a2cbbff67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcHxlbnwwfHwwfHw%3D&w=1000&q=80"})`,

      // }}
    >
      <div className="whyusleft"></div>
      <div className="whyusright hidden--why">
        {" "}
        <p className="whyus-title">
          Why&nbsp;<span>us</span>
        </p>
        <p className="whyus-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          aliquam reprehenderit asperiores inventore ipsum eligendi vero odio
          eius adipisci? Possimus, dolor suscipit non magni id natus nam
          accusantium ab. Error iste veniam illo dicta numquam!
        </p>
        <button className="whyus-button">READ MORE</button>
      </div>
    </div>
  );
}

export default Whyus;
