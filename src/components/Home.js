import React from "react";
import Carousel from "./Carousel";
import Hform from "./Hform";
import Faqs from "./Faqs";
import "./Home.css";
import Imageslist from "./Imageslist";

function Home() {
  return (
    <>
      <Carousel />
      <Hform />
      <Imageslist />
      <Faqs />
    </>
  );
}

export default Home;
