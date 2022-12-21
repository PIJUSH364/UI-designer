import React from "react";
import "./Carousel.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
function Carousel() {
  return (
    <div className="carousel" id="homeSection">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Carousel;
