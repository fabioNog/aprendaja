import Link from 'next/link'
import { contactConfig } from '@/lib/config/contact'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Prof.</span> Matemática &amp; Tecnologia
            </h2>
            <p className="text-gray-600 max-w-md">
              Aprenda tecnologia no seu ritmo, com quem sabe explicar. Aulas particulares de Matemática, 
              Programação e Tecnologia para todas as idades.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terceira-idade" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terceira Idade
                </Link>
              </li>
              <li>
                <Link href="/matematica" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Matemática
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`https://wa.me/${contactConfig.whatsapp}`} className="hover:text-blue-600 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.email}`} className="hover:text-blue-600 transition-colors">
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactConfig.phone}`} className="hover:text-blue-600 transition-colors">
                  {contactConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {currentYear} Professor de Matemática e Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}