import React from "react";
import shirts from "../../data/shirts";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ shirt }) {
  return (
    <div
      className="card m-auto mt-5 mb-5 p-0 shadow-lg col-4"
      style={{ width: "18rem" }}
    >
      <img
        className="card-img-top"
        src={shirt.thumbnailUrl}
        alt="Card image cap"
      />
      <div className="card-body card-bg ">
        <Link to={`/item/${shirt.id}`}>
          <h6 className="card-title text-center">{shirt.title}</h6>
        </Link>
        <p className="card-text text-center p-carta">${shirt.precio}</p>
      </div>
    </div>
  );
}

export default Item;
