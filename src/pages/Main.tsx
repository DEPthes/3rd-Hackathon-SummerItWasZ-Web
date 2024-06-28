import styled from "styled-components";
import ButtonM from "../components/ButtonM";

const Main = () => {
  return (
    <Container>
      <div>
        <ButtonM text="이전" />
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
