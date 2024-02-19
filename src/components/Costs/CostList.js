import CostItem from "./CostItem";
import  "./CostList.css";


const CostList = (props) => {
  const costsListArray = props.costs.map((item) => (
    <CostItem
      key={props.costs.indexOf(item)}
      date={item.date}
      description={item.description}
      cost={item.amount}
    />
  ));

  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В цьому році немає витрат</h2>;
  } else {
    return <ul className="cost-list">{ costsListArray }</ul>;
  }
};

export default CostList;
