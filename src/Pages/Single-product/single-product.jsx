// Get Id Product On Click
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

// Style Css
import "./single-product.css";

// MUI
import Button from "@mui/material/Button";

// Descreption
import { DiscreptionSingle } from "./Descrption-single.jsx";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCall/productCall.js";
import { addItemToCart } from "../../redux/apiCall/cartApiCall.js";
import { openClose } from "../../redux/slices/openSnakeSlice.js";

// Spinner
import { Spinner } from "../../component/spinnerLoading/spinner.jsx";

//////////////
export let SingleProduct = () => {
  let [qyt, setQyt] = useState(1);

  let dispatch = useDispatch();
  let { product, loading } = useSelector((stata) => stata.products);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  // Show Loading ICon
  if (loading) return <Spinner />;

  // Event Handler
  function clickBtnAddItemToCart() {
    dispatch(
      addItemToCart({
        id: product?.id,
        title: product?.title,
        image: product?.image,
        quantity: qyt,
        price: product?.price,
      })
    );
  }

  return (
    <div className="container">
      <div className="single-product">
        <div className="single-select-img">
          <img src={product?.image} alt="img" />
        </div>

        <div className="single-content">
          <div className="box">
            <h1 className="single-title">{product?.title}</h1>
            <p className="single-price">
              السعر : <b>{product?.price}$</b>
            </p>
            <p>{product?.rating}</p>
          </div>

          <div className="box-2">
            <h4 className="amount">الكميه</h4>
            <div className="add-num">
              <input
                value={qyt}
                type="number"
                min="1"
                max="10"
                className="number-add"
                placeholder="اكتب الكميه"
                onChange={(e) => setQyt(e.target.value)}
              />
              <Button
                onClick={() => {
                  clickBtnAddItemToCart();
                  dispatch(openClose.openSnack({message:'تمت الاضافه بنجاح', severity: 'success'}));
                  setTimeout(() => {
                    dispatch(openClose.closeSnack());
                  }, 6000);
                }}
                className="see-more"
              >
                اضافه إلي سلة التسوق
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Discreption */}
      <DiscreptionSingle />
      {/* == Discreption == */}
    </div>
  );
};
