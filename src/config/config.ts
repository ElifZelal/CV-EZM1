// n8n Webhook Configuration
// n8n webhook URL'inizi buraya ekleyin
// Örnek: https://your-n8n-instance.com/webhook/contact-form

export const N8N_WEBHOOK_URL = (import.meta.env?.VITE_N8N_WEBHOOK_URL as string) || ''

// Alternatif olarak doğrudan URL buraya yazılabilir:
// export const N8N_WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/contact-form'

