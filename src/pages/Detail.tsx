import styled from "styled-components";
import { ReactComponent as Letter1 } from "../assets/images/Letter1.svg";
import { ReactComponent as Letter2 } from "../assets/images/Letter2.svg";
import { ReactComponent as Letter3 } from "../assets/images/Letter3.svg";
import { ReactComponent as Letter4 } from "../assets/images/Letter4.svg";

const Detail = () => {
  var letter = 1;

  return (
    <Container>
      <LetterWrap>
        <LetterContent>
          <div
            className="title"
            style={{ textAlign: letter === 2 ? "right" : "center" }}
          >
            리ㅏ일아리아링라일아리아리아링라ㅣㅇㄹ라이
            ㅇ리아리알이링ㄹ아ㅣ라일아ㅣ라링ㄹ아ㅣ랑ㄴㅇㄴㅇㄴㅇㄴㄴㅌ
          </div>
          <div className="date">2024.06.29</div>
          <div className="name">강두기</div>
          <div
            className="content"
            style={{
              paddingLeft: letter === 2 ? 85 : undefined,
              textAlign: letter === 2 || letter === 3 ? "right" : undefined,
            }}
          >
            오늘 날씨가 너무 더워서 버스를 놓쳤다. 버스가 그냥 내 앞에서
            떠나버렸고, 그로 인해 회의에 지각하게 되어 정말 화가 나 있었다.
            그런데 길거리를 걷다 보니, 땀에 젖은 셔츠가 마치 나의 특별한 여름
            스타일인 것처럼 느껴졌다. 마치 패션쇼의 런웨이에 서 있는 느낌이랄까?
            도심의 뜨거운 열기는 마치 나를 위해 특별히 준비된 오븐 같았다.
            버스를 놓친 게 정말 신의 한 수였나 싶었다. 그 길 위에서의 산책은
            자연스럽게 내 몸을 지글지글 구워주는, 어느 여름의 ‘스파’처럼
            느껴졌다. 회의장에 도착했을 때, 모두가 나의 땀 범벅인 모습을 보고
            웃었다. 그들의 웃음 속에서 나는 오히려 감사한 마음이 들었다. 덕분에
            회의는 조금 더 유쾌하고 편안하게 진행됐다. 나의 지각은 어쩌면 불운이
            아닌, ‘여름의 특유의 에너지’를 선사한 축복이었을지도 모른다. 그 모든
            것이 종료되면서, 나는 생각했다. 그것이 여름이었다.
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
