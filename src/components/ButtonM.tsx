import styled from "styled-components";
import { ReactComponent as ButtonMImg } from "../assets/images/ButtonM.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

const ButtonM = ({ text, disabled, ...props }: Props) => {
  return (
    <Container disabled={disabled === undefined ? false : disabled} {...props}>
      <Text disabled={disabled === undefined ? false : disabled}>{text}</Text>
      <ButtonMImg className="icon" />
    </Container>
  );
};

export default ButtonM;

const Container = styled.button<{ disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;

  .icon {
    fill: ${(props) => (props.disabled ? "#E2E2E2" : "#ffffff")};
    stroke: ${(props) => (props.disabled ? "#A0A0A0" : "#000000")};
  }

  &:hover .icon {
    fill: ${(props) => (props.disabled ? "#E2E2E2" : "#c6e3ff")};
    stroke: ${(props) => (props.disabled ? "#A0A0A0" : "#0085ff")};
  }
`;

const Text = styled.div<{ disabled: boolean }>`
  position: absolute;
  text-align: center;
  font-family: "S-CoreDream-5Medium";
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#A0A0A0" : "#000000")};
`;
