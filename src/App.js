//  Style
import "./App.css";

import { useEffect } from "react";
// COMPONENT
import { MyHeader } from "./component/Header/header.jsx";
import { Footer } from "./component/Footer/footer.jsx";
// ROUTER
import { Route, Routes } from "react-router-dom";
// PAGE
import { Home } from "./Pages/Home/home.jsx";
import { Cart } from "./Pages/Cart/cart.jsx";
import { Products } from "./WhenClickLinkNavBar/Products/products.jsx";
import { CategoryPage } from "./WhenClickLinkNavBar/Category-Page/categoryPage.jsx";
import { SpicalPageListSide } from "./WhenClickLinkNavBar/Specil-page/specilPage.jsx";
import { ContactUs } from "./component/ContactUs/contact.jsx";
import { SpecialOfferPage } from "./Pages/Special-offer-page/special-offer.jsx";
import { SingleProduct } from "./Pages/Single-product/single-product.jsx";
import SnackBarSuccess from "./component/Snackbar/snackbar.jsx";
import ScrollToTopButton from "./component/ScrollTop/scrollTop.jsx";
import RegisterPage from "./Pages/Register&Login/signUp.jsx";
import LoginPage from "./Pages/Register&Login/login.jsx";
import { CategorySingle } from "./Pages/Category-single/categorySingle.jsx";

function App() {


  useEffect(() => {
    window.scrollTo(0 , 0)
  }, []);

  return (
    <>
      <MyHeader />
      <SnackBarSuccess />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categoryHouse" element={<CategoryPage />} />
        <Route path="/clothes" element={<SpicalPageListSide />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route path="/special-offer/:id" element={<SpecialOfferPage />} />
        <Route path="/single-prouduct/:id" element={<SingleProduct />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/single-category/:id" element={<CategorySingle />} />
      </Routes>
      <ScrollToTopButton />

      <Footer />
    </>
  );
}

export default App;
