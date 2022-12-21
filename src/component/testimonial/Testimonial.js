import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";

// import required modules
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { testimonialUsers } from "./testimonialUsers";

SwiperCore.use([Autoplay]);

function Testimonial() {
  let noOfSlide = 1;
  if (window.innerWidth < 500) {
    noOfSlide = 1;
  } else if (window.innerWidth < 1000) {
    noOfSlide = 2;
  } else {
    noOfSlide = 3;
  }

  return (
    <div className="testimonialSlider--container">
      <>
        <Swiper
          slidesPerView={noOfSlide}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {testimonialUsers.map((user, key) => (
            <SwiperSlide key={key}>
              <Slide logo={user.logo} name={user.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}

export default Testimonial;
