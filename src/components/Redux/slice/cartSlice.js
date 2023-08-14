import { createSlice } from "@reduxjs/toolkit";
import {
  addItemReducer,
  removeItemReducer,
  clearCartReducer,
} from "../cartAction";

const initialValue = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // removeItem: (state, action) => {
    //   state.items.pop();
    // },

    // clearCart: (state) => {
    //   return { items: [] };
    // },

    addItem: addItemReducer,
    removeItem: removeItemReducer,
    clearCart: clearCartReducer,
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
