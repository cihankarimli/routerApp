import React, { useEffect, useState } from "react";

function FavoritePage() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars"));

    setFavoriteCars(storedFavorites);
  }, []);
  const exitPage = () => {
    window.location.href = "/";
  };

  const removeFromFavorites = (carId) => {
    const updatedFavorites = favoriteCars.filter((car) => car.id !== carId);
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    setFavoriteCars(updatedFavorites);
  };

  return (
    <>
      <div className="favorite-page">
        <div className="favorite-header">
          <h1>Favorite Cars</h1>
          <button onClick={exitPage} className="exit-button">
            Exit
          </button>
        </div>
        <div className="favorite-cars-list">
          {favoriteCars.map((car) => (
            <div key={car.id} className="favorite-car-item">
              <img
                src={car.img}
                alt={car.model}
                className="favorite-car-image"
              />
              <h2 className="favorite-car-title">
                {car.brand} {car.model}
              </h2>
              <p className="favorite-car-year">{car.year}</p>
              <p className="favorite-car-price">
                {car.price} {car.currency}
              </p>
              <button
                onClick={() => removeFromFavorites(car.id)}
                className="remove-favorite-button"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FavoritePage;
