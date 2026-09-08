import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'

const seniorServices = [
  { icon: '📱', title: 'Uso de smartphones' },
  { icon: '💬', title: 'WhatsApp' },
  { icon: '📧', title: 'E-mail' },
  { icon: '🎥', title: 'Google Meet' },
  { icon: '🌐', title: 'Navegação na Internet' },
  { icon: '🔐', title: 'Segurança digital' },
  { icon: '🤖', title: 'Inteligência Artificial' },
  { icon: '💻', title: 'Computador' },
  { icon: '🏦', title: 'Aplicativos bancários' },
  { icon: '🛒', title: 'Compras online' },
]

export const metadata: Metadata = {
  title: 'Tecnologia para Terceira Idade | Professor de Matemática e Tecnologia',
  description: 'Aprenda tecnologia de forma simples e paciente. Aulas personalizadas para a terceira idade.',
}

export default function TerceiraIdadePage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Para a Terceira Idade
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tecnologia sem complicação</h1>
          <p className="text-xl text-gray-600">
            Aprenda no seu ritmo, com explicações simples e acompanhamento paciente.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {seniorServices.map((service, index) => (
            <Card key={index} icon={service.icon} title={service.title} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 bg-blue-50 p-6 rounded-xl">
            Você não precisa dominar tecnologia para começar. Você só precisa de alguém que explique de forma simples e tenha paciência para ensinar.
          </p>
          <Link
            href="/contato"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Quero aprender tecnologia
          </Link>
        </div>
      </div>
    </div>
  )
}