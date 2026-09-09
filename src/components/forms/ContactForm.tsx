'use client'

import { useState } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { contactConfig } from '@/lib/config/contact'
import type { ContactFormData } from '@/types'
import { sendContactMessage } from '@/lib/api/contact'
import { PhoneInput } from '@/components/ui/PhoneInput'
import { EmailInput } from '@/components/ui/EmailInput'

const interestAreas = [
  'Tecnologia para terceira idade',
  'Matemática',
  'Programação',
  'Desenvolvimento Web',
  'Banco de Dados',
  'Outro'
]

function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    whatsapp: '',
    interestArea: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setValidationErrors([])
  }

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, whatsapp: value }))
    setValidationErrors([])
  }

  const handleEmailChange = (value: string) => {
    setFormData(prev => ({ ...prev, email: value }))
    setValidationErrors([])
  }

  const validateForm = (): string[] => {
    const errors: string[] = []

    if (!formData.name || formData.name.trim().length < 3) {
      errors.push('Nome deve ter pelo menos 3 caracteres')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.push('Digite um e-mail válido (ex: nome@email.com)')
    }

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
    if (formData.whatsapp && !phoneRegex.test(formData.whatsapp)) {
      errors.push('Telefone deve estar no formato (XX) XXXXX-XXXX')
    }

    if (!formData.interestArea) {
      errors.push('Selecione uma área de interesse')
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres')
    }

    return errors
  }

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (errors.length > 0) {
      setValidationErrors(errors)
      setSubmitStatus('error')
      return
    }

    if (!executeRecaptcha) {
      setValidationErrors(['Aguarde o carregamento do sistema de segurança e tente novamente.'])
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setValidationErrors([])

    try {
      const token = await executeRecaptcha('contact_form')

      const payload = {
        ...formData,
        recaptchaToken: token
      }

      console.log('🚀 Enviando formulário com token reCAPTCHA...', payload)

      const result = await sendContactMessage(payload)
      console.log('Resposta do servidor:', result)

      // 🛑 VALIDAÇÃO: Verifica se o backend retornou success: false
      if (result && result.success === false) {
        const backendErrors = result.errors && result.errors.length > 0 
          ? result.errors 
          : [result.message || 'Erro ao validar reCAPTCHA. Tente novamente.']
        
        setValidationErrors(backendErrors)
        setSubmitStatus('error')
        return
      }

      // ✅ Sucesso real
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        interestArea: '',
        message: ''
      })
    } catch (error: unknown) {
      console.error('❌ Erro:', error)
      
      if (error && typeof error === 'object' && 'response' in error) {
        const errorResponse = error as { response: { data: { message: string | string[] } } }
        if (errorResponse.response?.data?.message) {
          const backendErrors = Array.isArray(errorResponse.response.data.message) 
            ? errorResponse.response.data.message 
            : [errorResponse.response.data.message]
          setValidationErrors(backendErrors)
        } else {
          setValidationErrors(['Erro ao enviar mensagem. Tente novamente.'])
        }
      } else {
        setValidationErrors(['Erro ao enviar mensagem. Tente novamente.'])
      }
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {validationErrors.length > 0 && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          <p className="font-semibold mb-2">Por favor, corrija os seguintes erros:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

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
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            validationErrors.some(e => e.includes('Nome')) ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail <span className="text-red-500">*</span>
        </label>
        <EmailInput
          id="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="seu@email.com"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            validationErrors.some(e => e.includes('E-mail')) ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Digite um e-mail válido (ex: nome@dominio.com)
        </p>
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp
        </label>
        <PhoneInput
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handlePhoneChange}
          placeholder="(11) 99999-9999"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            validationErrors.some(e => e.includes('Telefone')) ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        <p className="text-xs text-gray-500 mt-1">
          Formato: (DDD) 9XXXX-XXXX (opcional)
        </p>
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
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white ${
            validationErrors.some(e => e.includes('interesse')) ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
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
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y ${
            validationErrors.some(e => e.includes('Mensagem')) ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Conte-me sobre o que você gostaria de aprender..."
        />
        <p className="text-xs text-gray-500 mt-1">
          Mínimo 10 caracteres
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && validationErrors.length === 0 && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          ❌ Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
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

export function ContactForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'YOUR_SITE_KEY'}>
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  )
}