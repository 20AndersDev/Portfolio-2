import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  min-height: 5vh;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
`;

const SubHeader = styled.h2`
  font-size: 1.8em;
  margin-bottom: 30px;
  color: #666;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #555;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0073b1; /* LinkedIn color */
    color: #fff;
  }
`;

const Icon = styled.div`
  font-size: 1.5em;
`;

function Contact() {
  return (
    <Container>
      <Header>Contact Me</Header>
      <SubHeader>Feel free to reach out to me through:</SubHeader>
      <ContactLinks>
        <LinkWrapper
          href="https://github.com/Noroff-Anders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaGithub />
          </Icon>
          GitHub
        </LinkWrapper>
        <LinkWrapper
          href="https://www.linkedin.com/in/anders-nes-75557a168/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaLinkedin />
          </Icon>
          LinkedIn
        </LinkWrapper>
        <LinkWrapper href="mailto:anders.nes98@gmail.com">
          <Icon>
            <MdOutlineEmail />
          </Icon>
          E-Mail
        </LinkWrapper>
      </ContactLinks>
    </Container>
  );
}

export default Contact;
