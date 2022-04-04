import React from "react";
import "./Wallpaints.css";
import Coated from "../data/coated.json";
import Vform from "./Vform"

function Wallpaints() {

  // const [count, setCount] = useState()


  return (
    <>
      <div className="container-fluid">


        <div className="row justify-content-center">
        {/* first column */}
          
          <div className="texture-selector col-xxl-2 col-md-2 pt-5 d-flex flex-column">
            <h1>Select Shades</h1>
            <div className="button-group">
              <button
                className="btb btn-warning w-100 mb-4 btn-lg "
                
              >
                Yellow
              </button>

              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                
              >
                Blue
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
               
              >
                Green
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
               
              >
                Red
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
               
              >
                Orange
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
               
              >
                Pink
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                
              >
                Brown
              </button>
              <button
                className="btb btn-warning w-100 mb-4 btn-lg"
                
              >
                Grey
              </button>
              
            
          </div>
          </div>

        {/* second column */}
          <div className="col-xxl-6 ">
            <div className="row justify-content-center">
              {Coated.map((value) => {
                return (
                  <>
                    <div
                      className="plain-color col-xxl-2 col-xl-2 col-lg-3 m-3 image-fluid "
                      style={{ backgroundColor: value.hex }}
                    >
                      {/* <h1>{value.hex}</h1> */}
                    </div>
                  </>
                );
              })}
            </div>

            
          </div>
          <Vform/>   
          
        </div>
      </div>
    </>
  );
}
export default Wallpaints;


