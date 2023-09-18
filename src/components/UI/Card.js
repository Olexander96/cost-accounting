import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; //будуть автоматично передаватися класи компонентів які вона огортає
    return (
        <div className={ classes }>{props.children}</div> //буде автоматично підставлятися те що в компоненті, який вона огортає
    );
}

export default Card;