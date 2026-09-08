import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Professor de Matemática e Tecnologia | Aprenda no seu ritmo',
  description: 'Aulas particulares de Matemática, Programação e Tecnologia para todas as idades. Aprenda com um professor experiente e paciente.',
  openGraph: {
    title: 'Professor de Matemática e Tecnologia',
    description: 'Aprenda tecnologia no seu ritmo, com quem sabe explicar.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}