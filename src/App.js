import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Services from "./components/Services";
import Wallpaints from "./components/Wallpaints";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/texturepaints" element={<Productlist/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/wallpaints" element={<Wallpaints/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
