import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loading: false,
  },
  reducers: {
    setProducts(stata, action) {
      stata.products = action.payload;
    },
    setProduct(stata, action) {
      stata.product = action.payload;
    },
    setLoading(stata) {
      stata.loading = true;
    },
    clearLoading(stata) {
      stata.loading = false;
    },
  },
});

export let productReducer = productSlice.reducer;

export let productActions = productSlice.actions;
