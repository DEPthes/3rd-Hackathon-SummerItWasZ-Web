import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import { useSetRecoilState } from "recoil";
import { pageState } from "../assets/recoil/recoil";

const Header = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <Container>
      <NavLinks
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/"
        onClick={() => setPage(0)}
      >
        <Logo />
      </NavLinks>
      <RightNav>
        <NavLinks
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/write"
          onClick={() => setPage(0)}
        >
          여름 쓰기
        </NavLinks>
        <NavLinks
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/all"
          onClick={() => setPage(0)}
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
  font-family: "S-CoreDream-6Bold";
  font-weight: 600;
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
