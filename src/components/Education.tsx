import { educations } from '../data/data'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Eğitim</h2>
        <div className="education-grid">
          {educations.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-school">{edu.school}</h4>
              <div className="education-date">{edu.date}</div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

