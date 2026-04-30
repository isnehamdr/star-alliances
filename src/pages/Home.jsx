import React from 'react'
import Hero from '../components/Hero'
import AssociatedProjects from '../components/AssociatedProjects'
import About from '../components/About'
import Quadrant from '../components/Quadrant'
import Works from '../components/Works'
import Development from '../components/Development'
import TeamMembers from '../components/TeamMembers'
// import Testimonials from '../components/Testimonials'
import Servicesection from '../components/Servicesection'


const Home = () => {
  return (
    <>
      <Hero/>
      <AssociatedProjects/>
      <Servicesection/>
      <About/>
      <Quadrant/>
      <Works/>
      <Development/>
      {/* <Testimonials/> */}
      <TeamMembers/>
  
    
    </>
  )
}

export default Home