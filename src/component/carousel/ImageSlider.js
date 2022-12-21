import React, { useState } from "react";
import "./Carousel.css";
import { SliderData } from "./SliderData";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Scale } from '@mui/icons-material';

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  const length = SliderData.length;
  //   console.log(length);
  
  // hover effect create help of useState
  const handleMouseEnterLeft = () => {
    setIsHoverLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setIsHoverLeft(false);
  };

  const handleMouseEnterRight = () => {
    setIsHoverRight(true);
  };

  const handleMouseLeaveRight = () => {
    setIsHoverRight(false);
  };
  const leftIcon = {
    transition: 'all 1s ease-in-out',
    transform: isHoverLeft ? 'scale(1.4)' : '',
    color: isHoverLeft ? '#9577f9' : '#fff',
  };
  const rightIcon = {
    transition: 'all 1s ease-in-out',
    transform: isHoverRight ? 'scale(1.4)' : '',
    color: isHoverRight ? '#9577f9' : '#fff',
  };

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <KeyboardDoubleArrowLeftIcon
        style={leftIcon}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
        className="left-arrow"
        onClick={prevSlide}
      />
      <KeyboardDoubleArrowRightIcon
        style={rightIcon}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
        className="right-arrow"
        onClick={NextSlide}
      />

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  // background: "black",
                }}
                className="image">
                {/* update content */}
                <div className="imgTextcontent">
                  <div className="section-up">
                    <div className="span-right-box">
                      <p className="editon">EDITION</p>
                      <p className="year">2022</p>
                    </div>
                  </div>
                  <div className="section-down border">
                    <div className="section-down-one-subbox border">
                      <h2>BEGINNER'S</h2>
                    </div>
                    <div className="section-down-two-subbox border">
                      <li>BECOME A</li>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;PRO-DESIGNER</p>
                    </div>
                    <div className="section-down-three-subbox border">
                      {/* EMPTY */}
                    </div>
                    <div className="section-down-four-subbox">
                      <h3>START GUIDE FOR BEGINNER DESIGNERS</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat consectetur sit expedita, vitae temporibus
                        minima iure.
                      </p>
                      <div className="button-subbox">
                        <button className="start-button">LET'S START</button>
                        <button className="read-more">READ MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
