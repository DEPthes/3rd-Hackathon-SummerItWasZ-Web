import styled, { keyframes } from "styled-components";
import ButtonM from "../../components/ButtonM";
import { useEffect, useState } from "react";
import { ReactComponent as CheckedImg } from "../../assets/images/CheckImg.svg";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { pageState, resultState } from "../../assets/recoil/recoil";
import Loading from "../../assets/images/Loading.png";
import axios from "axios";

const Write = () => {
  const setPage = useSetRecoilState(pageState);
  const [result, setResult] = useRecoilState(resultState);
  const [nickname, setNickName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const MAX_LENGTH_NICKNAME = 10; //닉네임 글자수 제한
  const MAX_LENGTH_TITLE = 40; //제목 글자수 제한
  const MAX_LENGTH_CONTENT = 300; //내용 글자수 제한

  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  //닉네임 글자수 제한 & 제목 저장
  const onInputNickNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > MAX_LENGTH_NICKNAME) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH_NICKNAME);
    }
    const target = event.target.value;
    setNickName(target);
  };

  //제목 글자수 제한 & 제목 저장
  const onInputTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_LENGTH_TITLE) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH_TITLE);
    }
    const target = event.target.value;
    setTitle(target);
  };

  //내용 글자수 계산 & 내용 저장
  const onTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > MAX_LENGTH_CONTENT) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH_CONTENT);
    }
    const target = event.target.value;
    setContent(target);
  };

  const changeGpt = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("content", content);

    axios
      .post(`${process.env.REACT_APP_API_URL}/diary/changeGpt`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setPage(1);
        setResult({
          ...result,
          nickname: nickname,
          title: title,
          date: date,
          checked: checked,
          content: content,
          changegpt: res.data,
        });
      })
      .catch((error) => {
        console.error("Error message:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      {isLoading && (
        <Overlay>
          <Spinner src={Loading} alt="Loading..." className="spinner" />
        </Overlay>
      )}
      <h2>여름 작성하기</h2>
      <input
        className="nickname"
        type="text"
        placeholder="닉네임을 설정해주세요. (최대 10자)"
        minLength={1}
        maxLength={MAX_LENGTH_NICKNAME}
        value={nickname}
        spellCheck={false}
        onChange={onInputNickNameHandler}
      />
      <input
        className="title"
        type="text"
        placeholder="당신의 여름에 제목을 지어주세요. (최대 40자)"
        minLength={1}
        maxLength={MAX_LENGTH_TITLE}
        value={title}
        spellCheck={false}
        onChange={onInputTitleHandler}
      />
      <LetterWrap>
        <input
          className="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <CheckBoxWrap>
          <CheckBoxLabel>비공개 여부</CheckBoxLabel>
          <CheckBox onClick={() => setChecked(!checked)}>
            {checked && <CheckedImg />}
          </CheckBox>
        </CheckBoxWrap>
      </LetterWrap>
      <TextareaWrap>
        <textarea
          placeholder="당신의 여름을 기록해주세요."
          minLength={1}
          maxLength={MAX_LENGTH_CONTENT}
          onInput={onTextareaHandler}
          value={content}
          spellCheck={false}
        />
        <span>{content.length}/300</span>
      </TextareaWrap>
      <ButtonWrap>
        <ButtonM text="이전" onClick={onClickBtn} />
        <ButtonM
          text="다음"
          disabled={title === "" || content === "" || nickname === ""}
          onClick={changeGpt}
        />
      </ButtonWrap>
    </Container>
  );
};

export default Write;

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
    padding-bottom: 24px;
  }

  input,
  textarea {
    outline: none;
  }

  > input {
    box-sizing: border-box;
    width: 358px;
    border: 1px solid #000000;
    border-radius: 5px;
    background: #ffffff;
    padding: 20px 12px;
    font-size: 14px;
    color: #000000;

    margin-bottom: 12px;
  }

  .nickname {
    font-family: "S-CoreDream-3Light";
    font-weight: 300;

    &::placeholder {
      color: #737373;
    }
  }

  .title {
    font-family: "S-CoreDream-5Medium";
    font-weight: 500;

    &::placeholder {
      font-family: "S-CoreDream-5Medium";
      font-weight: 500;
      color: #737373;
    }
  }
`;

const TextareaWrap = styled.div`
  position: relative;
  width: 358px;
  margin-top: 12px;

  > span {
    font-family: "S-CoreDream-3Light";
    font-weight: 300;
    font-size: 14px;
    color: #737373;
    position: absolute;
    bottom: 16px;
    left: 12px;
  }

  > textarea {
    margin-top: 12px;
    box-sizing: border-box;
    width: 358px;
    height: 553.58px;
    border: 1px solid #000000;
    border-radius: 5px;
    background: #ffffff;
    padding: 16px 12px;
    font-family: "S-CoreDream-4Regular";
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    resize: none;

    &::placeholder {
      color: #737373;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 16px;
`;

const LetterWrap = styled.div`
  width: 358px;
  display: flex;
  justify-content: space-between;

  .date {
    font-family: "S-CoreDream-4Regular";
    font-weight: 400;
    font-size: 10px;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 3px;
    padding: 2px 6px 2px 12px;
    background-color: transparent;
  }
`;

const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CheckBoxLabel = styled.div`
  font-family: "S-CoreDream-4Regular";
  font-weight: 400;
  font-size: 10px;
  color: #666666;
`;

const CheckBox = styled.div`
  width: 23px;
  height: 23px;
  border: 1px solid #666666;
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.img`
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;
