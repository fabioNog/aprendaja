import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { contactConfig } from '@/lib/config/contact'

export const metadata: Metadata = {
  title: 'Contato | Professor de Matemática e Tecnologia',
  description: 'Entre em contato para saber mais sobre as aulas de Matemática, Tecnologia e Programação.',
}

export default function ContatoPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em contato</h1>
          <p className="text-xl text-gray-600">
            Quer saber mais sobre as aulas? Preencha o formulário abaixo ou fale diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-4">Informações de contato</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block text-gray-500">WhatsApp</span>
                  <a
                    href={`https://wa.me/${contactConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    (11) 99999-9999
                  </a>
                </li>
                <li>
                  <span className="block text-gray-500">E-mail</span>
                  <a href={`mailto:${contactConfig.email}`} className="text-blue-600 hover:text-blue-700">
                    {contactConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-gray-500">Telefone</span>
                  <a href={`tel:${contactConfig.phone}`} className="text-blue-600 hover:text-blue-700">
                    {contactConfig.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Atendimento</h3>
              <p className="text-sm text-gray-600">
                Atendimento personalizado para todas as idades. Aulas presenciais ou online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}