import { useDispatch, useSelector } from "react-redux";
import classes from './CartButton.module.css';
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    // dispatch logic for toggling the cart on the screen
    // dispatch a method which triggers the toggle method w/in uiSlice
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

  return (
      <button className={classes.button} onClick={toggleCartHandler}>
          <span>My Cart</span>
          <span className={classes.badge}>{cartQuantity}</span>
      </button>
  );
};

export default CartButton;
