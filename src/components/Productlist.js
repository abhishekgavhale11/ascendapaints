import React, { useState } from "react";
import products from "../data/data"; 

import "./Productlist.css";
import formatCurrency from "format-currency";
// import Menubar from "./Menubar";

import "./Productlist.css";

function Productlist() {
  const [data, setData] = useState(products);

  const filterResult = (paintCat) => {
    // console.log(paintCat)
    const result = products.filter((obj) => {
      return obj.category === paintCat;
    });
    setData(result);
  };

  return (
    //     X-Small	None	<576px
    //     Small	sm	≥576px
    //     Medium	md	≥768px
    //   Large	lg	≥992px
    // Extra large	xl	≥1200px
    // Extra extra large	xxl	≥1400px

    <>
      <div className="container-fluid ">
        {/* Sidebar with col-2*/}
        <div className="row   ">
          <div className="col-md-2 col-xl-2 pt-5">
            <h1>Texture paints</h1>

            <button
              className="btb btn-warning w-100 mb-4 btn-lg "
              onClick={() => filterResult("spick")}
            >
              Spick
            </button>

            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("glitz")}
            >
              Glitz
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("godess")}
            >
              Ocean
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("marbitto")}
            >
              Marbitto
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("silicano-gold")}
            >
              Silicano Gold
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("silicano-silver")}
            >
              Silicano Silver
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("sparklz-metallic")}
            >
              Sparklz Metallic
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("swearl-pearl")}
            >
              swearl-pearl
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("tango")}
            >
              Tango
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg"
              onClick={() => filterResult("velvetto")}
            >
              Velvetto
            </button>
            <button
              className="btb btn-warning w-100 mb-4 btn-lg "
              onClick={() => filterResult("bubble")}
            >
              Bubble
            </button>
          </div>

          {/* productCard with col-10*/}
          <div className="col-md-8 col-xl-8 pt-4  col-xl-8 justify-content-between flex-wrap d-flex">
                <p></p>
                {data.map((value) => {
                  let opts = { format: "%s%v", symbol: "$" };
                  const { image, name, price } = value;
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
                          <h6>{formatCurrency(`${price}`, opts)}</h6>
                        </div>

                        <a href="#" className="btn btn-primary ">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  );
                })}
            
          </div>

          <div className="col-md-2 col-xl-2  pt-5">
            <form>
              <div class="mb-3  ">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
export { products };
