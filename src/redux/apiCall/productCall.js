import { productActions } from "../slices/product-slice";

// fetch products
export function fetchProducts() {
  return async (dispatch) => {
    try {
      let respons = await fetch("https://shop-store.up.railway.app/products");
      let data = await respons.json();
      dispatch(productActions.setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// fetch product by ID
export function getProductById(idPro) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      let respons = await fetch(`https://shop-store.up.railway.app/products/${idPro}`);
      let data = await respons.json();
      dispatch(productActions.setProduct(data));
      dispatch(productActions.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}
