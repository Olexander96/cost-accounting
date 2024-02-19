import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [formShow, setFormShow] = useState(false);

  const addNewCostItemHandler = (formCostData) => {
    props.onAddCost(formCostData);
  };

  const formShowHandler = (isShow) => {
    setFormShow(isShow);
  };

  return (
    <div className="new-cost">
      {formShow ? (
        <CostForm onAddNewCost={addNewCostItemHandler} onShowForm={ formShowHandler }/>
      ) : (
        <button onClick={ () => formShowHandler(true) }>Додати нову витрату</button>
      )}
    </div>
  );
};

export default NewCost;
