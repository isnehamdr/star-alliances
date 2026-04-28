import React from 'react'
import Hero from '../components/Hero'
import AssociatedProjects from '../components/AssociatedProjects'
import Services from '../components/Services'
import About from '../components/About'
import Quadrant from '../components/Quadrant'
import Works from '../components/Works'
import Development from '../components/Development'
import TeamMembers from '../components/TeamMembers'


const Home = () => {
  return (
    <>
      <Hero/>
      <AssociatedProjects/>
      <Services/>
      <About/>
      <Quadrant/>
      <Works/>
      <Development/>
      <TeamMembers/>
  
    
    </>
  )
}

export default Home