import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as MartLogo } from "../../asset/shopping-bag-3753.svg";
import { ReactComponent as Icon } from "../../asset/user.svg";
import { UserContext } from "../../Context/context";

import "./navigation.style.scss";

const Navigation = () => {
  //get access to the currentUser state which may be updated at any time
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

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
