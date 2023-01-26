import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi"
import ShoppingCart from "../../Components/shopping-cart/shopping-cart";
import Checkout from "../../Components/Checkout-component/checkout-component";
import { UserContext } from "../../Context/user.context";
import { CartContext } from "../../Context/cartContext";
import { SignOut } from "../../utils/firebase/firebase.utils";
import { NavHeader, NavBody, LogoSvg, NavLinks, Links, CheckoutB } from "./navigation.style";

const Navigation = () => {
  //get access to the currentUser state which may be updated at any time
  const { currentUser } = useContext(UserContext)
  const { cartActive } = useContext(CartContext)

  return (
    <Fragment>
      <NavHeader>
        <NavBody>
          <LogoSvg to="/">
            <TfiShoppingCartFull />
          </LogoSvg>
          <NavLinks>
            <Links to="/shop">
              SHOP
            </Links>
            {
              currentUser ? (<Links as={`span`} onClick={SignOut}>SIGN OUT</Links>) : (<Links className="link" to="/signin">
                SIGN IN
              </Links>)
            }
            <ShoppingCart />
          </NavLinks>
          {
            cartActive && <CheckoutB>
              <Checkout />
            </CheckoutB>
          }

        </NavBody>
      </NavHeader>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
