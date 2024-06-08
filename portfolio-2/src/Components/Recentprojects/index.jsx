import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  min-height: 75vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1.2em;
    color: #666;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  width: 320px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8em;
  margin: 20px 0 10px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #555;
  padding: 0 20px 20px;
  flex-grow: 1;
  color: #333;
`;

function RecentProjects() {
  return (
    <Container>
      <Header>
        <h1>My Recent Projects</h1>
        <p>Here are some of the projects I have worked on recently.</p>
      </Header>
      <ProjectsContainer>
        <StyledLink to="https://github.com/Noroff-Anders/Semester-project-2">
          <ProjectCard>
            <ProjectImage
              src={require("../../Assets/ProjectImages/pngauctionzone.png")}
              alt="Auction Zone Project"
            />
            <ProjectTitle>AuctionZone</ProjectTitle>
            <ProjectDescription>
              An auction site where users can list items for sale and bid on
              items they may want to buy.
            </ProjectDescription>
          </ProjectCard>
        </StyledLink>
        <StyledLink to="https://github.com/Noroff-Anders/JavaScript-Frameworks---Course-Assignment">
          <ProjectCard>
            <ProjectImage
              src={require("../../Assets/ProjectImages/thewebshop.jpg")}
              alt="The Webshop"
            />
            <ProjectTitle>The Webshop</ProjectTitle>
            <ProjectDescription>
              A shopping site where users can browse products, add them to the
              shopping cart, and buy them. Users can also leave reviews on
              products.
            </ProjectDescription>
          </ProjectCard>
        </StyledLink>
        <StyledLink to="https://github.com/Noroff-Anders/Project-Exam-2">
          <ProjectCard>
            <ProjectImage
              src={require("../../Assets/ProjectImages/holidaze.jpg")}
              alt="Holidaze"
            />
            <ProjectTitle>Holidaze</ProjectTitle>
            <ProjectDescription>
              A hotel booking site where users can search for hotels, view
              details and book a room at any venue. Users can also register as a
              venue manager for creating venues.
            </ProjectDescription>
          </ProjectCard>
        </StyledLink>
      </ProjectsContainer>
    </Container>
  );
}

export default RecentProjects;
