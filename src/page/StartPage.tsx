import React from "react";
import styled from "styled-components";

const StartPage = () => {
  return (
    <Container>
      <div>Hi</div>
    </Container>
  );
};

export default StartPage;

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
