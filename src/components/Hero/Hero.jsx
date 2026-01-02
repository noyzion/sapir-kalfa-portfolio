import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">{t.hero.name}</span>
          <span className="hero-subtitle">{t.hero.subtitle}</span>
        </h1>
        <p className="hero-description">
          {t.hero.description}
        </p>
        <button className="hero-button" onClick={scrollToProjects}>
          {t.hero.button}
        </button>
        <div className="hero-side-text">{t.hero.subtitle}</div>
      </div>
    </section>
  )
}

export default Hero

