// COMPO
import { MyHome } from "../../component/Home/home.jsx";
import { Category } from "../../component/CategorySection/category.jsx";
import { Specials } from "../../component/Special/specialOffer.jsx";
import { ContactUs } from "../../component/ContactUs/contact.jsx";
import { SliderItem } from "../../component/Slider/slider.jsx";
import { useEffect } from "react";

// Redux
import { useDispatch , useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCall/productCall.js";
import CommentClint from "../../component/ComentesClint/comentClint.jsx";

//////////////
export let Home = () => {

  let dispatch = useDispatch()
  let {products} = useSelector((stata) => stata.products)

  useEffect(()=>{
    dispatch(fetchProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
