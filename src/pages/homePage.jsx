import styled from "@emotion/styled";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";

import CardFood from "../components/card";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles";

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

const Results = styled.p`
  margin-top: 32px;
  text-align: center;
  ${typography.head.md}
`;

const HomePage = ({ products, search, handleChange }) => {
  const { navigate } = useAuth();

  function showProduct(id) {
    navigate(`/products/${id}`);
  }
  return (
    <Container>
      <div>
        <Header>
          <Search>
            {search ? <HiOutlineChevronLeft /> : <FiSearch />}
            <Input
              id={"search"}
              name={"search"}
              type={"text"}
              value={search}
              onChange={handleChange}
              placeholder={"Search"}
            ></Input>
          </Search>
          <FiShoppingCart onClick={() => navigate("cart")} />
        </Header>

        {search ? <Results>{`Found ${products.length} results`}</Results> : ""}
      </div>

      <ContainerCards>
        {products?.map((elem) => (
          <CardFood
            key={elem.id}
            id={elem.id}
            name={elem.name}
            price={elem.price}
            src={elem.picture_url}
            handleProduct={showProduct}
          />
        ))}
      </ContainerCards>
    </Container>
  );
};

export default HomePage;
