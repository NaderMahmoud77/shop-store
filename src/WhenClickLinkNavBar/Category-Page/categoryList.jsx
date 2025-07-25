// MUI
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

import { ButtonSeeMore } from "../../component/ButtonSeeMore/buttonSeeMore";

export function CategoryList({categorySort}){

    // console.log(categorySort)

    return(
        <div className="category-list">
            <div  className="category-list-item">
             {categorySort.map((cate) =>{
                 return <Card key={cate.id} className="card-list-category">
                    <img src={cate.image} alt={cate.title} className="category-list-image" />

                    <h2 className="category-list-title">{cate.title}</h2>

                    <div className="category-list-rating">{cate.rating}</div>

                    <div className="category-list-price"><b>السعر:-</b> {cate.price}$</div>

                    <Link to={`/single-category/${cate.id}`} className="btn-see-more">
                        <ButtonSeeMore/>
                    </Link>
                </Card>
             })}
          </div>
        </div>
    )
}