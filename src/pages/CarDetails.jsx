import React from "react";
import { car } from "../data";
import { useParams } from "react-router-dom";
const data = car;

function CarDetails() {
  const { id } = useParams();
  return (
    <div>
      <div className="car-details">
        {data.map((car) => {
          if (car.id == id) {
            return (
              <div className="car-details-wrapper" key={car.id}>
                <div key={car.id} className="car-details-item">
                  <h2 className="car-details-title">
                    {car.brand} {car.model}
                    {car.engine}
                    <span className="car-details-year">{car.year}</span>
                  </h2>
                  <img src={car.img} className="car-details-image" />
                </div>
                <div className="car-contact">
                  <p className="car-details-price">
                    {car.price} {car.currency}
                  </p>
                  <p className="car-details-phone">Phone: {car.phone}</p>
                  <p className="car-details-city">City: {car.city}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CarDetails;
