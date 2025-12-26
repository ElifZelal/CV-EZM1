import { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Merhaba, Ben</span>
              <span className="name">Elif Zelal Müdüroğlu</span>
            </h1>
            <p className="hero-subtitle">Software Engineer</p>
            <p className="hero-description">
              Ural Federal University'den Software Engineering mezunu, modern web teknolojilerinde güçlü teknik becerilere 
              sahip ve öğrenmeye tutkulu bir geliştirici. React.js, TypeScript ve Zustand ile frontend geliştirme 
              deneyimim var. Java tabanlı backend sistemlerine artan ilgim ve ek sertifikalarımla, yazılım geliştirmeye 
              yapılandırılmış ve analitik bir yaklaşım getiriyorum.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'contact')}>
                İletişime Geç
              </a>
              <a href="#about" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'about')}>
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              {!imageError ? (
                <img 
                  src="/profile-photo.png" 
                  alt="Elif Zelal Müdüroğlu"
                  className="profile-photo"
                  onError={handleImageError}
                />
              ) : (
                <div className="profile-placeholder">
                  <div className="placeholder-icon">👤</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

