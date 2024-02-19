import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState }  from "react";

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2022, 2, 24),
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
    date: new Date(2020, 5, 20),
    description: "Футболка",
    amount: 70.05
  },
  {
    id: 4,
    date: new Date(2020, 3, 5),
    description: "Монітор",
    amount: 1200
  }
];

function App() {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);


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



  return (
    <div className="App">
      <NewCost onAddCost = {addNewCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
