import { ExperienceItem, EducationItem, SkillCategory, StatItem, CertificateItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    date: '01/2025 – 05/2025',
    title: 'Frontend Developer Intern',
    company: '',
    description: 'React.js ve TypeScript kullanarak platformun frontend özelliklerini geliştirdim. Zustand ile global state yönetimi yaptım ve styled-components ile responsive UI\'lar oluşturdum. Axios ile API entegrasyonları gerçekleştirdim ve form doğrulama sistemleri uyguladım. Mobil ve masaüstü cihazlarda responsive testler yürüttüm. Crawl4AI ile web scraping entegrasyonu yaptım, debugging ve dokümantasyon süreçlerine katkıda bulundum.',
    tags: ['React.js', 'TypeScript', 'Zustand', 'styled-components', 'Axios', 'Crawl4AI']
  }
]

export const educations: EducationItem[] = [
  {
    id: '1',
    icon: '🎓',
    degree: "Bachelor's Degree, Software Engineering",
    school: 'Ural Federal University',
    date: '09/2019 – 06/2025',
    description: 'Yekaterinburg, Russia - Yazılım mühendisliği alanında kapsamlı eğitim.'
  },
  {
    id: '2',
    icon: '📚',
    degree: 'Russian Language Preparatory Program',
    school: 'Ural Federal University',
    date: '11/2018 – 07/2019',
    description: 'Yekaterinburg, Russia - Rusça hazırlık programı.'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'styled-components', level: 85 },
      { name: 'React Router', level: 80 }
    ]
  },
  {
    title: 'Backend & Diğer',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Java', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'Unity', level: 70 },
      { name: 'RESTful API', level: 85 }
    ]
  },
  {
    title: 'Araçlar & Teknolojiler',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Zustand', level: 85 },
      { name: 'Web Scraping', level: 75 },
      { name: 'Responsive Testing', level: 90 },
      { name: 'Error Handling', level: 85 }
    ]
  }
]

export const stats: StatItem[] = [
  { number: '2025', label: 'Mezuniyet Yılı' },
  { number: 'Software', label: 'Engineering' }
]

export const contactInfo = {
  email: 'elifzelalmuduroglu@gmail.com',
  phone: '+905368327394',
  location: 'Türkiye / Yekaterinburg, Russia',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/elifzelalmuduroglu',
    github: 'http://github.com/ElifZelal'
  }
}

export const certificates: CertificateItem[] = [
  {
    id: '1',
    title: 'Fuel Cells and Their Roles in the Modern World',
    issuer: 'URFU',
    date: '02/2024'
  },
  {
    id: '2',
    title: 'Programming Fundamentals Training',
    issuer: 'Siliconmade Academy',
    date: '10/2023'
  },
  {
    id: '3',
    title: 'Java Internship',
    issuer: 'Ecodation',
    date: '06/2021'
  },
  {
    id: '4',
    title: 'Java Programming Honor Certificate',
    issuer: 'Ecodation',
    date: '06/2021'
  },
  {
    id: '5',
    title: 'Management Principles',
    issuer: 'ITMO University',
    date: '10/2023'
  },
  {
    id: '6',
    title: 'Operating System Mechanisms in Software Development',
    issuer: 'Coursera',
    date: '09/2021'
  },
  {
    id: '7',
    title: 'SAP ERP MM-SD Modules',
    issuer: 'Ecodation',
    date: '06/2021'
  },
  {
    id: '8',
    title: 'Web Programming',
    issuer: 'ITMO University',
    date: '02/2021'
  }
]

