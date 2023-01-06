import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";

import HistoryCard from "../components/historyCard";
import { getOrders } from "../services/order-services";
import { typography } from "../styles";

const Container = styled.div`
  padding: 57px 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  width: 100%;
  ${typography.text.xl}
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 8.25rem;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders).catch(console.log);
  }, []);

  return (
    <Container>
      <Header>
        <HiOutlineChevronLeft />
        <p>Cart</p>
      </Header>
      <ContainerCards>
        {orders?.map((elem) => {
          return (
            <HistoryCard
              key={elem.id}
              addres={elem.delivery_address}
              date={elem.created_at}
              items={elem.order_details}
            ></HistoryCard>
          );
        })}
      </ContainerCards>
    </Container>
  );
};

export default HistoryPage;
