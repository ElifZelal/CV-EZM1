import { useState } from 'react'
import { contactInfo } from '../data/data'
import { N8N_WEBHOOK_URL } from '../config/config'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!N8N_WEBHOOK_URL) {
      setSubmitStatus('error')
      setErrorMessage('Webhook URL yapılandırılmamış. Lütfen .env dosyasına VITE_N8N_WEBHOOK_URL ekleyin.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json().catch(() => ({}))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // 3 saniye sonra success mesajını kaldır
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              Projeleriniz için benimle iletişime geçmek isterseniz, aşağıdaki bilgilerden bana ulaşabilirsiniz.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Telefon</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Konum</h4>
                  <p>{contactInfo.location}</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href={contactInfo.socialLinks.linkedin} className="social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={contactInfo.socialLinks.github} className="social-link" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Konu"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder="Mesajınız"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-message form-success">
                ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message form-error">
                ❌ {errorMessage || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

