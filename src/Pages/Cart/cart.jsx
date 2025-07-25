import "./cart.css";
import { useState } from "react";
// MUI
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// Redux
import { useSelector } from "react-redux";
// Router
import { Link } from "react-router-dom";
// Compo Dialog
import DialogDelete from "../../component/Dialog/dialog.jsx";

import { useEffect } from "react";

////////////
export let Cart = () => {
  let { cartProduct } = useSelector((state) => state.cart);

  // State Compo Dialog
  let [openDialoge, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Event Handler
  function changeStateDialog() {
    setOpenDialog(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Dialog */}
      <DialogDelete
        id={selectedId}
        openDialog={openDialoge}
        setOpenDialog={setOpenDialog}
      />
      {/* ===== Dialog ===== */}
      {/* // Chack on length Cart Product */}
      {cartProduct.length < 1 ? (
        <div className="empty-cart container">
          <h1 className="empty-cart-title">سله التسوق الخاصه بك فارغه</h1>
          <p className="not-item-cart">لا يوجد سلع</p>
          <div className="empty-img">
            <img src="/images/cart/empty-cart.webp" alt="empty" />
          </div>
          <Link className="empty-link" to="/products">
            <button className="see-more empty-cart-btn">
              صفحه السلع والمنتجات
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart container">
          <div className="cart-products">
            {/* Cart */}
            <div className="cart-item">
              {cartProduct.map((i) => {
                return (
                  <div className="carts" key={i.id}>
                    <div className="banner-cart">
                      <img src={i.image} alt={i.title} />
                    </div>
                    <div className="content-cart">
                      <h2 className="title-cart">{i.title}</h2>
                      <h4 className="quantity-cart">الكميه : {i.quantity}</h4>
                      <p className="price-cart">السعر : {i.price}$</p>

                      {/* Delete Product */}
                      <Tooltip
                        title="حذف المنتج من السله"
                        placement="left-start"
                        followCursor
                        componentsProps={{
                          tooltip: {
                            sx: {
                              fontSize: "1.2rem",
                              padding: "10px",
                            },
                          },
                        }}
                      >
                        <Button
                          onClick={() => {
                            changeStateDialog();
                            setSelectedId(i.id);
                          }}
                          className="see-more btn"
                        >
                          <i className="bi bi-trash icon-cart-delete"></i>
                        </Button>
                      </Tooltip>
                      {/* === Delete Product === */}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* ===== Cart ===== */}

            {/* summery */}
            <div className="cart-summery">
              <div className="title-summary">
                <i className="bi bi-check-circle-fill"></i>
                جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
                التفاصیل
              </div>
              <h2 className="total-cart">
                المجموع :{" "}
                <span>
                  {cartProduct.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0
                  )}
                  $
                </span>
              </h2>
              <Tooltip
                title="متابعه الشراء"
                placement="left-start"
                followCursor
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontSize: "1.2rem",
                      padding: "10px",
                    },
                  },
                }}
              >
                <Button className="see-more btn-summery">
                  تابع عمليات الشراء
                </Button>
              </Tooltip>
            </div>
            {/* ==== summery ==== */}
          </div>
        </div>
      )}
    </>
  );
};
