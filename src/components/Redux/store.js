import { configureStore } from "@reduxjs/toolkit";
import cartReducerFn from "../Redux/slice/cartSlice";

const appStore = configureStore({
  //  this a big reducer for all small reducers
  reducer: {
    cart: cartReducerFn,
  },
});

export default appStore;
