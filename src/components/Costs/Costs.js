import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";

import "./Costs.css";
import React, { useState } from "react";

const Costs = (props) => {
  
  const [selectedYear, setSelectedYear] = useState("2020");

  const setCurrentYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter( item => {
    return item.date.getFullYear().toString() === selectedYear;
  } );

  let costsContent = <p>В цьому році немає витрат</p>;

  if (filteredCosts.length > 0) { //якщо в відфільтрованому масиві будуть значення
    costsContent = filteredCosts.map((item) => (
      <CostItem
        key={props.costs.indexOf(item)}
        date={item.date}
        description={item.description}
        cost={item.amount}
      />
    ));
  }
  
  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={setCurrentYearHandler} year={selectedYear} />
        { costsContent }
      </Card>
    </div>
  );
};

export default Costs;
