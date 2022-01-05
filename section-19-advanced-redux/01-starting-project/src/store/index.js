// this file will create the store

// create multiple slices of state in the store:
// 1 slice for the cart
// 1 slice for ui logic like toggling the cart

import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// takes an obj that sets up the root reducer
const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
