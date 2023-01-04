import styled from "@emotion/styled";
import { AiOutlineRight } from "react-icons/ai";

import CustomButton from "../components/Button";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 30px 30px;
  justify-content: space-between;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const Header = styled.div`
  display: flex;
  ${typography.head.xs}
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  ${typography.text.lg}

  margin-bottom: 10px;
  font-weight: 600;
`;

const EditButton = styled.button`
  all: unset;
  ${typography.text.md}
  color: #FA4A0C;
`;

const DataProfile = styled.div`
  background-color: #fff;
  min-width: 315px;
  height: 215px;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${typography.text.lg}
  font-weight: 600;
  text-align: initial;
`;

const Border = styled.div`
  height: 1px;
  background-color: #9f9090;
`;

const Text = styled.p`
  ${typography.text.md}
  color: #9f9090;
`;

const HistoryButton = styled.button`
  all: unset;
  background-color: ${colors.white};
  border-radius: 20px;
  box-sizing: border-box;
  width: 97%;
  padding: 19px 20px;
  display: flex;
  justify-content: space-between;
  ${typography.text.lg}
`;

const ProfilePage = () => {
  const { user, navigate } = useAuth();
  const { name, email, phone, address } = user;

  return (
    <Container>
      <Main>
        <Header>My Profile</Header>
        <div>
          <Subtitle>
            <p>Personal details</p>
            <EditButton onClick={() => navigate("/profile/edit")}>
              change
            </EditButton>
          </Subtitle>
          <DataProfile>
            <p>{name || "User"}</p>
            <Text>{email || "----------"}</Text>
            <Border />
            <Text>{phone || "----------"}</Text>
            <Border />
            <Text>{address || "----------"}</Text>
          </DataProfile>
        </div>
        <HistoryButton>
          <p>History</p>
          <AiOutlineRight />
        </HistoryButton>
      </Main>
      <CustomButton>Logout</CustomButton>
    </Container>
  );
};

export default ProfilePage;
