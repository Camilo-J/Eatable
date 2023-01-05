import styled from "@emotion/styled";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

import CardFood from "../components/card";

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 4rem;
  align-items: center;
`;

const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Header = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`;
const Search = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
`;

const Input = styled.input`
  all: unset;
  font-size: 1.1rem;
`;

const HomePage = ({ products, search, handleChange }) => {
  console.log(products);
  return (
    <Container>
      <Header>
        <Search>
          <FiSearch />
          <Input
            id={"search"}
            name={"search"}
            type={"text"}
            value={search}
            onChange={handleChange}
            placeholder={"Search"}
          ></Input>
        </Search>
        <FiShoppingCart />
      </Header>
      <ContainerCards>
        {products?.map((elem) => (
          <CardFood
            key={elem.id}
            id={elem.id}
            name={elem.name}
            price={elem.price}
            src={elem.picture_url}
          />
        ))}
      </ContainerCards>
    </Container>
  );
};

export default HomePage;
