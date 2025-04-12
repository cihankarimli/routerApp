import React from "react";
import Card from "./Card";
import { car } from "../data";
const data = car;

function Cardwrapper() {
  return (
    <div className="card-wrapper">
      {data.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Cardwrapper;
