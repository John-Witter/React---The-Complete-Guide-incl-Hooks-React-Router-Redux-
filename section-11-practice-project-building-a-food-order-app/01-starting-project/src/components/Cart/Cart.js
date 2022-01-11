/**
 Render the cart in a modal  
 Render all cart items,
 Display total amount,
 Give Buttons for Leaving Cart & Ordering (Ordering won't really be a thing)
 */

import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {
    // map all cart items to Cart item jsx elements
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => (
                    <li key={"c1"}>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
