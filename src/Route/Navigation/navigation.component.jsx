import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi"
import ShoppingCart from "../../Components/shopping-cart/shopping-cart";
import { UserContext } from "../../Context/user.context";
import { SignOut } from "../../utils/firebase/firebase.utils";


import "./navigation.style.scss";

const Navigation = () => {
  //get access to the currentUser state which may be updated at any time
  const { currentUser } = useContext(UserContext)

  return (
    <Fragment>
      <div className="nav-header">
        <div className="nav-body container-two">
          <Link className="logo-logo" to="/">
            <TfiShoppingCartFull className="logo-svg" />
          </Link>

          <div className="nav-links">
            <Link className="link" to="/shop">
              SHOP
            </Link>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
            {
              currentUser ? (<span className="link" onClick={SignOut}>SIGN OUT</span>) : (<Link className="link" to="/signin">
                SIGN IN
              </Link>)
            }
            <ShoppingCart/>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
