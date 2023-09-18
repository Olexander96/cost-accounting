import Card from "../UI/Card";
import CostItem from "./CostItem";
import './Costs.css';

const Costs = (props) => {

    const costsArr = props.costs
        .map(item => <CostItem 
            key={props.costs.indexOf(item)} 
            date={item.date} 
            description={item.description} 
            cost={item.amount}
        />);

    return (
        <Card className="costs">
            { costsArr }
        </Card> 
    );
}

export default Costs;