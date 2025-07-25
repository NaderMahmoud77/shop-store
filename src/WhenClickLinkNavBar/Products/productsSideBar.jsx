import { ProductFilterItem } from "./productFilterItem";
import { ProductSortItem } from "./productSortItem";

export function ProductsSideBar({setFilterItem , setSortItem}){

    return (
        <>
            <div className="side-bar">
               <div className="sidebar-item">
                <h4 className="sidebar-item-title">فلتره حسب المنتج</h4>
                <ProductFilterItem  setFilterItem={setFilterItem}/>
               </div>
               <div className="sidebar-item">
                <h4 className="sidebar-item-title">ترتيب حسب السعر</h4>
                <ProductSortItem setSortItem={setSortItem}/>
               </div>
            </div>
        </>
    )
}