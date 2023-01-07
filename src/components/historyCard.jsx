import styled from "@emotion/styled";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

import { typography } from "../styles";

const Card = styled.div`
  width: 325px;
  min-height: 102px;
  padding: 1rem 1.2rem 0 1.2rem;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  //   gap: 1rem;
  flex-direction: column;
  align-items: center;
`;
const MainView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const MainText = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 1.4rem;
  align-self: end;
  transition: all 0.5s;
  ${({ active }) => (active ? "rotate: -180deg;" : "")}
`;

const Amount = styled.span`
  color: #fa4a0c;
`;

const Title = styled.p`
  ${typography.text.lg}
  text-align:initial;
`;

const DisplayView = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  height: 0;
  transition: all 0.5s;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.4s, opacity 0.1s linear;
  transform-origin: top;

  ${({ active }) =>
    active
      ? "  margin-top: 12px; visibility: visible; opacity: 1; height:auto;"
      : ""};
`;

const GroupDetails = styled.div`
  border-bottom: 1px solid #9f9090;
  padding-bottom: 9px;
`;

const OrderDetail = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  justify-content: space-between;
`;

const HistoryCard = ({ date, items, addres }) => {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <Card>
      <MainView>
        <p>{date}</p>
        <MainText>
          <span>{items.length} items</span>
          <Amount>
            ${items.reduce((accu, current) => accu + current.subtotal, 0)}
          </Amount>
        </MainText>
      </MainView>
      <DisplayView data-testid="containerView" active={display}>
        <GroupDetails>
          <Title>Order</Title>
          {items?.map((elem) => {
            return (
              <OrderDetail key={elem.id}>
                <span>
                  {elem.quantity}-{elem.product_name}
                </span>
                <span>${elem.subtotal}</span>
              </OrderDetail>
            );
          })}
        </GroupDetails>
        <div>
          <Title>Delivery</Title>
          <p>{addres}</p>
        </div>
      </DisplayView>
      <Icon active={display}>
        <HiOutlineChevronDown data-testid="display" onClick={handleDisplay} />
      </Icon>
    </Card>
  );
};

export default HistoryCard;
