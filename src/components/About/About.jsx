import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-text">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>
          <div className="about-skills">
            <div className="skill-item">
              <h3>{t.about.skill1.title}</h3>
              <p>{t.about.skill1.desc}</p>
            </div>
            <div className="skill-item">
              <h3>{t.about.skill2.title}</h3>
              <p>{t.about.skill2.desc}</p>
            </div>
            <div className="skill-item">
              <h3>{t.about.skill3.title}</h3>
              <p>{t.about.skill3.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

