import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Quadrant from './components/Quadrant'
import Development from './components/Development'
import About from './components/About'
import AssociatedProjects from './components/AssociatedProjects'
import TeamMembers from './components/TeamMembers'
import Footer from './components/Footer'
import ScrolltoTop from './components/ScrolltoTop'
import Works from './components/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden max-w-full">
      <Navbar/>
      <ScrolltoTop/>
      <Hero/>
      <AssociatedProjects/>
      <Services/>
      <About/>
      <Quadrant/>
      
      <Works/>
      <Development/>
      <TeamMembers/>
      <Footer/>
    </div>
  )
}

export default App
