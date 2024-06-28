import styled from "styled-components";
import ButtonM from "../../components/ButtonM";
import { useState } from "react";
import { ReactComponent as Letter1 } from "../../assets/images/Letter1.svg";
import { ReactComponent as Letter2 } from "../../assets/images/Letter2.svg";
import { ReactComponent as Letter3 } from "../../assets/images/Letter3.svg";
import { ReactComponent as Letter4 } from "../../assets/images/Letter4.svg";
import { ReactComponent as LeftArrow } from "../../assets/images/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/images/RightArrow.svg";
import { useSetRecoilState, useRecoilState } from "recoil";
import { pageState, resultState } from "../../assets/recoil/recoil";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const navigate = useNavigate();
  const setPage = useSetRecoilState(pageState);
  const [result, setResult] = useRecoilState(resultState);
  const chatgpt = "받아온 데이터";

  const [letter, setLetter] = useState(1);

  return (
    <Container>
      <h2>일기장을 선택하세요.</h2>
      <SelectWrap>
        <LeftArrow
          onClick={() => {
            if (letter > 1) {
              setLetter(letter - 1);
            }
          }}
        />
        <CircleWrap>
          <Circle $select={letter === 1}></Circle>
          <Circle $select={letter === 2}></Circle>
          <Circle $select={letter === 3}></Circle>
          <Circle $select={letter === 4}></Circle>
        </CircleWrap>
        <RightArrow
          onClick={() => {
            if (letter < 4) {
              setLetter(letter + 1);
            }
          }}
        />
      </SelectWrap>
      <LetterWrap>
        <LetterContent>
          <div
            className="title"
            style={{ textAlign: letter === 2 ? "right" : "center" }}
          >
            {result.title}
          </div>
          <div className="date">{result.date}</div>
          <div className="name">{result.nickname}</div>
          <div
            className="content"
            style={{
              paddingLeft: letter === 2 ? 85 : undefined,
              textAlign: letter === 2 || letter === 3 ? "right" : undefined,
            }}
          >
            {chatgpt}
          </div>
        </LetterContent>
        {letter === 1 ? (
          <Letter1 />
        ) : letter === 2 ? (
          <Letter2 />
        ) : letter === 3 ? (
          <Letter3 />
        ) : (
          <Letter4 />
        )}
      </LetterWrap>
      <ButtonWrap>
        <ButtonM text="이전" onClick={() => setPage(0)} />
        <ButtonM
          text="작성 완료"
          onClick={() => {
            //서버에 데이터 보내고 성공하면 아래 실행
            navigate(`/result`);
            setResult({
              nickname: "",
              title: "",
              date: "",
              checked: false,
              content: "",
            });
            setPage(0);
          }}
        />
      </ButtonWrap>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;

  > h2 {
    font-family: "S-CoreDream-5Medium";
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    padding-bottom: 12px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 16px;
`;

const SelectWrap = styled.div`
  display: flex;
  gap: 100px;
  padding: 7px;
`;

const CircleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4.87px;
`;

const Circle = styled.div<{ $select: boolean }>`
  width: 5.56px;
  height: 5.56px;
  border-radius: 100%;
  background-color: ${(props) => (props.$select ? "#0085FF" : "#b4d4f1")};
`;

const LetterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 358px;
`;

const LetterContent = styled.div`
  position: absolute;
  padding: 12px;

  .title {
    padding-bottom: 12px;
    font-family: S-CoreDream-6Bold;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }

  .date {
    text-align: right;
    font-family: S-CoreDream-4Regular;
    font-size: 10px;
    line-height: 150%;
    color: #000000;
  }

  .name {
    text-align: right;
    font-family: S-CoreDream-4Regular;
    font-size: 10px;
    line-height: 150%;
    color: #0085ff;
    padding-bottom: 12px;
  }

  .content {
    padding-top: 12px;
    font-family: S-CoreDream-4Regular;
    font-size: 12px;
    color: #000000;
  }
`;
