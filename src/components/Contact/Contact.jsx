import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title contact-title">{t.contact.title}</h2>
        <p className="section-subtitle contact-subtitle">
          {t.contact.subtitle}
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">✉</div>
              <div>
                <h3>{t.contact.email}</h3>
                <a href="mailto:noyzion3@gmail.com">noyzion3@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">☎</div>
              <div>
                <h3>{t.contact.phone}</h3>
                <a href="tel:0501234567">050-1234567</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

