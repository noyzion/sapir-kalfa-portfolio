import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'
import './styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App

