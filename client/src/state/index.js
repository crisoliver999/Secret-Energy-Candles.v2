import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload.shoppingCart;
    },
  },
});

export const { setShoppingCart } = globalSlice.actions;
export default globalSlice.reducer;
