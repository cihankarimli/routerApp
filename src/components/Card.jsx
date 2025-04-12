import React from "react";
import { car } from "./data";
const data = car;
console.log(data);

function Card() {
  return (
    <div>
      <div className="card">
        {data.map((item) => (
          <div key={item.id} className="card-item">
            <img src={item.img} alt={item.model} className="card-image" />
            <h2 className="card-title">
              {item.brand} {item.model}
            </h2>
            <p className="card-year">{item.year}</p>
            <p className="card-price">
              {item.price} {item.currency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
