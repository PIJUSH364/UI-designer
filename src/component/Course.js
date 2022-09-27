import React from "react";
import "./Course.css";
function Course() {
  return (
    <div
      className="course"
      // style={{
      //   backgroundImage: `url(${"https://media.istockphoto.com/photos/sun-glitter-on-a-body-of-water-in-the-uk-picture-id1370252920?b=1&k=20&m=1370252920&s=170667a&w=0&h=nEE8QcV81c4eGVcm8LtdQoLSEBcdxLj-S8jybkHiwvY="})`,
      // }}
    >
      <div className="course-title">
        <div className="course-title-left">
          <p>FIND</p>
          <small>Your course.</small>
        </div>
        <div className="course-title-right">
          <li className="edition">EDITION</li>
          <p className="year">2022</p>
        </div>
      </div>
      <div className="allCourse">
        <div className="course-box">
          <div className="courseNo">.01</div>
          <div className="course-deatils">
            <p className="course--serial">
              COURSE<span>&nbsp;01</span>
            </p>
            <p id="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fuga eius labore quae temporibus sunt soluta, repellendus et
              itaque vero doloremque, dicta cum!
            </p>
            <button className="read-button">READ MORE</button>
          </div>
        </div>
        <div className="course-box">
          <div className="courseNo">.02</div>
          <div className="course-deatils">
            <p className="course--serial">
              COURSE<span>&nbsp;02</span>
            </p>
            <p id="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fuga eius labore quae temporibus sunt soluta, repellendus et
              itaque vero doloremque, dicta cum!
            </p>
            <button className="read-button">READ MORE</button>
          </div>
        </div>
        <div className="course-box">
          <div className="courseNo">.03</div>
          <div className="course-deatils">
            <p className="course--serial">
              COURSE<span>&nbsp;03</span>
            </p>
            <p id="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fuga eius labore quae temporibus sunt soluta, repellendus et
              itaque vero doloremque, dicta cum!
            </p>
            <button className="read-button">READ MORE</button>
          </div>
        </div>
        <div className="course-box">
          <div className="courseNo">.04</div>
          <div className="course-deatils">
            <p className="course--serial">
              COURSE<span>&nbsp;04</span>
            </p>
            <p id="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fuga eius labore quae temporibus sunt soluta, repellendus et
              itaque vero doloremque, dicta cum!
            </p>
            <button className="read-button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="more-corses">
        <p>MORE COURSES</p>
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
}

export default Course;
