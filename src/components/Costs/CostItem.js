
import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {
    
    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{props.cost}</div>
            </div>
        </Card>
    );
}

export default CostItem;