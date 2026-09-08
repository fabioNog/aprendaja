'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Preciso saber informática para começar?',
    answer: 'Não. As aulas podem começar desde os conceitos mais básicos. O importante é ter vontade de aprender.'
  },
  {
    question: 'Tenho muita dificuldade com tecnologia. Posso fazer as aulas?',
    answer: 'Sim. A proposta é justamente ensinar tecnologia de maneira simples e paciente, respeitando seu ritmo de aprendizado.'
  },
  {
    question: 'As aulas são individuais?',
    answer: 'Sim, as aulas são personalizadas e individuais para garantir o melhor acompanhamento do seu progresso.'
  },
  {
    question: 'Posso aprender programação começando do zero?',
    answer: 'Sim. O conteúdo pode começar por lógica de programação e fundamentos, evoluindo gradualmente.'
  },
  {
    question: 'As aulas de Matemática são para quais níveis?',
    answer: 'Atendemos desde o ensino básico até preparação para concursos e vestibulares, sempre adaptando ao seu nível.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tire suas dúvidas sobre as aulas
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-2xl text-blue-600 flex-shrink-0 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}