import styled from "styled-components";
import Button from "../../components/Button";

const Select = () => {
  return (
    <Container>
      <div>일기장을 선택하세요.</div>
      <div></div>
      <div>
        <Button text="이전" />
        <Button text="작성 완료" />
      </div>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;
`;
