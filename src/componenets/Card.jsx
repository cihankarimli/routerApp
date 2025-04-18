import React from "react";
import { useNavigate } from "react-router-dom";
function Card({ car }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <div
          onClick={() => navigate("/car-details/" + car.id)}
          className="card-item"
        >
          <img src={car.img} alt={car.model} className="card-image" />
          <h2 className="card-title">
            {car.brand} {car.model}
          </h2>
          <p className="card-year">{car.year}</p>
          <p className="card-price">
            {car.price} {car.currency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
