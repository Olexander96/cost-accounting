import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
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
  ]

  //Раніше було так і так воно працює під капотом, потрібно - import React from "react";
  // return React.createElement('div', {}, 
  //   React.createElement('h1', {}, 'Вивчаємо React'), 
  //   React.createElement(Costs, {costs: costs})
  // )

  const addNewCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component')
  }

  return (
    <div className="App">
      <NewCost onAddCost = {addNewCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
