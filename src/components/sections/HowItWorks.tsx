'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: 1, title: 'Entre em contato', description: 'Fale conosco pelo WhatsApp ou formulário' },
  { number: 2, title: 'Explique o que deseja aprender', description: 'Conte-nos seus objetivos e interesses' },
  { number: 3, title: 'Definimos o melhor formato', description: 'Ajustamos as aulas ao seu ritmo e disponibilidade' },
  { number: 4, title: 'Começamos a aprender', description: 'Inicie sua jornada de aprendizado com acompanhamento' },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="how-it-works-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="how-it-works-title" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Como funciona?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Quatro passos simples para começar sua jornada de aprendizado
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}