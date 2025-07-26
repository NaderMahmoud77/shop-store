import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./slices/cart-slice";
import { openSnakeSlice } from "./slices/openSnakeSlice";

let store = configureStore({
  reducer: {
    cart: cartReducer,
    openSnack: openSnakeSlice,
  },
});

export default store;
