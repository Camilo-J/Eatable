import styled from "@emotion/styled";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";

import CardFood from "../components/card";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles";

const ContainerCards = styled.div`
  max-width: 414px;
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

const Filters = styled.section`
  margin-top: 32px;
  padding-left: 1rem;
  font-size: 16px;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fa4a0c;
    border-radius: 20px;
  }
  ::-webkit-overflow-scrolling: touch;
`;

const NotFound = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${typography.head.md}
`;

const SizeIcon = styled.section`
  font-size: 7rem;
  color: #c7c7c7;
`;

const FilterOption = styled.div`
  cursor: pointer;
  height: 55px;
  ${typography.text.md}
  transition: all 0.5s;
  ${({ selected, name }) =>
    selected === name.toLowerCase() ? "color:#fa4a0c;" : ""}
`;

const TextFilter = styled.p`
  padding: 0 1rem;
`;

const BorderButton = styled.div`
  margin-top: 10px;
  height: 2px;
  background: linear-gradient(to right, #fa4a0c 50%, #f6f6f9 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  ${({ selected, name }) =>
    selected === name.toLowerCase() ? "background-position: left bottom;" : ""}
`;

const HomePage = ({
  filterSelected,
  products,
  search,
  filters,
  handleChange,
  handleFilter,
}) => {
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
          <FiShoppingCart
            style={{ cursor: "pointer", color: "#fa4a0c" }}
            onClick={() => navigate("cart")}
          />
        </Header>
        {search && products.length ? (
          <Results>{`Found ${products.length} results`}</Results>
        ) : (
          ""
        )}
        {!search ? (
          <Filters>
            {filters?.map((elem, index) => (
              <FilterOption key={index} name={elem} selected={filterSelected}>
                <TextFilter onClick={handleFilter}>{elem}</TextFilter>
                <BorderButton name={elem} selected={filterSelected} />
              </FilterOption>
            ))}
          </Filters>
        ) : (
          ""
        )}
      </div>

      {products.length ? (
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
      ) : (
        <NotFound>
          <SizeIcon>
            <FiSearch />
          </SizeIcon>
          <p>No products found</p>
        </NotFound>
      )}
    </Container>
  );
};

export default HomePage;
