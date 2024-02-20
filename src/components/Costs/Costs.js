import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";

import "./Costs.css";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  
  const [selectedYear, setSelectedYear] = useState("2020");

  const setCurrentYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter( item => {
    return item.date.getFullYear().toString() === selectedYear;
  } );

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={setCurrentYearHandler} year={selectedYear} />
        <CostsDiagram costs={ filteredCosts }/>
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;
