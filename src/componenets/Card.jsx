import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { increment, setCount } from "../counterSlice";
import { useDispatch } from "react-redux";

function Card({ car, isAdded, setIsAdded }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteCars = JSON.parse(
      localStorage.getItem("favoriteCars") || "[]"
    );
    dispatch(setCount(favoriteCars.length));
  }, [dispatch]);

  const addFavoriteButton = () => {
    const favoriteCars = JSON.parse(
      localStorage.getItem("favoriteCars") || "[]"
    );
    const isCarInFavorites = favoriteCars.some(
      (favoriteCar) => favoriteCar.id === car.id
    );

    if (!isCarInFavorites) {
      favoriteCars.push(car);
      localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
      dispatch(setCount(favoriteCars.length));
    } else {
      setIsAdded(true);
    }
  };

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
      <button onClick={addFavoriteButton} className="favorite-button">
        <IoIosAdd />
      </button>
    </div>
  );
}

export default Card;
