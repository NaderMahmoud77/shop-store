import { cartActions } from "../slices/cart-slice";


// Add Item In Cart
export function addItemToCart(newItem){
    return (dispatch , getState) =>{
        dispatch(cartActions.addItemCart(newItem))

        let {cart} = getState()
        localStorage.setItem("cart" , JSON.stringify(cart.cartProduct))

        
    }
}


// Remove Item From Cart
export function removeItemFromCart(id){
    return (dispatch , getState) =>{
        dispatch(cartActions.removeItemCart(id))

        let {cart} = getState()
        localStorage.setItem("cart" , JSON.stringify(cart.cartProduct))
    }
}