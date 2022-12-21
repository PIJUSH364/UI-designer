import React, { useEffect } from 'react';
import './About.css';
function About() {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll('.hidden--about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show--about');
        } else {
          e.target.classList.remove('show--about');
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
      id="aboutSection"
      className="about"
      style={{
        backgroundImage: `url(${'https://images.unsplash.com/photo-1611020506182-4c4f56cc882a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHF1cmlvdXMlMjBiYWNrZ3JvdW5kJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=80'})`,
      }}>
      <div className="about-col about-left hidden--about">
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
