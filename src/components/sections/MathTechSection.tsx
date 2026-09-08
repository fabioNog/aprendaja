'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

const mathTopics = [
  'Matemática básica',
  'Reforço escolar',
  'Porcentagem',
  'Equações',
  'Raciocínio lógico',
  'Preparação para provas'
]

const techTopics = [
  'Lógica de programação',
  'JavaScript',
  'HTML e CSS',
  'Frontend',
  'Backend',
  'Banco de dados'
]

export function MathTechSection() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="math-tech-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="math-tech-title" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Matemática e Tecnologia
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Aprenda com uma abordagem didática e prática
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📐 Matemática</h3>
            <div className="grid grid-cols-2 gap-3">
              {mathTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-700"
                >
                  {topic}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/matematica"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Quero aprender Matemática
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">💻 Programação</h3>
            <div className="grid grid-cols-2 gap-3">
              {techTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-700"
                >
                  {topic}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/tecnologia"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Conhecer aulas de Tecnologia
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}