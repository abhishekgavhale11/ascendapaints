import React from "react";
import "./Hform.css"

function Hform() {
  return (
    <div className="h-form  mb-4 p-2">
      <form className="p-3">
        {/* heading */}
            <h2 className="text-center heading pb-1">
            Create your dream home with Ascenda Paints
            </h2 >
            {/* para */}
            <p className="para">If you are looking for the best paint online, look no further. Berger Express Painting is a service all-rounder in home painting, waterproofing and wood coating solutions. Enjoy a hassle-free paint job today!</p>

        {/* firstrow */}
        <div className="row  pt-2 pb-2 finputrow ">
          <div className="col-3">
            <input
              type="text"
              className="form-control inputsize "
              placeholder="Enter Name"
              name="email"
            />
          </div>
          <div class="col-3">
            <input
              type="password"
              className="form-control inputsize"
              placeholder="Mobile No"
              name="pswd"
            />
          </div>
          <div className="col-3">
            <input
              type="password"
              className="form-control inputsize"
              placeholder="Email"
              name="pswd"
            />
          </div>         
          <div class="col-3">
            <input
              type="password"
              className="form-control inputsize"
              placeholder="Pincode"
              name="pswd"
            />
          </div>         
        </div >

        {/* secondrow submitrow*/}
        <div className="row  pt-3 me-auto ">
            <div className="mb-3 col-8 d-flex justify-content-end form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">By proceeding, you are authorizing Ascenda Paints and its empaneled contractors to get in touch with you through calls, sms, or e-mail</label>
            </div>
           
            <div className="col-4 ">
                 <button type="submit" className="btn btn-primary w-50 ">Submit</button> 
            </div>
        </div>

      </form>
    </div>
  );
}

export default Hform;
{/* <button type="submit" class="btn btn-primary w-50 ">Submit</button> */}