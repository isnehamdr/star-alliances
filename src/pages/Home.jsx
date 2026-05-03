
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import AssociatedProjects from "../components/AssociatedProjects";
import Servicesection from "../components/Servicesection";
import About from "../components/About";
import Quadrant from "../components/Quadrant";
import Works from "../components/Works";
import Development from "../components/Development";
import TeamMembers from "../components/TeamMembers";

const Home = () => {
  return (
    <>
 <SEO
        title="Hospitality Consulting Nepal | Expert Hotel Development "
        description="Expert hotel development and operations management consulting in Nepal. Strategic advisory services for hotels, resorts, and hospitality businesses."
      />

      <Hero/>
      <AssociatedProjects/>
      <Servicesection/>
      <About/>
      <Quadrant/>
      <Works/>
      <Development/>
      <TeamMembers/>
    </>
  );
};

export default Home;