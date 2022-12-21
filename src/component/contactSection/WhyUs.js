import React from 'react';
import { useEffect } from 'react';
import './whyUs.css';
// import whyimg from "../images/pijush.png";
function WhyUs() {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll('.hidden--why');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show--why');
        } else {
          e.target.classList.remove('show--why');
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
      className="whyUs"
      style={{
        backgroundImage: `url(${'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&fit=crop&w=1000&q=80'})`,
      }}>
      <div className="whyUsleft"></div>
      <div className="whyUsright hidden--why">
        {' '}
        <p className="whyUs-title">
          Why&nbsp;<span>us</span>
        </p>
        <p className="whyUs-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          aliquam reprehenderit asperiores inventore ipsum eligendi vero odio
          eius adipisci? Possimus, dolor suscipit non magni id natus nam
          accusantium ab. Error iste veniam illo dicta numquam!
        </p>
        <button className="whyUs-button">READ MORE</button>
      </div>
    </div>
  );
}

export default WhyUs;
