import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";

import "./Costs.css";
import React, { useState } from "react";

const Costs = (props) => {
  
  const costsArr = props.costs.map((item) => (
    <CostItem
      key={props.costs.indexOf(item)}
      date={item.date}
      description={item.description}
      cost={item.amount}
    />
  ));

  const [selectedYear, setSelectedYear] = useState("2022");

  const setCurrentYearHandler = (year) => {
    setSelectedYear(year);
    props.onSelectYear(year); //передаэмо рік в батьківський компонент
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={setCurrentYearHandler} year={selectedYear} />
        {costsArr}
      </Card>
    </div>
  );
};

export default Costs;
