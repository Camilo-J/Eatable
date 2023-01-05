import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Button = styled.button`
  all: unset;
  width: 310px;
  height: 50px;
  padding: 12px 16px;
  border-radius: 30px;
  color: #fff;
  ${typography.text.lg}

  ${({ disabled }) =>
    disabled
      ? "background-color: #fa7849;"
      : `background-color: #fa4a0c;
      cursor:pointer;
      &:hover {
    background-color: #ef490e;
  }`}
`;

function CustomButton({ children, handleCLick, disable }) {
  return (
    <Button onClick={handleCLick} disabled={Boolean(disable)}>
      {children}
    </Button>
  );
}

export default CustomButton;
