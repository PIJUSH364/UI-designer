import React, { useEffect } from "react";
import "./About.css";
function About() {
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
      className="about"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"})`,
      }}
    >
      <div className="about-col about-left hidden--why">
        <p className="about-title">
          About&nbsp;<span>us</span>
        </p>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          totam cupiditate impedit obcaecati culpa sapiente ullam!
        </p>
        <ul>
          <li>Lorem, ipsum dolor</li>
          <li>Lorem, ipsum dolor</li>
          <li>Lorem, ipsum dolor</li>
          <li>Lorem, ipsum dolor</li>
        </ul>
        <div className="readmore-about-button">
          <button className="about-button">READ MORE</button>
        </div>
      </div>
      <div className="about-col about-right"></div>
    </div>
  );
}

export default About;
