export const contactConfig = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999',
  email: process.env.NEXT_PUBLIC_EMAIL || 'professor@email.com',
  phone: '(11) 99999-9999',
  socialMedia: {
    instagram: 'https://instagram.com/professor',
    linkedin: 'https://linkedin.com/in/professor',
    youtube: 'https://youtube.com/@professor'
  }
} as const