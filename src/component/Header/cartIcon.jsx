// Router
import { Link } from "react-router-dom";

export function CartIcon({ count }) {
  return (
    <Link to="Cart" className="shoppnig">
      <p>سله التسوق</p>
      <i className="bi bi-cart3"></i>
      {count > 0 && <span className="num">{count}</span>}
    </Link>
  );
}
