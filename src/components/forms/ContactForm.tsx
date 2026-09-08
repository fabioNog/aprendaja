'use client'

import { useState } from 'react'
import { contactConfig } from '@/lib/config/contact'
import type { ContactFormData } from '@/types'

const interestAreas = [
  'Tecnologia para terceira idade',
  'Matemática',
  'Programação',
  'Desenvolvimento Web',
  'Banco de Dados',
  'Outro'
]

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    whatsapp: '',
    interestArea: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Implementar envio para API NestJS no futuro
      // Por enquanto, apenas simulamos o envio
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', whatsapp: '', interestArea: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="(11) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="interestArea" className="block text-sm font-medium text-gray-700 mb-1">
          Área de interesse <span className="text-red-500">*</span>
        </label>
        <select
          id="interestArea"
          name="interestArea"
          required
          value={formData.interestArea}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Selecione uma área</option>
          {interestAreas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y"
          placeholder="Conte-me sobre o que você gostaria de aprender..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Ou fale diretamente pelo{' '}
        <a
          href={`https://wa.me/${contactConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}