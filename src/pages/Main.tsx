import styled from "styled-components";
import ButtonM from "../components/ButtonM";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Main1 } from "../assets/images/Main1.svg";
import { ReactComponent as Main2 } from "../assets/images/Main2.svg";
import { ReactComponent as Main3 } from "../assets/images/Main3.svg";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MainWrap>
        <TitleWrap>
          <Main1 />
          <h1>여름이었다.ㅋ</h1>
        </TitleWrap>
        <Main2 />
        <h1 style={{ color: "#0085FF", marginTop: "80px" }}>.ㅋ</h1>
        <TextWrap>
          무더운 여름, 뜨거운 태양, 높은 온도와 습도속에서
          <br />
          불편한 감정들을 겪고 계신가요?
          <br />
          <br />
          <br />“<span>여름이었다.ㅋ</span>”는 여름의 불편했던 경험을
          <br />
          감성적이고 재치 있게 표현해 드리는 서비스입니다.
          <br />
          <br />
          <br />
          여러분의 여름 일상 속 에피소드를
          <br />
          마치 한 편의 소설처럼 재해석하여,
          <br />
          웃음과 재미를 드리겠습니다.
          <br />
          <br />
          <br />“<span>여름이었다.ㅋ</span>”와 함께
          <br />
          무더운 여름을 즐겁게 보내보세요!
        </TextWrap>
        <Main3 />
      </MainWrap>
      <ButtonM text="여름 쓰러 가기" onClick={() => navigate(`/write`)} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  height: 1940.7px;
  background-color: #ffffff;
  border: 1px solid #000000;

  h1 {
    margin-top: 98px;
    font-family: "DungGeunMo";
    font-weight: 500;
    color: #377bc5;
    font-size: 31.03px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 100px;

  svg {
    position: absolute;
    top: 46px;
    right: -20px;
  }
`;

const TextWrap = styled.div`
  margin: 100px 0;
  text-align: center;
  font-family: "S-CoreDream-5Medium";
  font-weight: 500;
  font-size: 14px;
  color: #000000;

  > span {
    font-family: "DungGeunMo";
    font-weight: 500;
    color: #0085ff;
  }
`;
