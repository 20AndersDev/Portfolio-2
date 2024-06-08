import HomePageBackground from "../../Components/HomePageBackground";
import Aboutme from "../../Components/Aboutme";
import Recentprojects from "../../Components/Recentprojects";
import Contact from "../../Components/Contact";

function Homecomponent() {
  return (
    <div>
      <HomePageBackground />
      <Aboutme />
      <Recentprojects />
      <Contact />
    </div>
  );
}

export default Homecomponent;
