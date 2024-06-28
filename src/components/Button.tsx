import styled from "styled-components";
import { ReactComponent as ButtonImg } from "../assets/images/ButtonImg.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: Props) => {
  return (
    <Container {...props}>
      <Text>{text}</Text>
      <ButtonImg className="icon" />
    </Container>
  );
};

export default Button;

const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  .icon {
    fill: #f0f8ff;
    stroke: #000000;
  }

  &:hover .icon {
    fill: #c6e3ff;
    stroke: #0085ff;
  }
`;

const Text = styled.div`
  position: absolute;
  text-align: center;
  font-family: "S-CoreDream-5Medium";
  font-size: 16px;
  color: #000000;
`;
