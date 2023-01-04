import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import title from "../assets/Eatable.svg";
import { typography } from "../styles/typography";
import Input from "../components/input";
import CustomButton from "../components/Button";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

const Header = styled.div`
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Description = styled.p`
  ${typography.text.xs}
  color:#FA4A0C;
  font-weight: 600;
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HeaderContainer = styled.div`
  background-color: ${colors.white};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const FooterOptions = styled.button`
  all: unset;
  width: 134px;
  transition: all 0.3s;

  ${typography.text.lg}
`;
const BorderButton = styled.div`
  margin-top: 13px;
  height: 2px;
  background: linear-gradient(to right, #fa4a0c 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  ${({ selected }) => (selected ? "background-position: left bottom;" : "")}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center
  padding: 0px;
  gap: 2rem;
`;

const ContainerButton = styled("div")`
  margin-top: 210px;
  margin-bottom: 40px;
`;

const SessionPage = () => {
  const [options, setOptions] = useState({ login: true, sign_up: false });
  // const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const { login, sign_up } = options;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (login) {
      console.log("hola soy login");
    }
    if (sign_up) {
      console.log("hola soy sign-up");
    }
  }
  function handleOptions() {
    // 1.- Away to switch the states
    let newValue = {};
    for (const [key, value] of Object.entries(options)) {
      newValue[key] = !value;
    }
    setOptions(newValue);
  }
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <HeaderText>
            <img src={title} alt="logo-title" />
            <Description>Food for Everyone</Description>
          </HeaderText>
        </Header>
        <Footer>
          <FooterOptions selected={login} onClick={handleOptions}>
            Login
            <BorderButton selected={login} />
          </FooterOptions>
          <FooterOptions selected={sign_up} onClick={handleOptions}>
            Sing-up
            <BorderButton selected={sign_up} />
          </FooterOptions>
        </Footer>
      </HeaderContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />

        <ContainerButton>
          <CustomButton>Create Account</CustomButton>
        </ContainerButton>
      </Form>
    </Container>
  );
};

export default SessionPage;
