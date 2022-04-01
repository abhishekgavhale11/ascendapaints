import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container-fluid about-container" data-aos="fade-up">
          <div className="row pt-5 mt-5">
            <h1>House Painting Services</h1>
            <p className="p-5">
              We present to you the one-stop solution for all your House
              painting Services Mumbai agonies and hassles-Painting. Providing
              you with the best of the house painting services we have our
              excellently trained professional painters who do not compromise on
              anything to bring the smile of contentment on your face. We take
              the painting of your house so seriously that even after our work
              is over, we send our brand managers to assess the quality of the
              paint and help you with post painting cleaning thus making us the
              best painters Ascenda Paints always provide you with modern
              designs and even if it is texture painting and also provide you
              with a 100% commitment to finish the work for you in the best way
              possible. The interior home painters are extremely well-trained
              professionals as a result of which they convert your house to your
              dream space within a short time and do not compromise on what you
              would want. We provide you good quality paints and give you the
              best painting services in Mumbai. We want to ensure that the
              customers who visit us would never want to leave our services and
              join elsewhere. As far as the cost-effectiveness is concerned, our
              charges are much less than other prices and we do not aspire to
              rip off the pockets of our customers. What we want is a lifetime
              relationship with you which is why we will always instruct our
              wall painters to fulfill all your demands and provide you with
              such House painting Services Mumbai that when you want to repaint
              your house walls, you definitely reach out to us. Our work has
              earned us a lot of important and high-end clients but that does
              not make us sit back, we always aspire to be a part of everyone’s
              household and prove ourselves to them and become the best painting
              service provider.
            </p>
          </div>
          <div className="container-fluid mt-5 pt-4 ">
            {/* <h1> Interior Design Service</h1> */}
            <div className="row justify-content-center">
              <div className="col-3 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column">
                <img class="img-fluid" src="kitchen.jpg" alt="" />
                <h3 className="text-center">kitchen</h3>
              </div>

              <div className="col-3 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column">
                <img class="img-fluid" src="livingroom.jpg" alt="" />
                <h3 className="text-center">Living Room</h3>
              </div>

              <div className="col-3 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column ">
                <img class="img-fluid" src="bedroom.jpg" alt="" />
                <h3 className="text-center">Bedroom</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
