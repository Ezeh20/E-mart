import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as MartLogo } from "../../asset/shopping-bag-3753.svg";
import { ReactComponent as Icon } from "../../asset/user.svg";

import "./navigation.style.scss";

const Navigation = () => {
  
  return (
    <Fragment>
      <div className="nav-header">
        <div className="nav-body container-two">
          <Link className="logo-logo" to="/">
            <MartLogo className="logo-svg" />
          </Link>
          <div className="nav-links">
            <Link className="link" to="/shop">
              SHOP
            </Link>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
            <Link className="link" to="/signin">
              SIGN IN
            </Link>
            <Link className="link" to="/sign-up">
              <Icon />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
