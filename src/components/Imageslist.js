import React from "react";
import "./Imageslist.css";

function imageslist() {
  return (
    <>
      <div className="container-fluid mt-4 our-products-container ">
        <h1 className="text-center">Our Products</h1>

        {/* TexturePaints */}
        <div className="row pt-4 pb-4 our-product-row1">
          <div className="col-xxl-6 col-xl-6 d-flex justify-content-end">
            <img
              className="image-fluid product-image w-75  "
              src="texture-paint.jpg"
              alt=""
            />
          </div>
          <div className="col-6 d-flex flex-column align-items-center p-5">
            <h3>TEXTURE PAINTS</h3>
            <p>
              Texture painting gives an extraordinary look to your house. It is
              a very popular type of paint to cover drywall. The paint has heavy
              consistency and consists of grains of sand and/or gypsum which is
              bound by a water-thinned binder. Use of texture paint creates a
              roughly patterned effect on the wall Pick from a large variety of
              textures available for different conditions and give your wall the
              perfect look
            </p>
            <button type="button" class="btn btn-light btn-lg learn-more">Learn More</button>
          </div>
          

        </div>

        {/* Interior wall paints   */}
        <div className="row pt-4 pb-4 our-product-row2 ">
          <div className="col-6 d-flex flex-column align-items-center">
            <h3>INTERIOR WALL PAINTS</h3>
            <p className="p-5">
              Every hue breathes a fresh wave of emotion, bringing your walls to
              life and filling your home with vibrant energy. Asecenda paint
              leverage world-class technology and innovation to bring you a wide
              array of kaleidoscopic color choices and superior features.
            </p>
            <button type="button" class="btn btn-light btn-lg learn-more">Learn More</button>
          </div>

          <div className="col-xxl-6 col-xl-6 pt-3 d-flex justify-content-start">
            <img
              className="image-fluid product-image w-75 "
              src="interior-wall-paint.jpg"
              alt=""
            />
          </div>
          </div>

          {/* Exterior wall paint   */}
          <div className="row pt-4 pb-4  our-product-row3">
            <div className="col-xxl-6 col-xl-6 pt-3 d-flex justify-content-end">
              <img
                className="image-fluid product-image w-75 "
                src="exterior-wall-paint.jpg"
                alt=""
              />
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
              <h3>EXTERIOR WALL PAINTS</h3>
              <p className="p-5">
                Ascenda Paint has a range of exterior paints that gives your
                walls an impression that invokes envy and lasts a lifetime.These
                exterior emulsions will protect and preserve the freshness of
                your home and the impression it leaves.
              </p>
              <button type="button" class="btn btn-light btn-lg learn-more">Learn More</button>
            </div>
          </div>

            {/* coats and primer */}

            <div className="row pt-4 pb-4 our-product-row4 ">
          <div className="col-6 d-flex flex-column align-items-center">
            <h3>COATS AND PRIMERS</h3>
            <p className="p-5">
            Ascenda paints has a primer or undercoat is a preparatory coating put on materials before painting. Priming ensures better adhesion of paint to the surface, increases paint durability, and provides additional protection for the material being painted.
            </p>
            <button type="button" class="btn btn-light btn-lg learn-more" >Learn More</button>
          </div>

          <div className="col-xxl-6 col-xl-6 pt-3 d-flex justify-content-start">
            <img
              className="image-fluid product-image w-75 "
              src="services-1.jpg"
              alt=""
            />
          </div>
          </div>

        </div>
        
      
    </>
  );
}

export default imageslist;
