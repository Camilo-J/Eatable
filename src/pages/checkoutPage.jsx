import styled from "@emotion/styled";
import { HiOutlineChevronLeft } from "react-icons/hi";
import CustomButton from "../components/Button";
import { useAuth } from "../context/auth-context";

import { typography } from "../styles";

const Container = styled.div`
  padding: 40px 30px 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
`;

const Header = styled.div`
  width: 100%;
  ${typography.text.xl}
  font-weight: 600;
  text-align: center;
  display: flex;
  gap: 8.25rem;
`;
const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${typography.head.md}
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;
const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Amount = styled.span`
  ${typography.head.md}
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
  height: 190px;
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

const CheckoutPage = ({ totalAmount }) => {
  const { user, navigate } = useAuth();
  const { name, email, phone, address } = user;
  return (
    <Container>
      <Header>
        <HiOutlineChevronLeft />
        <p>Cart</p>
      </Header>
      <Main>
        <ContainerCard>
          <p>Delivery</p>
          <Subtitle>
            <p>Address details</p>
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
        </ContainerCard>
        <Footer>
          <FooterText>
            <span>Total</span>
            <Amount>${totalAmount()}</Amount>
          </FooterText>
          <CustomButton>Complete Order</CustomButton>
        </Footer>
      </Main>
    </Container>
  );
};

export default CheckoutPage;
