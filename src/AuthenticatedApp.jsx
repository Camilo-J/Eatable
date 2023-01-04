import styled from "@emotion/styled";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import EditProfilePage from "./pages/editProdilePage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";

const Div = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
`;

function AuthenticatedApp() {
  return (
    <Div>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
