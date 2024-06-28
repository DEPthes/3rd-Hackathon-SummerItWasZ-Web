import React, { useEffect } from "react";
import ButtonS from "../ButtonS";
import KakaoBtn from "../../assets/images/KakaoBtn.png";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

type LinkType = {
  link: string;
};

const ShareKakao: React.FC<LinkType> = ({ link }) => {
  const url = link;

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  const ShareKakao = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "여름이었다ㅋ",
          description: "여름을 느껴보세요",
          imageUrl: "https://i.ibb.co/DG4hcpr/Group-48097390.png",
          link: {
            mobileWebUrl: "https://summer-it-was-z.netlify.app",
            webUrl: "https://summer-it-was-z.netlify.app",
          },
        },
        buttons: [
          {
            title: "친구의 여름을 느껴보세요",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <ButtonS
      id="kakao-link-btn"
      onClick={ShareKakao}
      image={KakaoBtn}
      text="공유하기"
    />
  );
};

export default ShareKakao;
