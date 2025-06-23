import { useState } from 'react'
import Hero from './component/Hero'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'
import DarkModeToggle from './component/DarkModeToggle'

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
      {/* Dark Mode Button */}
      <DarkModeToggle />

      {/* Main Sections */}
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App
