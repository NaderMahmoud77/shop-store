// Router
import { Link, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";

export let NavBar = ({ toggle, setToggle }) => {
  const location = useLocation();

  const links = [
    { to: "/", label: "الصفحه الرئسيه" },
    { to: "/products", label: "الالكترونيات والموبيلات" },
    { to: "/categoryHouse", label: "المنزل" },
    { to: "/clothes", label: "الملابس" },
    { to: "/contactUS", label: "تواصل معنا" },
  ];

  return (
    <>
      <nav className="nav" style={{ right: toggle && "0" }}>
        <div className="close" onClick={() => setToggle(false)}>
          <i className="bi bi-x-lg"></i>
        </div>

        <ul className="link">
          <SearchModal value="show" />
          {links.map((link) => (
            <Link to={link.to} key={link.to}>
              <li
                onClick={() => setToggle(false)}
                className={location.pathname === link.to ? "active" : ""}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};
