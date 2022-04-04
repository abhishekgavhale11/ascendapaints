import React from "react";
import "./Contactus.css";

function Contactus() {
  return (
    <div className="container-fluid pt-5 form-cont pb-5">
        <h1>Get in touch</h1>
      <div className="row justify-content-center pt-4 ">
        <div className="col-4">
          <form>
            <div class="mb-3"> 
              <label for="exampleInputEmail1" class="form-label contact-form">
                Full Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text ">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3 pt-4">
              <label for="exampleInputPassword1" class="form-label contact-form">
                Email Adress
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 pt-4">
              <label for="exampleInputPassword1" class="form-label contact-form">
                Mobile No
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 pt-4">
              <label for="exampleInputPassword1" class="form-label contact-form">
                Pincode
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
            <button type="submit" class="btn btn-primary w-100 mt-4" > 
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
