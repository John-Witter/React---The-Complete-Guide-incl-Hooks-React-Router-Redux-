// Output content that the Card wraps around (user input)
import classes from "./Card.module.css"

export const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
