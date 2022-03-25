import React, { useContext } from "react";
import formatCurrency from "format-currency";

function Card({ value }) {
  let opts = { format: "%s%v", symbol: "$" };
  const {image, name, price} = value
  return (
    <div className="cardbox mx-2 mb-2 ">
      <div
        className="card align-items-left d-flex px-3 py-3"
        style={{ width: "18rem" }}
      >
        <img src={image} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title text-info ">{name}</h5>
          <h6>{formatCurrency(`${price}`, opts)}</h6>
        </div>
        <a href="#" className="btn btn-primary ">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default Card;
