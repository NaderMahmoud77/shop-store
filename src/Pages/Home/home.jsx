// COMPO
import { MyHome } from "../../component/Home/home.jsx";
import { Category } from "../../component/CategorySection/category.jsx";
import { Specials } from "../../component/Special/specialOffer.jsx";
import { ContactUs } from "../../component/ContactUs/contact.jsx";
import { SliderItem } from "../../component/Slider/slider.jsx";


import { products } from "../../Data/products.js";
import CommentClint from "../../component/ComentesClint/comentClint.jsx";

//////////////
export let Home = () => {




  let labtop = products.filter((i) => i.isLaptop);
  let phone = products.filter((i) => !i.isLaptop);

  return (
    <>
      <MyHome />
      <Category />
      <Specials />
      <SliderItem data={labtop} title="احدث انواع اللابتوبات" />
      <SliderItem data={phone} title="احدث انواع الموبيلات" />
      <ContactUs />
      <CommentClint />
    </>
  );
};
