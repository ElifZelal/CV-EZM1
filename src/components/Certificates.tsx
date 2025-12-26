import { certificates } from '../data/data'
import './Certificates.css'

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title">Sertifikalar</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-icon">🏆</div>
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-issuer">{cert.issuer}</div>
              <div className="certificate-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates

