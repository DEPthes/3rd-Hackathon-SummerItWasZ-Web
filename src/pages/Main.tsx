import styled from "styled-components";
import Button from "../components/Button";

const Main = () => {
  return (
    <Container>
      <div>
        <Button text="이전" />
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
