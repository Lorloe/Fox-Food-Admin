import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListUsers from "./pages/list/ListUsers";
import ListDishes from "./pages/list/ListDishes"
import ListCarts from "./pages/list/ListCarts"
import ListOrders from "./pages/list/ListOrders"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dishInputs, userInputs, cartInputs, orderInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListUsers />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Users" />}
              />
            </Route>
            <Route path="dishes">
              <Route index element={<ListDishes />} />
              <Route path=":dishId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={dishInputs} title="Add New dishes" />}
              />
            </Route>
            <Route path="carts">
              <Route index element={<ListCarts />} />
              <Route path=":cartId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={cartInputs} title="Add New carts" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<ListOrders />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add New orders" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
