import { skillCategories } from '../data/data'
import './About.css'

const About = () => {
  // Tüm becerileri tek bir listede topla
  const allSkills = skillCategories.flatMap(category => category.skills)

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Ural Federal University'den Software Engineering mezunu bir geliştiriciyim. Modern web teknolojilerinde 
              güçlü teknik becerilere sahibim ve öğrenmeye tutkulu bir yaklaşım sergiliyorum. React.js, TypeScript ve 
              Zustand ile frontend geliştirme konusunda pratik deneyime sahibim.
            </p>
            <p>
              Java tabanlı backend sistemlerine artan ilgim ve ek sertifikalarımla, yazılım geliştirmeye yapılandırılmış 
              ve analitik bir yaklaşım getiriyorum. Takım çalışmasına değer veriyorum, detaylara dikkat ediyorum ve temiz, 
              fonksiyonel çözümler sunmayı hedefliyorum.
            </p>
            <div className="about-skills">
              <h3 className="skills-title">Yetkinlikler</h3>
              <div className="skills-list">
                {allSkills.map((skill, index) => (
                  <div key={index} className="skill-badge">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

