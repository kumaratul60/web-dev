import { createSlice, current } from "@reduxjs/toolkit";

/***
 createSlice is a function provide by rtk library that take some configuration object:
 1. name of the slice
 2. initial state of the slice which is a object
 3. reducer function which is a object that update the
 5. export reducer functions
 4. export  default mainFunctionName.reducer;

*/

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem: (state, action) => {
    // //    Vanilla(older) Redux => Don't Mutate State directly and returning was mandatory
    // const newState = [...state]
    // newState.items.push(action.payload)
    // return newState;
    // },

    addItem: (state, action) => {
      // Redux tool kit -> we have to mutate the state and returning is not mandatory
      // mutating the state here, in new way of redux  but  behind the scene it is mutating the state like old way, but that thing developer don't do, that is done by redux itself. RTK uses immer.js library to do  this comparison behind the scenes.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter(item => item.id !== action.payload);
      // state.items.splice(action.payload)
      state.items.pop();
    },

    clearCart: (state) => {
      // RTK says: either mutate the existing state like : state.items.length = 0; OR return the new state like  return {items:[]}

      //   console.log(state);
      //   console.log(current(state));
      //   state = [];
      //   console.log(state);

      //   state.items.length = 0; // state = {items:[]}

      return { items: [] }; // this new object will be replaced inside original state = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;