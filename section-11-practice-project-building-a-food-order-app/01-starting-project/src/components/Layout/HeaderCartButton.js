import CartIcon from '../Cart/CartIcon'; // svg code can be rendered in React
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    return (
        // props.onClick points to a function in App.js, showCartHandler
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCartButton
