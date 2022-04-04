import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Services from "./components/Services";
import Wallpaints from "./components/Wallpaints";
import Vlog2 from "./components/Vlog2.js";
import Vlog3 from "./components/Vlog3.js";
import Vlog4 from "./components/Vlog4.js";
import Vlog5 from "./components/Vlog5.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/texturepaints" element={<Productlist />} />
          <Route path="/services" element={<Services />} />
          <Route path="/wallpaints" element={<Wallpaints />} />
          <Route path="/vlog2" element={<Vlog2 />} />
          <Route path="/vlog3" element={<Vlog3 />} />
          <Route path="/vlog4" element={<Vlog4 />} />
          <Route path="/vlog5" element={<Vlog5 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
