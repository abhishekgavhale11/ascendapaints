import React, { useState } from "react";
import products from "../data";
import Card from "./Card";
// import Menubar from "./Menubar";
import "./Productlist.css";

function Productlist() {
  const [data, setData] = useState(products);
  const filterResult = (paintCat) => {
    // console.log(paintCat)
    const result = products.filter((curData) => {
      return curData.category === paintCat;
    });
    setData(result);
  };

  return (
    <>
      <div className="container-fluid ">
        -{/* Sidebar with col-2*/}
        <div className="row mt-5">
          <div className="col-md-2 ">
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("spick")}
            >
              Spick
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("bubble")}
            >
              Bubble
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("glitz")}
            >
              Glitz
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("godess")}
            >
              Godess Of Ocean
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("marbitto")}
            >
              Marbitto
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("silicano-gold")}
            >
              Silicano Gold
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("silicano-silver")}
            >
              Silicano Silver
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("sparklz-metallic")}
            >
              Sparklz Metallic
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("swearl-pearl")}
            >
              swearl-pearl
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("tango")}
            >
              Tango
            </button>
            <button
              className="btb btn-warning w-100 mb-4"
              onClick={() => filterResult("velvetto")}
            >
              Velvetto
            </button>
          </div>

          {/* productCard with col-10*/}
          <div className="col-md-10 list container-fluid d-flex flex-wrap justify-content-around ">
            {data.map((value) => {
              return <Card key={value.id} value={value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
export { products };
