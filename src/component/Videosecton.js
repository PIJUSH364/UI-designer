import "./Videosecton.css";
import React from "react";
// import video from "../video/v2.mp4";
import poster from "../images/p3.png";
function Videosecton() {
  return (
    <div className="video-section">
      <div className="sub-viseo-title">
        <i class="fa-solid fa-arrow-right-long"></i>
        <p className="sub-title-front">
          READY TO <br />
          GET STARTED
        </p>
      </div>
      <div className="video">
        {" "}
        <video
          poster={poster}
          // src={video}
          autoPlay
          muted
          // controls
        ></video>
      </div>
      <div className="sub-viseo-title">
        <p className="sub-title-rear">
          READY TO <br />
          GET STARTED
        </p>
        <i class="fa-solid fa-arrow-left-long"></i>
      </div>
    </div>
  );
}

export default Videosecton;
