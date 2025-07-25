import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./slices/cart-slice";
import { productReducer } from "./slices/product-slice";
import { openSnakeSlice } from "./slices/openSnakeSlice";

let store = configureStore({
    reducer: {
        products : productReducer,
        cart : cartReducer,
        openSnack : openSnakeSlice
    }
})

export default store