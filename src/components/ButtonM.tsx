import styled from "styled-components";
import { ReactComponent as ButtonMImg } from "../assets/images/ButtonM.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonM = ({ text, ...props }: Props) => {
  return (
    <Container {...props}>
      <Text>{text}</Text>
      <ButtonMImg className="icon" />
    </Container>
  );
};

export default ButtonM;

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

const Text = styled.div`
  position: absolute;
  text-align: center;
  font-family: "S-CoreDream-5Medium";
  font-size: 16px;
  color: #000000;
`;
