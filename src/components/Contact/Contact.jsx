import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t.contact.form.success)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

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
                <p>noyzion3@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">☎</div>
              <div>
                <h3>{t.contact.phone}</h3>
                <p>050-1234567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>{t.contact.address}</h3>
                <p>{t.contact.addressValue}</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t.contact.form.phone}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

