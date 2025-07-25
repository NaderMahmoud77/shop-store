/* eslint-disable jsx-a11y/alt-text */
import { categories } from "../../Data/cstegory";
// Style
import "./category.css";

import { CategoryCard } from "./categoryCard";

// //////////////
export let Category = () => {
  return (
    <div className="container">
      <div className="card">
        {categories.map((item, index) => (
          <CategoryCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
