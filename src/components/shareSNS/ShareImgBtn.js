import html2canvas from "html2canvas";
import ImgBtn from "../../assets/images/ImgBtn.svg";
import ButtonS from "../ButtonS";

const ShareImgBtn = () => {
  const onCapture = () => {
    html2canvas(document.getElementById("image"), {
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#f0f8ff",
    })
      .then((canvas) => {
        onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
      })
      .catch(() => {
        console.log("error");
      });
  };

  const onSaveAs = (url, filename) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return <ButtonS image={ImgBtn} text="이미지 저장" onClick={onCapture} />;
};
export default ShareImgBtn;
