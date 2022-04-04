import React, { useState } from "react";
import products from "../data/data";
import description from "../data/description";
import Vform from "./Vform";
import "./Productlist.css";

import "./Productlist.css";
import Gallery from "./Gallery";
import { VapeFree } from "@mui/icons-material";

function Productlist() {
  const [data, setData] = useState(products);
  const [desc, setDesc] = useState(description);

  const filterResult = (paintCat) => {
    // console.log(paintCat)
    const result = products.filter((obj) => {
      return obj.category === paintCat;
    });
    setData(result);
  };

  const settingDescription = (cate) => {
    const result = description.filter((obj) => {
      return obj.category === cate;
    });

    setDesc(result);
  };

  return (
    <>
      <div className="container-fluid w-container">
        {/* Sidebar with col-2*/}
        <div className="row justify-content-center ">
          <div className="texture-selector col-xxl-2 col-md-2 pt-5 d-flex flex-column">
            <h1>Select Textures</h1>
            <div className="button-group">
              <button
                className="btb btn-warning w-100 mb-4 btn-lg "
                onClick={() => {
                  filterResult("spick");
                  settingDescription("spick");
                }}
              >
                Spick
              </button>

              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("godess");
                  settingDescription("godess");
                }}
              >
                Ocean
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("marbitto");
                  settingDescription("marbitto");
                }}
              >
                Marbitto
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("silicano-gold");
                  settingDescription("silicano");
                }}
              >
                Silicano Gold
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("silicano-silver");
                  settingDescription("silicano");
                }}
              >
                Silicano Silver
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("metallic");
                  settingDescription("metallic");
                }}
              >
                Metallic
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("swearl-pearl");
                  settingDescription("swearl-pearl");
                }}
              >
                Cosmo-Turf
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("tango");
                  settingDescription("tango");
                }}
              >
                Fabrico Matt Finish Paint
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                onClick={() => {
                  filterResult("velvetto");
                  settingDescription("velvetto");
                }}
              >
                Velvetto
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg "
                onClick={() => {
                  filterResult("bubble");
                  settingDescription("bubble");
                }}
              >
                Bubble
              </button>
            </div>
          </div>

          {/* productCard with col-6*/}
          <div className=" col-xxl-6 pt-5 col-xl-8 justify-content-between flex-wrap d-flex">
            <div className="container-fluid p-4">
              {desc.map((value) => {
                return (
                  <>
                    <h1>{value.title}</h1>
                    <p>{value.descr}</p>
                  </>
                );
              })}
            </div>
            {data.map((value) => {
              
              const { image, name} = value;
              return (
                <div className="cardbox mx-2 mb-4 g-2">
                  <div
                    className="card align-items-left d-flex pb-1"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={image}
                      className=" paint-image card-img-top pt-1 px-1"
                      alt="..."
                    />

                    <div className="card-body">
                      <h5 className="card-title  ">{name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Vform />
        </div>
      </div>
      <Gallery />
    </>
  );
}

export default Productlist;
export { products };
