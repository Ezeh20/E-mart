import { Routes, Route } from "react-router-dom";
import Navigation from "./Route/Navigation/navigation.component";
import Home from "./Route/home/home.component";
import Shop from "./Route/Shop/shop.component";
import Signin from "./Route/Auth/sign-in/sign-in-component";
import SignUp from "./Route/Auth/Sign-up-component/sign-up-component";
import "./index.scss";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
