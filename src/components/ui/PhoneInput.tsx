'use client'

import { ChangeEvent } from 'react'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  id?: string
  name?: string
  required?: boolean
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "(11) 99999-9999",
  className = "",
  id,
  name,
  required = false,
}: PhoneInputProps) {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const cleaned = rawValue.replace(/\D/g, '') // Remove tudo que não é número
    
    // Aplica a máscara
    const masked = applyPhoneMask(cleaned)
    onChange(masked)
  }

  const applyPhoneMask = (value: string): string => {
    const numbers = value.replace(/\D/g, '')
    
    if (numbers.length === 0) return ''
    
    // (XX) XXXXX-XXXX
    let formatted = numbers
    if (numbers.length <= 2) {
      formatted = `(${numbers}`
    } else if (numbers.length <= 7) {
      formatted = `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`
    } else {
      formatted = `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)}-${numbers.substring(7, 11)}`
    }
    
    return formatted
  }

  return (
    <input
      type="tel"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      required={required}
      maxLength={16} // (XX) XXXXX-XXXX
    />
  )
}