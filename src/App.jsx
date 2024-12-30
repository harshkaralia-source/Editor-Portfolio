import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
      <div className='bg-[#25394F] font-poppins text-slate-200'>
        <div className="max-w-7xl mx-auto p-3">
          <Navbar />
          <Home />
          <Work />
          <About />
        </div>
        <Contact />
        <Footer />
      </div>
  )
}

export default App
