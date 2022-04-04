import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid con-flu">
        <div className="container mt-3 pt-5">
          <div className="row">
            <div className="col-3 d-flex flex-column align-items-start ">
              <h5 id="footerheading">Company name</h5>
              <p id="address">
                Rp-64 near city mall beside sonali garden restaurant, MIDC,
                Dombivli, Maharashtra 421203
              </p>
            </div>

            <div className="col-3 ">
              <h5 id="footerheading">Products</h5>
              <p>
                <Link to="/texturepaints">Texture paints</Link>
              </p>

              <p>
                <a href="">Interior Wall Paints</a>
              </p>

              <p>
                <a href="">wood and metal paints</a>
              </p>
              <p>
                <a href="">Construction Solutions</a>
              </p>
              <p>
                <a href="">primers/undercoats</a>
              </p>
            </div>
            <div className="col-3 ">
              <h5 id="footerheading">Contact</h5>
              <p>
                <a href="">abhu</a>
              </p>

              <p>
                <a href="">abhu</a>
              </p>

              <p>
                <a href="">abhu</a>
              </p>
            </div>
            <div className="col-3 ">
              <h5 id="footerheading">Contact</h5>
              <p>
                <a href="">Mumbai,421202</a>
              </p>

              <p>
                <a href="">ascendapaints@gmail.com</a>
              </p>

              <p>
                <a href="">+91 8355968876</a>
              </p>
            </div>
          </div>
        </div>
        <hr />

      </div>
    </>
  );
}

export default Footer;
