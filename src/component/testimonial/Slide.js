import React from "react";
import "./Slide.css";
function Slide() {
  return (
    <div className="slide--container">
      <div className="user--image">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="user-img"
          />
        </figure>
      </div>
      <div className="user--name">
        <p>JOHN SMITH</p>
      </div>
      <div className="user--rating">
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
      <div className="user--review">
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
