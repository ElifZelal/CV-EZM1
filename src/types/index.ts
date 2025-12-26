export interface ExperienceItem {
  id: string
  date: string
  title: string
  company: string
  description: string
  tags: string[]
}

export interface EducationItem {
  id: string
  icon: string
  degree: string
  school: string
  date: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export interface StatItem {
  number: string
  label: string
}

export interface CertificateItem {
  id: string
  title: string
  issuer: string
  date: string
}

