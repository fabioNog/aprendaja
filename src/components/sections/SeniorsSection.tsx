'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

const seniorServices = [
  { icon: '📱', title: 'Smartphone' },
  { icon: '💬', title: 'WhatsApp' },
  { icon: '📧', title: 'E-mail' },
  { icon: '🎥', title: 'Google Meet' },
  { icon: '🌐', title: 'Internet' },
  { icon: '🔐', title: 'Segurança digital' },
  { icon: '🤖', title: 'Inteligência Artificial' },
  { icon: '💻', title: 'Computador' },
]

export function SeniorsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="seniors-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Para a Terceira Idade
          </span>
          <h2 id="seniors-title" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tecnologia sem complicação
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Aprenda no seu ritmo, com explicações simples e acompanhamento paciente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {seniorServices.map((service, index) => (
            <Card key={index} icon={service.icon} title={service.title} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 bg-blue-50 p-6 rounded-xl">
            Você não precisa dominar tecnologia para começar. Você só precisa de alguém que explique de forma simples e tenha paciência para ensinar.
          </p>
          <Link
            href="/terceira-idade"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Conhecer aulas para terceira idade
          </Link>
        </motion.div>
      </div>
    </section>
  )
}