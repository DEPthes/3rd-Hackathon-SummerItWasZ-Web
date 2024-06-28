import React, { useEffect, useState } from "react";
import ShareKakao from "./ShareKakao";

type LinkType = {
  link: string;
};

const ShareKakaoBtn: React.FC<LinkType> = ({ link }) => {
  const [shareButton, setShareButton] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setShareButton(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div>{shareButton === true ? <ShareKakao link={link} /> : null}</div>;
};

export default ShareKakaoBtn;
