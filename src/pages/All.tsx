import styled from "styled-components";
import { ReactComponent as BubbleImg } from "../assets/images/BubbleImg.svg";

const All = () => {
  const list = [
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    {
      title: "제목제목제목제목제목제목제목제목제목제목제목제목목",
      content:
        "본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문",
    },
    { title: "제목 3", content: "본문 3" },
  ];
  return (
    <Container>
      <h2>모두의 여름</h2>
      <p>
        사용자들은 어떤 여름을 보내고 있을까요?
        <br />
        각자의 여름을 공유하고 웃어봐요!
      </p>
      {list.map((data, index) => (
        <ListWrap key={index}>
          <h1>{data.title}</h1>
          <ContentDiv>
            <p>{data.content}</p>
            <BubbleImg />
          </ContentDiv>
        </ListWrap>
      ))}
    </Container>
  );
};

export default All;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;

  > h2 {
    font-family: "S-CoreDream-5Medium";
    font-size: 14px;
    color: #000000;
    padding-bottom: 12px;
  }

  > p {
    text-align: center;
    font-family: "S-CoreDream-3Light";
    font-size: 12px;
    color: #000000;
    padding-bottom: 24px;
  }
`;

const ListWrap = styled.div`
  box-sizing: border-box;
  width: 358px;
  height: 97.18px;
  margin-bottom: 9px;

  background: #ffffff;
  border: 0.8px solid #000000;
  border-radius: 3px;

  > h1 {
    font-family: "S-CoreDream-6Boldh";
    font-size: 14px;
    color: #000000;
    width: 306px;
    padding: 6px 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 4px 6px 12px 12px;

  > svg {
    margin-top: 5px;
  }

  > p {
    font-family: "S-CoreDream-3Light";
    font-size: 12px;
    color: #000000;
    width: 242px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
