import React from "react";
import { car } from "../data";

const data = car;

function Filter() {
  const filterData = [...new Set(car.map((item) => item.brand))];
  const [filteredData, setFilteredData] = React.useState(data);
  const [selectedBrand, setSelectedBrand] = React.useState("");

  const filterToLocalStorage = (e) => {
    e.preventDefault();
    const selectedBrand = e.target.value;
    console.log(e.target.value);
    setSelectedBrand(selectedBrand);
    const filteredData = data.filter((item) => item.brand === selectedBrand);
    setFilteredData(filteredData);
    localStorage.setItem("selectedBrand", selectedBrand);
  };

  return (
    <>
      <select id="" onChange={filterToLocalStorage}>
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
