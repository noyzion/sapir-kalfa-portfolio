import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Projects.css'

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title projects-title">{t.projects.title}</h2>
        <p className="section-subtitle">
          {t.projects.subtitle}
        </p>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="placeholder-icon">🏗️</span>
                </div>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

