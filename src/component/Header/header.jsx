import { useState } from "react";
import "./header.css";
import { NavBar } from "./navbar";
import SearchModal from "./SearchModal";
// Router
import { useSelector } from "react-redux";
import { CartIcon } from "./cartIcon";
import { LoginButton } from "./loginButton";

export function MyHeader() {
  let [toggle, setToggle] = useState(false);

  let { cartProduct } = useSelector((state) => state.cart);

  let countItem = cartProduct.length || "";


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="head">
            {/* LOGO */}
            <div className="logo">꧁ تـسـوق ꧂</div>
            {/* ==== LOGO ==== */}

            {/* ==== SEARCH ==== */}
            <SearchModal />
            {/* ==== SEARCH ==== */}

            {/* LOGIN & SHOPPING */}
            <div className="shop-login">
              <CartIcon count={countItem} />
              <LoginButton />

              <div className="toggle" onClick={() => setToggle(true)}>
                <i className="bi bi-list"></i>
              </div>

            </div>
          </div>
          {/* ===== LOGIN & SHOPPING ===== */}
 
          {/* NAV BAR */}
          <NavBar toggle={toggle} setToggle={setToggle} />
          {/* ===== NAV BAR ===== */}
        </div>
      </header>
    </>
  );
}
