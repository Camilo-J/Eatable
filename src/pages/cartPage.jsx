import styled from "@emotion/styled";
import CartCard from "../components/cartCard";

const Container = styled.div`
  padding: 55px 50px;
`;

const CartPage = ({ changeAmount, orders }) => {
  console.log(orders);
  return (
    <Container>
      {orders.map((elem) => (
        <CartCard
          key={elem.id}
          changeAmount={changeAmount}
          price={elem.price}
          id={elem.id}
          name={elem.name}
          src={elem.picture_url}
        />
      ))}
    </Container>
  );
};

export default CartPage;
