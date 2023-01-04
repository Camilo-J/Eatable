import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import title from "../assets/Eatable.svg";
import { typography } from "../styles/typography";

const Container = styled.div``;

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
  padding-bottom: 13px;
  width: 134px;
  ${typography.text.lg}
  ${({ selected }) => (selected ? "border-bottom: 3px solid #FA4A0C" : "")}
`;

const SessionPage = () => {
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
          <FooterOptions selected={true}>Login</FooterOptions>
          <FooterOptions>Sing-up</FooterOptions>
        </Footer>
      </HeaderContainer>
    </Container>
  );
};

export default SessionPage;
