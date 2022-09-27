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
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide
              logo="https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
              name="HARRY ROOT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              logo="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              name="LURA SMITH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              logo="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTcyOTI1OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              name="JOHN ALI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              logo="https://images.unsplash.com/photo-1543269664-647163ef2ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxEckxhYmtHaVZyd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              name="HARRY ROOT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              logo="  https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxNzI5MjU4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              name="PUNAM SINGH"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              logo="https://images.unsplash.com/photo-1514278033938-06f80809a42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTcyOTI1OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              name="DEVID ROY"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default Testimonial;
