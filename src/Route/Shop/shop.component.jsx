import { Outlet, Link } from "react-router-dom";
import "./shop.style.scss";

const Shop = () => {
  return (
    <div>
      <h1>Shop heading</h1>
      <div className="shop">
        <nav className="shop-nav">
          <Link className="shop-link" to="shop1">
            Shop 1
          </Link>
          <Link className="shop-link" to="shop2">
            Shop 2
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
