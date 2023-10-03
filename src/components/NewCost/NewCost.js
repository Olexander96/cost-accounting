import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {

    const addNewCostItemHandler = (formCostData) => {
        // const costData = {
        //     ...formCostData,
        //     id: Math.random().toString(),
        // }
        props.onAddCost(formCostData);
    };

    return (
        <div className="new-cost">
            <CostForm onAddNewCost = {addNewCostItemHandler}/>
        </div>
    )
}

export default NewCost;