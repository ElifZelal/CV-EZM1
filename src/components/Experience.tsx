import { experiences } from '../data/data'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Deneyim</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                {exp.company && <h4 className="timeline-company">{exp.company}</h4>}
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-tags">
                  {exp.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

