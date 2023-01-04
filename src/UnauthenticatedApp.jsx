import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";

import SessionPage from "./pages/sessionPage";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

function UnauthenticatedApp() {
  return (
    <ContainerPage>
      <Routes>
        <Route path="/" element={<SessionPage />} />
        <Route path="*" element={<SessionPage />} />
      </Routes>
    </ContainerPage>
  );
}

export default UnauthenticatedApp;
