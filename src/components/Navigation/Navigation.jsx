import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Navigation.css'

function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} dir="ltr">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          {t.hero.name}
        </div>
        <div className="nav-right">
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>{t.nav.about}</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>{t.nav.projects}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>{t.nav.contact}</a>
          </div>
          <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'he' ? 'EN' : 'עב'}
          </button>
        </div>
        <button 
          className="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="תפריט"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

