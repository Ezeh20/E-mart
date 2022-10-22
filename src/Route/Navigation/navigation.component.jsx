import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-header">
        <Link className="logo-logo" to="/">
          <h2 className="logo">Logo</h2>
        </Link>
        <div className="nav-links">
          <Link className="link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
