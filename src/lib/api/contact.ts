const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface ContactData {
  name: string
  email: string
  whatsapp: string
  interestArea: string
  message: string
}

export async function sendContactMessage(data: ContactData) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Erro ao enviar mensagem')
  }

  return response.json()
}