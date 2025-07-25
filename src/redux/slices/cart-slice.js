import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name:'cart',
    initialState: {
        cartProduct: localStorage.getItem("cart") ? 
        JSON.parse(localStorage.getItem("cart")) : []
    },
    reducers: {
        addItemCart(state , action){
            let newItem = action.payload
            let isItemExistInCart = state.cartProduct.find((item) => item.id === newItem.id)
            
            if(isItemExistInCart){
                state.cartProduct = state.cartProduct.map((item) => item.id === newItem.id ? newItem : item)
            }else{
                state.cartProduct = [...state.cartProduct , newItem]
            }
        },
        removeItemCart(state,action){
            state.cartProduct = state.cartProduct.filter((item) => item.id !== action.payload)
        }
    }
})


export let cartReducer = cartSlice.reducer
export let cartActions = cartSlice.actions