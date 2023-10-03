import React from "react";
import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Portfolios from "../Components/portfolio/Portfolios";
import Aboutus from "../Components/about/Aboutus";
import TopBar from "../Components/common/TopBar";

function HomePage() {
  return (
    <>
      <TopBar />
      <Slider2 />
      <Aboutus/>
      <Portfolios />
      <Contact />
    </>
  );
}

export default HomePage;
