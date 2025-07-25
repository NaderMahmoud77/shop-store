import "./categoryPage.css";

import { CategoryList } from "./categoryList";
import { CategorySort } from "./categorySort";

import { categories } from "../../Data/cstegory";
import { useState } from "react";

export function CategoryPage() {
  let [sortCategory, setSortCategory] = useState("all");

  // Sort Category
  let categorySort = categories.sort((a, b) =>
    sortCategory === "low"
      ? a.price - b.price
      : sortCategory === "higt"
      ? b.price - a.price
      : a.title < b.title ? 1 : -1
  );

  return (
    <div className="category-page container">
      <CategorySort setSortCategory={setSortCategory} />
      <CategoryList categorySort={categorySort}/>
    </div>
  );
}
