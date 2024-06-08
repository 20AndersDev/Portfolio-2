import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-top: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  z-index: 1;
`;

const AboutTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  max-width: 500px;
`;

function Aboutme() {
  return (
    <Container>
      <AboutTitle>About Me</AboutTitle>
      <Paragraph>
        I am a passionate frontend developer dedicated to crafting beautiful and
        functional websites. With experience in HTML, CSS, JavaScript, and
        React, I continuously seek opportunities to learn and enhance my skills.
        My ultimate goal is to evolve into a full stack developer.
      </Paragraph>
    </Container>
  );
}

export default Aboutme;
