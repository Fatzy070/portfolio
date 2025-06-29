import { useState } from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'
import DarkModeToggle from './component/DarkModeToggle'
import Skills from './component/Skills'

function App() {
  return (
    <>
      <Home />
      <Skills />
      {/* <About />
      <Project />
      <Contact /> */}
  </>
  )
}

export default App
