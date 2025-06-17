import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Policies from './components/Policies'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <div className='home'>
        <ScrollToTop />
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