/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import "./NumberList.scss";

const filterNumbers = (numbers, filterType) => {
  console.log("Filtrando números...");
  return numbers.filter((number) =>
    filterType === "even" ? number % 2 === 0 : number % 2 !== 0
  );
};
const NumberList = ({ numbers }) => {
  const [filter, setFilter] = useState("all");

  const filteredNumbers = useMemo(() => {
    if (filter === "all") {
      return numbers;
    }
    return filterNumbers(numbers, filter);
  }, [numbers, filter]);

  return (
    <div>
      <h1 className="numbers-title">Números con React</h1>
      <div className="button-container">
        <button className="filter-button" onClick={() => setFilter("all")}>
          Todos
        </button>
        <button className="filter-button" onClick={() => setFilter("even")}>
          Pares
        </button>
        <button className="filter-button" onClick={() => setFilter("odd")}>
          Impares
        </button>
      </div>
      <ul className="number-list">
        {filteredNumbers.map((number) => (
          <li key={number} className="number-item">
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
