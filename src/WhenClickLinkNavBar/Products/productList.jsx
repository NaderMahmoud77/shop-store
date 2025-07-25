// Redux
import { Link } from "react-router-dom";

// MUI
import Card from "@mui/material/Card";

// COMPO RATING
import { Ratings } from "../../component/Rating/rating";
import { ButtonSeeMore } from "../../component/ButtonSeeMore/buttonSeeMore";

export function ProductsList({ products }) {
  return (
    <>
      <div className="products-list-item">
        {/* loop on Products */}
        {products.map((i) => {
          return (
            <div key={i.id} className="list-item">
              <Card className="card-item-list">
                <img src={i.image} alt={i.title}  className="list-item-image" />

                <h1 className="list-item-title">{i.title}</h1>

                <Ratings value={5} />

                <div className="list-item-price">السعر :{i.price}$</div>

                  <Link to={`/single-prouduct/${i.id}`} style={{width:"max-content",margin:"4px auto" , display:"block"}}>
                   <ButtonSeeMore />
                  </Link>
                  
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
