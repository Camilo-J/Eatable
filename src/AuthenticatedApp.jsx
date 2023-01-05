import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import EditProfilePage from "./pages/editProdilePage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import { getOrders } from "./services/products-service";

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

  useEffect(() => {
    getOrders().then(setProducts).catch(console.log);
  }, []);

  let searchProducts = products?.filter((elem) =>
    elem.name.toLowerCase().includes(search)
  );

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <Div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={searchProducts}
              search={search}
              handleChange={handleChange}
            />
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        {/* 
        <Route path="/profile" element={<ProfilePage />} >
           <Route path="/edit" element={<EditProfilePage />} />
        </Route> */}
      </Routes>
      <Navbar></Navbar>
    </Div>
  );
}

export default AuthenticatedApp;
