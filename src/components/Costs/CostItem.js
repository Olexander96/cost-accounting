import { useState } from 'react';
import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';

const CostItem = (props) => {
    const [description, setDescription] = useState(props.description);
    

    const changeDescriptionHandler = () => {
        setDescription('New item')//те саме що description = 'New item' та знову виклик CostItem(props)
    };
    
    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>{props.cost}</div>
            </div>
            <button onClick={changeDescriptionHandler}>change description</button>
        </Card>
    );
}

export default CostItem;