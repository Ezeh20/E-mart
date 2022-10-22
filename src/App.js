import { Routes, Route } from "react-router-dom";
import Navigation from "./Route/Navigation/navigation.component";
import Home from "./Route/home/home.component";
import Shop from "./Route/Shop/shop.component";
import ShopOne from "./Route/Shop/Shop-sub-routes/shop-0ne";
import ShopTwo from "./Route/Shop/Shop-sub-routes/shop-two";
import "./index.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<ShopOne />} />
          <Route path="shop1" element={<ShopOne />} />
          <Route path="shop2" element={<ShopTwo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
