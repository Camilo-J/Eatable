import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import EditProfilePage from "./pages/editProdilePage";
import HomePage from "./pages/homePage";
import Product from "./components/product";
import ProfilePage from "./pages/profilePage";
import { getOrders } from "./services/products-service";
import CartPage from "./pages/cartPage";
import { useLocalStorage } from "./hook";

const Div = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
`;

function AuthenticatedApp() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [localSto, setLocalSto] = useLocalStorage([], "CardOrders");

  useEffect(() => {
    getOrders().then(setProducts).catch(console.log);
  }, []);

  let searchProducts = products?.filter((elem) =>
    elem.name.toLowerCase().includes(search)
  );

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function searchProduct(id) {
    return products.find((elem) => elem.id === id);
  }

  function addOrder(newOrder) {
    setLocalSto([...localSto, newOrder]);
  }

  function findOrder(id) {
    return localSto?.find((elem) => elem.id === id);
  }

  function productInCart() {
    return products.filter((elem) => elem.id === findOrder(elem.id)?.id);
  }

  function handleAmount(id, amount) {
    let order = findOrder(id);

    let neworders = localSto.filter((elem) => elem.id !== id);

    if (amount === 0) {
      setLocalSto(neworders);
      return neworders;
    }

    if (amount !== 0) {
      order.quantity = amount;

      neworders.push(order);
      setLocalSto(neworders);

      return neworders;
    }
  }

  function getTotalAmount() {
    let products = productInCart();

    return products.reduce((accu, current) => {
      let value = current.price * findOrder(current.id).quantity;
      return accu + value;
    }, 0);
  }

  return (
    <Div>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" />} />
          <Route
            path="products"
            element={
              <HomePage
                products={searchProducts}
                search={search}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="products/:id"
            element={
              <Product
                handleFilter={searchProduct}
                Order={findOrder}
                handleOrder={addOrder}
              />
            }
          />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/edit" element={<EditProfilePage />} />
          <Route
            path="cart"
            element={
              <CartPage
                changeAmount={handleAmount}
                orders={productInCart()}
                handleOrder={findOrder}
                totalAmount={getTotalAmount}
              />
            }
          />
          {/* 
        <Route path="/profile" element={<ProfilePage />} >
           <Route path="/edit" element={<EditProfilePage />} />
        </Route> */}
        </Route>
      </Routes>
      <Navbar></Navbar>
    </Div>
  );
}

export default AuthenticatedApp;
