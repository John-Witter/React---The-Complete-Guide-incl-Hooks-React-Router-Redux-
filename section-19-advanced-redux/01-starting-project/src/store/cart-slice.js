import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            //extract the item from the action
            // if item is in items arr, increase the quantity of the
            // existing cart item, else push it onto items as a new item
            const item = action.payload;

            const existingItem = state.items.find(
                (existingItem) => existingItem.id === item.id
            );

            state.totalQuantity++; //1 more item in cart

            if (!existingItem) {
                //ok here b/c reduxToolkit updates the state in an immutable way
                state.items.push({
                    id: item.id,
                    price: item.price,
                    quantity: 1, // if is new item, set qty to 1
                    totalPrice: item.price, // price * qty
                    name: item.title
                });
            } else { //item already in cart, update existing item
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + item.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            // find the item w/matching id and remove it from state.items
            const existingItem = state.items.find(item => item.id === id);

            state.totalQuantity--;

            if (existingItem.quantity === 1) { // remove from array
                state.items = state.items.filter(item => item.id !== id);
            } else { // decrement item qty
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;