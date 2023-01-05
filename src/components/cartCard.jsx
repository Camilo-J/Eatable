import styled from "@emotion/styled";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

import Image from "./image";
import { colors, typography } from "../styles";
import { useState } from "react";

const Card = styled.div`
  height: 102px;
  width: 325px;
  padding: 1.25rem;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const TextCard = styled.div`
  ${typography.text.md}
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.div`
  align-self: end;
  height: 20px;
  width: 56px;
  padding: 0 6px;
  border-radius: 30px;
  background-color: #fa4a0c;
  color: ${colors.white};
  ${typography.text.lg}
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const CartCard = ({ src, price, name, id }) => {
  const [amount, setAmount] = useState(1);

  function handleIncrease() {
    setAmount(amount + 1);
  }

  function handleDecrease() {
    setAmount(amount - 1);
  }

  return (
    <Card>
      <Image size={"xs"} src={src} />
      <TextCard>
        <Text>
          <p>organic pumpkin</p>
          <p style={{ color: "#FA4A0C", fontSize: "18px" }}>$75.55</p>
        </Text>
        <Button>
          <AiOutlineLine onClick={handleDecrease} />
          <span>{amount}</span>
          <AiOutlinePlus onClick={handleIncrease} />
        </Button>
      </TextCard>
    </Card>
  );
};

export default CartCard;
