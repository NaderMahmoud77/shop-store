import { productActions } from "../slices/product-slice";

// fetch products
export function fetchProducts() {
  return async (dispatch) => {
    try {
      let respons = await fetch("http://localhost:5000/products");
      let data = await respons.json();
      dispatch(productActions.setProducts(data));
    } catch {
      console.log(Error);
    }
  };
}

// fetch products
export function getProductById(idPro) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      let respons = await fetch(`http://localhost:5000/products/${idPro}`);
      let data = await respons.json();
      dispatch(productActions.setProduct(data));
      dispatch(productActions.clearLoading());
    } catch {
      console.log(Error);
      dispatch(productActions.clearLoading());
    }
  };
}
