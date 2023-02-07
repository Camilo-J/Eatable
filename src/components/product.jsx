import styled from "@emotion/styled";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useParams } from "react-router-dom";

import Image from "./image";
import CustomButton from "./Button";
import { typography } from "../styles";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  padding: 40px 50px;
  font-size: 1.4rem;
`;

const Main = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.5rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
`;

const Title = styled.div`
  ${typography.head.md}
  text-align: center;
`;

const Price = styled.p`
  color: #fa4a0c;
`;

const Body = styled.div`
  ${typography.text.lg}
  text-align: initial;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Description = styled.p`
  ${typography.text.md}
`;

const Product = ({ handleFilter, Order, handleOrder }) => {
  const { id } = useParams();
  const { navigate } = useAuth();
  let product = handleFilter(Number.parseInt(id));

  let orderCart = Order(Number.parseInt(id));

  function addProduct() {
    handleOrder({ id: product.id, quantity: 1 });
  }

  return (
    <Container>
      <HiOutlineChevronLeft
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
      <Main>
        <div>
          <Image size={"md"} src={product?.picture_url} />
        </div>

        <TextSection>
          <Title>
            <p>{product?.name}</p>
            <Price data-testid="price">{`$${product?.price}`}</Price>
          </Title>
          <Body>
            <p>Description</p>
            <Description>{product?.description}</Description>
          </Body>
        </TextSection>
        <CustomButton handleCLick={addProduct} disable={Boolean(orderCart)}>
          {!orderCart ? "Add to Cart" : "Added to Cart"}
        </CustomButton>
      </Main>
    </Container>
  );
};

export default Product;
