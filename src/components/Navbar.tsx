import { useState, useEffect } from 'react'
import './Navbar.css'

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">EZM</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Ana Sayfa
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              Hakkımda
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'experience')}
            >
              Deneyim
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'education')}
            >
              Eğitim
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Beceriler
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'certificates')}
            >
              Sertifikalar
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              İletişim
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

