import LinkBtn from "../../assets/images/LinkBtn.png";
import ButtonS from "../ButtonS";

const ShareLinkBtn = ({ link }) => {
  const ClipBoard = () => {
    const url = link;

    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다");
    });
  };

  return <ButtonS image={LinkBtn} text="링크 복사" onClick={ClipBoard} />;
};
export default ShareLinkBtn;
