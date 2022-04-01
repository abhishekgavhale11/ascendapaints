import React from "react";
import "./Wallpaints.css";
import Coated from "../data/coated.json";

function Wallpaints() {

  // const [count, setCount] = useState()


  return (
    <>
      <div className="container-fluid">


        <div className="row">
          <div className="col-1">
            <h1>dsdsdsd</h1>
          </div>

          <div className="col-10 ">
            <div className="row justify-content-center">
              {Coated.map((value) => {
                return (
                  <>
                    <div
                      className="plain-color col-xxl-3 col-xl-3 col-lg-3 m-3 image-fluid "
                      style={{ backgroundColor: value.hex }}
                    >
                      <h1>{value.hex}</h1>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="col-xxl-2">

            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Wallpaints;
