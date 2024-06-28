import styled from "styled-components";
import { ReactComponent as Letter1 } from "../assets/images/Letter1.svg";
import { ReactComponent as Letter2 } from "../assets/images/Letter2.svg";
import { ReactComponent as Letter3 } from "../assets/images/Letter3.svg";
import { ReactComponent as Letter4 } from "../assets/images/Letter4.svg";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();

  return (
    <Container>
      <LetterWrap>
        <LetterContent>
          <div
            className="title"
            style={{
              textAlign:
                location.state.data.diaryFrame === 2 ? "right" : "center",
            }}
          >
            {location.state.data.title}
          </div>
          <div className="date">{location.state.data.diaryDate}</div>
          <div className="name">{location.state.data.nickname}</div>
          <div
            className="content"
            style={{
              paddingLeft:
                location.state.data.diaryFrame === 2 ? 85 : undefined,
              textAlign:
                location.state.data.diaryFrame === 2 ||
                location.state.data.diaryFrame === 3
                  ? "right"
                  : undefined,
            }}
          >
            {location.state.data.content}
          </div>
        </LetterContent>
        {location.state.data.diaryFrame === 1 ? (
          <Letter1 />
        ) : location.state.data.diaryFrame === 2 ? (
          <Letter2 />
        ) : location.state.data.diaryFrame === 3 ? (
          <Letter3 />
        ) : (
          <Letter4 />
        )}
      </LetterWrap>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;
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
