import React from "react";
import "./App.css";
import Carousal from "./component/Carousal";
import Course from "./component/Course";
import Nav from "./component/Nav";
import Newchallange from "./component/Newchallange";
import Testemonial from "./component/Testemonial";
import Videosecton from "./component/Videosecton";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";
import Achievement from "./component/Achievement";
import About from "./component/About";
import Whyus from "./component/Whyus";
import Carousel from "./component/carousel/Carousel";
function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Achievement />
      <Newchallange />
      <Course />
      <About />
      <Whyus />
      <Videosecton />
      <Testemonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
