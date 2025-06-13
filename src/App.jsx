import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'



import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Policies from './components/Policies'

import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home'>

      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Contact />
      <Footer />
      <Policies />
    
    </div>
  )
}

export default App
