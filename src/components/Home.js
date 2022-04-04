import React from "react";
import Carousel from "./Carousel";
import Hform from "./Hform";

import "./Home.css";
import Imageslist from "./Imageslist";
import Vlog1 from "./Vlog1"

function Home() {
  return (
    <>
      <Carousel />
      <Hform />
      <Imageslist />
      
      <Vlog1/>
    </>
  );
}

export default Home;
