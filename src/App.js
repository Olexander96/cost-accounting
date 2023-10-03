import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState }  from "react";

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2021, 2, 24),
    description: "Ноутбук",
    amount: 999.99
  },
  {
    id: 2,
    date: new Date(2021, 3, 3),
    description: "Носки",
    amount: 2
  },
  {
    id: 3,
    date: new Date(2021, 5, 20),
    description: "Футболка",
    amount: 70.05
  }
];

function App() {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);

  //Раніше було так і так воно працює під капотом, потрібно - import React from "react";
  // return React.createElement('div', {}, 
  //   React.createElement('h1', {}, 'Вивчаємо React'), 
  //   React.createElement(Costs, {costs: costs})
  // )

  const addNewCostHandler = (cost) => {
    // prevCosts це по факту costs в useState!
    setCosts(prevCosts => {
      const newCosts = [
        {
          id: prevCosts[prevCosts.length - 1] + 1, //новий id для нового елементу
          ...cost //дані з форми
        },
        ...prevCosts //попередні елементи масиву
      ]
      return newCosts
    })
  };

  const selectYearHandler = (selectedYear) => {
    // доробити!!!
    // setCosts(prevCosts => {
    //   const filteredCosts = prevCosts.filter(item => {
    //     return item.date.getFullYear() === selectedYear;
    //   });

    //   return filteredCosts;
    // })
  };

  return (
    <div className="App">
      <NewCost onAddCost = {addNewCostHandler}/>
      <Costs costs={costs} onSelectYear={selectYearHandler}/>
    </div>
  );
}

export default App;
