import { categories } from "../../Data/cstegory";

import { useParams } from "react-router-dom";

// MUI
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
// Add Item To Cart
import { addItemToCart } from "../../redux/apiCall/cartApiCall.js";
// Descreption
import { DescreptionCategory } from "./descreptionCategory.jsx";

import { useDispatch } from "react-redux";

export function CategorySingle() {
  let { id } = useParams();

  let [qye, setQye] = useState(1);

  let singleCategoey = categories.find((c) => c.id === +id);

  let { image, i, title, price, rating } = singleCategoey;

  let dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Event Handler
  function clickBtnAddItemToCart() {
    dispatch(
      addItemToCart({
        id: singleCategoey?.id,
        title: singleCategoey?.title,
        image: singleCategoey?.image,
        quantity: qye,
        price: singleCategoey?.price,
      })
    );
  }

  return (
    <div className="container">
      <div className="categorySingle">
        <div key={i} className="category-item">
          <div className="image-category-selected">
            <img src={image} alt={title} />
          </div>

          <div className="content-single-category">
            <h2 className="title-single-category">{title}</h2>
            <div className="rating-single-category">{rating}</div>
            <h4 className="price-single-categore">
              <b>السعر:</b> {price}$
            </h4>
            <h3>الكميه</h3>
            <div className="qye-addCart">
              <input
                type="number"
                className="category-input-qye"
                placeholder="اكتب الكميه"
                min={1}
                max={10}
                value={qye}
                onChange={(e) => setQye(e.target.value)}
              />
              <Button className="see-more" onClick={clickBtnAddItemToCart}>
                اضافه إلي سلة التسوق
              </Button>
            </div>
          </div>
        </div>
      </div>
      <DescreptionCategory />
    </div>
  );
}
