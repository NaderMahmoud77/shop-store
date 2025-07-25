// Style
import "./special-page.css";
// Get Click Id
import { useParams } from "react-router-dom";
//  DATA
import { SpecialOffers } from "../../Data/special";
import { useState, useEffect } from "react";
// MUI
import Button from "@mui/material/Button";
// DESCREPTION
import { Discreption } from "./special-discreption";
// Redux
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/apiCall/cartApiCall";
import { openClose } from "../../redux/slices/openSnakeSlice";

/////////////// Compo
export let SpecialOfferPage = () => {
  let { id } = useParams();
  let [IndexImage, setIndexImage] = useState(0);

  let [qyt, setQyt] = useState(1);

  let item = SpecialOffers.find((e) => e.id === +id);

  let { images, title, rating, discount, price } = item;

  let calc = Math.round(price - (discount * price) / 100);

  let dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Event Handler
  function clickBtnAddItemToCart() {
    dispatch(
      addItemToCart({
        id: item?.id,
        title: item?.title,
        image: item?.images[0],
        quantity: qyt,
        price: item?.price,
      })
    );
  }

  // When Click Button Add To Cart
  function whenClickMy() {
    clickBtnAddItemToCart();
    dispatch(
      openClose.openSnack({
        message: "تمت الاضافه بنجاح",
        severity: "success",
      })
    );
    setTimeout(() => {
      dispatch(openClose.closeSnack());
    }, 6000);
  }

  // JSX
  return (
    <div className="container">
      <div className="special-offer-page">
        <div className="specail-images">
          <img src={images[IndexImage]} alt="" className="select-img" />
          <div className="colection-images">
            {images.map((srcs, i) => {
              return (
                <img
                  onClick={() => setIndexImage(i)}
                  key={i}
                  src={srcs}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <div className="content-offer">
          <h1 className="title-offer">{title}</h1>
          <div className="rating-offer">{rating}</div>
          <div className="calc">
            <div className="discoun"> السعر بعد الخصم: {calc}$</div>
            <div className="price">السعر: {price}$ </div>
          </div>

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
            <Button onClick={whenClickMy} className="see-more">
              اضافه إلي سلة التسوق
            </Button>
          </div>
        </div>
      </div>
      <Discreption />
    </div>
  );
};
