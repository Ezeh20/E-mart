import { Routes, Route } from "react-router-dom";
import Navigation from "./Route/Navigation/navigation.component";
import Home from "./Route/home/home.component";
import Shop from "./Route/Shop/shop.component";
import Signin from "./Route/Auth/sign-in/sign-in-component";
import SignUp from "./Route/Auth/Sign-up-component/sign-up-component";
import CheckoutPage from "./Route/Checkout-component/Checkout-component";
import ProductInfo from "./Components/Product-info/product-info";
import "./index.scss";

const App = () => {


  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path=':cat' element={<ProductInfo />} />
      </Route>
    </Routes>
  );
};

export default App;
