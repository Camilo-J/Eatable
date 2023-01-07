import styled from "@emotion/styled";
import { typography } from "../styles";

const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${typography.head.sm}
`;

const SizeIcon = styled.section`
  font-size: 7rem;
  color: #c7c7c7;
`;

const NotFound = ({ icon, text }) => {
  return (
    <Container>
      <SizeIcon>{icon}</SizeIcon>
      <p>{text}</p>
    </Container>
  );
};

export default NotFound;
