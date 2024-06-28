import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <Container>
      <NavLinks className={({ isActive }) => (isActive ? "active" : "")} to="/">
        <Logo />
      </NavLinks>
      <RightNav>
        <NavLinks
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/write"
        >
          여름쓰기
        </NavLinks>
        <NavLinks
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/all"
        >
          모두의 여름
        </NavLinks>
      </RightNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13.59px 25px 13.59px 16px;
`;

const NavLinks = styled(NavLink)`
  color: #000000;
  font-family: "S-CoreDream-5Medium";
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    color: #0085ff;
  }

  &.active {
    color: #0085ff;
  }
`;

const RightNav = styled.div`
  display: flex;
  gap: 25px;
`;
