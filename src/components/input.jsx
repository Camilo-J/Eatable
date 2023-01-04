import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #f6f6f9;
  box-sizing: border-box;
  border-bottom: 1px solid #000;

  &:focus-visible {
    outline: none;
    border-bottom-color: blue;
  }
`;

const Label = styled.label`
  color: #b8b8bb;
  ${typography.text.sm}
`;

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <Container>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <StyledInput
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
