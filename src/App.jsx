import { useState } from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'
import DarkModeToggle from './component/DarkModeToggle'
import Skills from './component/Skills'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Home />
      <Skills />
       <About /> 
      <Contact />
      <Footer />
  </>
  )
}

export default App
