import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrolltoTop from './components/ScrolltoTop'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrolltoTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App