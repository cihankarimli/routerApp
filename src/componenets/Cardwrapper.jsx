import React, { useContext } from "react";
import Card from "./Card";
import { car } from "../data";
import AppContext from "../AppContext";

function Cardwrapper() {
  const { brand } = useContext(AppContext);

  const filteredCars = brand
    ? brand === "all"
      ? car
      : car.filter((item) => item.brand === brand)
    : car;

  return (
    <div className="card-wrapper">
      {filteredCars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Cardwrapper;
