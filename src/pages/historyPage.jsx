import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiCalendarTodoFill } from "react-icons/ri";

import NotFound from "../components/notFound";
import HistoryCard from "../components/historyCard";
import { getOrders } from "../services/order-services";
import { typography } from "../styles";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  padding: 57px 30px;
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
  const { navigate } = useAuth();

  useEffect(() => {
    getOrders().then(setOrders).catch(console.log);
  }, []);

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
        <NotFound icon={<RiCalendarTodoFill />} text={"No history yet"} />
      )}
    </Container>
  );
};

export default HistoryPage;
