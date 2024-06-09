import React from "react";
import styled from "styled-components";
import video from "../../Assets/HomepageBackground/portfolio-background.mp4";

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 70vh;
  object-fit: cover;
  transform: translateX(-50%);
  z-index: -1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

function HomePageBackground() {
  return (
    <div>
      <Wrapper>
        <Content>
          <Title>Welcome to My Portfolio</Title>
          <Name>Anders Nes</Name>
          <Subtitle>Frontend Developer</Subtitle>
        </Content>
        <VideoBackground autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
      </Wrapper>
    </div>
  );
}

export default HomePageBackground;
