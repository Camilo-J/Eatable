import styled from "@emotion/styled";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";

import CustomButton from "../components/Button";
import NotFound from "../components/notFound";
import CartCard from "../components/cartCard";
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
  gap: 8rem;
`;
const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  color:#FA4A0C;
`;

const CartPage = ({ changeAmount, orders, handleOrder, totalAmount }) => {
  const { navigate } = useAuth();

  function handleNavigate() {
    navigate("checkout");
  }

  return (
    <Container>
      <Header>
        <HiOutlineChevronLeft
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <p>Cart</p>
      </Header>
      {orders.length ? (
        <>
          <Main>
            <ContainerCard>
              {orders.map((elem) => (
                <CartCard
                  key={elem.id}
                  changeAmount={changeAmount}
                  price={elem.price}
                  id={elem.id}
                  name={elem.name}
                  src={elem.picture_url}
                  getOrder={handleOrder}
                />
              ))}
            </ContainerCard>
            <Footer>
              <FooterText>
                <span>Total</span>
                <Amount>${totalAmount()}</Amount>
              </FooterText>
              <CustomButton
                handleCLick={handleNavigate}
                disable={orders.lenght ? false : true}
              >
                Checkout
              </CustomButton>
            </Footer>
          </Main>
        </>
      ) : (
        <NotFound icon={<FiShoppingCart />} text={"No items in the cart"} />
      )}
    </Container>
  );
};

export default CartPage;
