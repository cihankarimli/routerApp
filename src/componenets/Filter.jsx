import React, { useContext } from "react";
import { car } from "../data";
import AppContext from "../AppContext";

function Filter() {
  const filterData = [...new Set(car.map((item) => item.brand))];

  const { setBrand } = useContext(AppContext);

  const handleChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    localStorage.setItem("selectedBrand", selectedBrand);
  };
  return (
    <>
      <select id="filter-car" onChange={handleChange}>
        <option className="filter-option" value={"all"}>
          All
        </option>
        {filterData.map((brand) => (
          <option key={brand} className="filter-option" value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );
}
export default Filter;
