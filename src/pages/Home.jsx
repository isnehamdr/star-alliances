// import React from 'react'
// import Hero from '../components/Hero'
// import AssociatedProjects from '../components/AssociatedProjects'
// import About from '../components/About'
// import Quadrant from '../components/Quadrant'
// import Works from '../components/Works'
// import Development from '../components/Development'
// import TeamMembers from '../components/TeamMembers'
// import Servicesection from '../components/Servicesection'




// const Home = () => {
//   return (
//     <>
//       <Hero/>
//       <AssociatedProjects/>
//       <Servicesection/>
//       <About/>
//       <Quadrant/>
//       <Works/>
//       <Development/>
  
//       <TeamMembers/>
  
    
//     </>
//   )
// }

// export default Home


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
        title="Star Alliance Hospitality | Best Hospitality Consulting in Nepal"
        description="We provide hospitality consulting, advisory, and development services for hotels and resorts in Nepal."
        url="https://staralliance.com.np/"
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