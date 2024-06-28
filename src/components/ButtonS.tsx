import styled from "styled-components";
import { ReactComponent as ButtonSImg } from "../assets/images/ButtonS.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  text: string;
}

const ButtonS = ({ image, text, ...props }: Props) => {
  return (
    <Container {...props}>
      <ImgText>
        <img src={image} alt={text} />
        <Text>{text}</Text>
      </ImgText>
      <ButtonSImg className="icon" />
    </Container>
  );
};

export default ButtonS;

const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;

  .icon {
    fill: #f0f8ff;
    stroke: #000000;
  }

  &:hover .icon {
    fill: #c6e3ff;
    stroke: #0085ff;
  }
`;

const ImgText = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

const Text = styled.div`
  text-align: center;
  font-family: "S-CoreDream-5Medium";
  font-size: 16px;
  color: #000000;
`;
