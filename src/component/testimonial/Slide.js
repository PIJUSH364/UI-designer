import React, { useEffect } from "react";
import "./Slide.css";
function Slide(props) {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
        } else {
          e.target.classList.remove("show");
        }
      });
    });

    hiddenElement.forEach((el) => {
      observer.observe(el);
      // console.log(el);
    });
  }, []);

  return (
    <div className="slide--container">
      <div className="user--image hidden">
        <figure>
          <img src={props.logo} alt="user-img" />
        </figure>
      </div>
      <div className="user--name hidden">
        <p>{props.name}</p>
      </div>
      <div className="user--rating hidden">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png"
          alt="review"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png"
          alt="review"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png"
          alt="review"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png"
          alt="review"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/17/39/star-152151__340.png"
          alt="review"
        />
      </div>
      <div className="user--review hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit
          ad alias aliquam molestiae eaque, reprehenderit fugit ea consequatur
          nisi dolor natus omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci consequuntur praesentium nisi in?
        </p>
      </div>
    </div>
  );
}

export default Slide;
