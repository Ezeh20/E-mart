import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Route/home/home.component";
import "./index.scss";

const Navigation = () => {
  return (
    <div>
      <h1>I am the Navigation bar</h1>
      <Outlet/>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h1>Shop here we gooooooo!!!!</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
