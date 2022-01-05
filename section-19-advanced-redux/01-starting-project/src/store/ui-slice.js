// when "My Cart" is clicked, the cart is toggled on / off the screen

import { createSlice } from "@reduxjs/toolkit";

// createSlice creates a slice of state in the store
// it recieves an object w/the following keys:
// unique name
// initialState
// reducers is a map of each case for actions you want to handle w/the reducer
const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false }, // is cart visible?
    reducers: {
        toggle(state) {
            // reduxToolkit allows us to write mutating code 
            // it uses Immer which actually makes the state immutable by creating a new state
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
}); 

// ui acions

export const uiActions = uiSlice.actions; 

export default uiSlice;