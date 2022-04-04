import React from "react";
import { Link } from "react-router-dom";

function Vlog1() {
  return (
    <div className="container-fluid mb-3">
      <div className="row justify-content-center">
        <div className="col-7 ">
          <h1>Latest from our blogs</h1>
          <div className="row ">
            <div className="col-6">
            <Link to="/vlog2">
              <img class="img-fluid" src="vlogs/vlog2/thumbnail.jpg" alt="" />
              </Link>  
              <h3 className="text-center">
                
              Different Shades of Light House Paint Colour One Should Experiment in 2022
                
              </h3>
            </div>
            <div className="col-6">
              <Link to="/vlog3">
                <img class="img-fluid" src="vlogs/vlog3/thumbnail.jpg" alt="" />
              </Link>
              <h3 className="text-center">
              4 paint colours that will change your mood when you are working from home
              </h3>
            </div>
            <div className="col-6">
            <Link to="/vlog4">
              <img class="img-fluid" src="vlogs/vlog4/thumbnail.jpg" alt="" />
              </Link>  
              <h3 className="text-center">
              4 Things To Consider When Painting Your House in Summers
              </h3>
            </div>
            <div className="col-6">
            <Link to="/vlog5">
              <img class="img-fluid" src="vlogs/vlog5/thumbnail.jpg" alt="" />
              </Link>  
              <h3 className="text-center">
              5 Tips & Tricks that will Give a Unique Look to Your Living Room Decor
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vlog1;
