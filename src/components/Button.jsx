import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Button = styled.button`
  all: unset;
  width: 310px;
  height: 50px;
  padding: 12px 16px;
  border-radius: 30px;
  background-color: #fa4a0c;
  color: #fff;
  ${typography.text.lg}

  &:hover {
    background-color: #ef490e;
  }
`;

function CustomButton({ children }) {
  return <Button>{children}</Button>;
}

export default CustomButton;
