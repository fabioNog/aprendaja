'use client'

import { useState } from 'react'

interface EmailInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  id?: string
  name?: string
  required?: boolean
}

export function EmailInput({
  value,
  onChange,
  placeholder = "seu@email.com",
  className = "",
  id,
  name,
  required = false,
}: EmailInputProps) {
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
    
    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValid(emailRegex.test(newValue) || newValue === '')
  }

  return (
    <input
      type="email"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${className} ${!isValid && value ? 'border-red-500 bg-red-50' : ''}`}
      required={required}
      autoComplete="email"
    />
  )
}