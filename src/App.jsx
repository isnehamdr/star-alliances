import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrolltoTop from './components/ScrolltoTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrolltoTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* Add a 404 Not Found route for unmatched paths */}
    
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App