import styled from "styled-components";
import { ReactComponent as BubbleImg } from "../assets/images/BubbleImg.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type Result = {
  id: number;
  title: string;
  content: string;
  code: string;
};

const All = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<Result[]>([]);

  useEffect(() => {
    retrieveAllData();
  }, []);

  const retrieveAllData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/diary/retrieveAll`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setResult(res.data.information);
      })
      .catch((error) => {
        console.error("Error message:", error);
      });
  };

  const resultData = ({ id, code }: { id: number; code: string }) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/diary/${id}/${code}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigate(`/all/${id}/${code}`, {
          state: {
            id: id,
            code: code,
            data: res.data.information,
          },
        });
      })
      .catch((error) => {
        console.error("Error message:", error);
      });
  };

  return (
    <Container>
      <h2>모두의 여름</h2>
      <p>
        사용자들은 어떤 여름을 보내고 있을까요?
        <br />
        각자의 여름을 공유하고 웃어봐요!
      </p>
      {result.map((data) => (
        <ListWrap
          key={data.id}
          onClick={() => {
            resultData({
              id: data.id,
              code: data.code,
            });
          }}
        >
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
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    padding-bottom: 12px;
  }

  > p {
    text-align: center;
    font-family: "S-CoreDream-3Light";
    font-weight: 300;
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
  cursor: pointer;

  background: #ffffff;
  border: 0.8px solid #000000;
  border-radius: 3px;

  > h1 {
    font-family: "S-CoreDream-6Bold";
    font-weight: 600;
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
    font-weight: 300;
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
