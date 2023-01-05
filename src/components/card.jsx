import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import Image from "./image";

const Container = styled.div`
  width: 156px;
  height: 230px;
  border-radius: 30px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const FoodName = styled.p`
  ${typography.text.xl}
  font-weight: 600;
  text-align: center;
  color: ${({ color }) => color};
  position: relative;
  top: -2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  top: -2.4rem;
`;

const CardFood = ({ name, price, src }) => {
  return (
    <Container>
      <ImageContainer>
        <Image size={"sm"} src={src} />
      </ImageContainer>
      <FoodName>{name}</FoodName>
      <FoodName color={"#FA4A0C"}>${price}</FoodName>
    </Container>
  );
};

export default CardFood;