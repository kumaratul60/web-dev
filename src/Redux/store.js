import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const appStore = configureStore({
  //  this a big reducer for all small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
