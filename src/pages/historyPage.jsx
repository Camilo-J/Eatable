import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiCalendarTodoFill } from "react-icons/ri";

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

const NotFound = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${typography.head.sm}
`;

const SizeIcon = styled.section`
  font-size: 7rem;
  color: #c7c7c7;
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

      {orders.length ? (
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
      ) : (
        <NotFound>
          <SizeIcon>
            <RiCalendarTodoFill />
          </SizeIcon>
          <p>No history yet</p>
        </NotFound>
      )}
    </Container>
  );
};

export default HistoryPage;
