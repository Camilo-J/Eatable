import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.md};
  color: #adadaf;
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 2.5rem;
  cursor: pointer;
  svg {
    fill: none;
    stroke-width: ${({ stroke }) => (stroke ? stroke : "")};
    stroke: #adadaf;
  }
  &:hover {
    svg {
      stroke: #828282;
    }
  }
  &:focus {
    svg {
      stroke: #fa4a0c;
      fill: #fa4a0c;
      color: #fa4a0c;
    }
    filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
  }
`;

function NavBarItem({ name, icon, to, stroke }) {
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
      }}
      stroke={stroke}
    >
      {icon}
      {name}
    </StyledNavLink>
  );
}

export default NavBarItem;
