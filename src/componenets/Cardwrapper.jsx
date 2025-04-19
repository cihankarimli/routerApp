import React, { useEffect } from "react";
import Card from "./Card";
import { car } from "../data";
const data = car;

function Cardwrapper() {
  let selectedBrand;
  useEffect(() => {
    selectedBrand = JSON.stringify(localStorage.getItem("selectedBrand"));
  }, [localStorage.getItem("selectedBrand")]);

  const filteredData = data.filter((item) => item.brand === selectedBrand);

  let renderedData = [];

  function fillArray() {
    data.map((currentCar) => {
      currentCar.brand === selectedBrand ? renderedData.push(currentCar) : null;
    });
  }

  fillArray();

  console.log(renderedData);

  return (
    <div className="card-wrapper">
      {renderedData.length > 0
        ? renderedData.map((car) => <Card key={car.id} car={car} />)
        : data.map((car) => <Card key={car.id} car={car} />)}
    </div>
  );
}

export default Cardwrapper;
