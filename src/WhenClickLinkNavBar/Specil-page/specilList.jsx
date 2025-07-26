// MUI
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

import { ButtonSeeMore } from "../../component/ButtonSeeMore/buttonSeeMore";

export function SpecilList({ SpecialSort }) {
  return (
    <div className="special-list">
      <div className="special-list-item">
        {SpecialSort.map((spe) => {
          return (
            <Card key={spe.id} className="card-list-special">
              <img
                src={spe.firstImage}
                alt={spe.title}
                className="special-list-image"
              />

              <h2 className="special-list-title">{spe.title}</h2>

              <div className="special-list-rating">{spe.rating}</div>

              <h4 className="special-list-price">
                <b>السعر:-</b> {spe.price}$
              </h4>
              <div className="discount-special">خصم {spe.discount}% 🔥</div>
              <Link
                to={`/special-offer/${spe.id}`}
                className="btn-see-more-special"
              >
                <ButtonSeeMore />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
