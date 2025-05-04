import React, { useContext } from "react";
import Card from "./Card";
import { car } from "../data";
import AppContext from "../AppContext";

function Cardwrapper() {
  const { brand } = useContext(AppContext);

  const [isAdded, setIsAdded] = React.useState(false);
  React.useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const filteredCars = brand
    ? brand === "all"
      ? car
      : car.filter((item) => item.brand === brand)
    : car;

  return (
    <>
      <div className="card-wrapper">
        {isAdded && <p className="alert">Bu masin elave edildi</p>}
        {filteredCars.map((car) => (
          <Card
            key={car.id}
            car={car}
            isAdded={isAdded}
            setIsAdded={setIsAdded}
          />
        ))}
      </div>
    </>
  );
}

export default Cardwrapper;
