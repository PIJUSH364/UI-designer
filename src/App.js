import React from "react";
import "./App.css";
// import Carousal from "./component/Carousal";
import Course from "./component/Course";

import Newchallange from './component/Newchallange';
import Testemonial from './component/Testemonial';
import Videosecton from './component/Videosecton';
import Newsletter from './component/Newsletter';

import Achievement from './component/Achievement';
import About from './component/contactSection/About';

import Carousel from './component/carousel/Carousel';
import NavBar from './component/navBar/Nav';
import Footer from './component/footer/Footer';
import WhyUs from './component/contactSection/WhyUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Achievement />
      <Newchallange />
      <Course />
      <About />
      {/* <WhyUs /> */}
      <Videosecton />
      <Testemonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
