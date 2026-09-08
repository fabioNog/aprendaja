export interface ServiceCard {
  id: string
  title: string
  icon: string
  description?: string
  href?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  whatsapp: string
  interestArea: string
  message: string
}

export interface HeroProps {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}