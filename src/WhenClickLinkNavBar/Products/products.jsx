import { ProductsList } from "./productList";
import { ProductsSideBar } from "./productsSideBar";
import { fetchProducts } from "../../redux/apiCall/productCall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./products.css";
import { Pagination } from "./Pagination";

export let Products = () => {
  let dispatch = useDispatch();

  let { products } = useSelector((state) => state.products);

  let [filterItem, setFilterItem] = useState("all");
  let [sortItem, setSortItem] = useState("select");
  let [currentPage, setCurrentPage] = useState(1);

  // Filter Prodcut
  let filterProduct = products.filter((pro) => {
    return filterItem === "laptop"
      ? pro.isLaptop === true
      : filterItem === "phone"
      ? pro.isLaptop === false
      : pro;
  });

  // Sort Product
  let sortProduct =
    sortItem === "low"
      ? [...filterProduct].sort((a, b) => a.price - b.price)
      : sortItem === "higt"
      ? filterProduct.sort((a, b) => b.price - a.price)
      : filterProduct.sort((a, b) => (a.title - b.title ? 1 : -1));

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Pagenation
  let POTDCUT_PAGE = 6;
  let pages = Math.ceil(sortProduct.length / POTDCUT_PAGE);

  let startIndex = (currentPage - 1) * POTDCUT_PAGE;
  let finishIndex = currentPage * POTDCUT_PAGE;
  let orderdProjects = sortProduct.slice(startIndex, finishIndex);

  return (
    <>
      <div className="container products-list-side">
        <ProductsSideBar
          setFilterItem={setFilterItem}
          setSortItem={setSortItem}
        />
        <ProductsList products={orderdProjects} />
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
};
