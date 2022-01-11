import React from "react";

function Card({ item }) {
  return (
    <div className="card border-dark col col-sm-6 col-md-3 py-3">
      <div className="card rounded" key={item.id}>
        <img
          src={item.image_url}
          className="card-img-top mx-auto"
          alt="Beer"
          height={"200vh"}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.tagline}</li>
          <li className="list-group-item">{item.first_brewed} </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
