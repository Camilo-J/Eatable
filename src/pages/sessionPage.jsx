import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import title from "../assets/Eatable.svg";
import { typography } from "../styles/typography";
import Input from "../components/input";
import CustomButton from "../components/Button";
import { useState } from "react";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  width: 100%;
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
  border-radius: 30px;
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
  const [options, setOptions] = useState({ loginOp: true, sign_upOp: false });
  const { login, signup, navigate } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const { loginOp, sign_upOp } = options;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (loginOp)
      login(formData).catch((error) => {
        const newError = JSON.parse(error.message);
        setErrors({ ...errors, password: newError });
      });

    if (sign_upOp)
      signup(formData).catch((error) => {
        console.log(error);
        const newErrors = JSON.parse(error.message);
        setErrors({ ...errors, ...newErrors });
      });
    navigate("/profile");
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
          <FooterOptions selected={loginOp} onClick={handleOptions}>
            Login
            <BorderButton selected={loginOp} />
          </FooterOptions>
          <FooterOptions selected={sign_upOp} onClick={handleOptions}>
            Sing-up
            <BorderButton selected={sign_upOp} />
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
          error={errors.email.toString()}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
          error={errors.password.toString()}
        />

        <ContainerButton>
          <CustomButton>{loginOp ? "Login" : "Sign-up"}</CustomButton>
        </ContainerButton>
      </Form>
    </Container>
  );
};

export default SessionPage;
