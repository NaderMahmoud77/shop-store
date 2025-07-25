import './specialPage.css'

// Compo
import { SpecilList } from "./specilList";
import { SpecilSideBar } from "./specilSideBar";

//  Data
import { SpecialOffers } from "../../Data/special";
import { useState } from "react";

export function SpicalPageListSide() {
  let [sortSpecial, setSortSpecial] = useState("all");

  // Sort Spical Product
  let specilSort = SpecialOffers.sort((a, b) =>
    sortSpecial === "low"
      ? a.price - b.price
      : sortSpecial === "higt"
      ? b.price - a.price
      : a.title < b.title
      ? 1
      : -1
  );


  return (
    <div className="special-page-list container">
      <SpecilSideBar setSortSpecial={setSortSpecial}/>
      <SpecilList SpecialSort={specilSort}/>
    </div>
  );
}
