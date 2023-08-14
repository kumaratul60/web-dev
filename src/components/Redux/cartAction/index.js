export const addItemReducer = (state, action) => {
  state.items.push(action.payload);
};

export const removeItemReducer = (state) => {
  state.items.pop();
};

export const clearCartReducer = () => {
  return { items: [] };
};
