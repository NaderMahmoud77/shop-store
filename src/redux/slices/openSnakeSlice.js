import { createSlice } from "@reduxjs/toolkit";

let OpenSnakeSlice = createSlice({
  name: "snack",
  initialState: {
    open: false,
    message:'',
    severity:'success'
  },
  reducers: {
    openSnack(state , action) {
      state.open = true;
      state.message = action.payload.message
      state.severity = action.payload.severity
    },
    closeSnack(state) {
      state.open = false;
      state.message = '';
      state.severity = 'success';
    },
  },
});

export let openSnakeSlice = OpenSnakeSlice.reducer;
export let openClose = OpenSnakeSlice.actions;
