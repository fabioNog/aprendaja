'use client'

import { motion } from 'framer-motion'

export function MethodologySection() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="methodology-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="methodology-title" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Metodologia de Ensino
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Um método que se adapta a você
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Para Terceira Idade</h3>
            <p className="text-gray-600">
              Aprendizado passo a passo, com explicações simples e exercícios práticos. 
              Respeito total ao seu ritmo de aprendizado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Para Programação</h3>
            <p className="text-gray-600">
              Conceitos fundamentais + prática + pequenos projetos. 
              Aprenda fazendo, com acompanhamento em cada etapa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="text-4xl mb-4">📐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Para Matemática</h3>
            <p className="text-gray-600">
              Conceitos + exemplos + exercícios + resolução passo a passo. 
              Desenvolva confiança e autonomia nos estudos.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="block text-blue-600 font-semibold">Ritmo</span>
            <span className="text-sm text-gray-600">Personalizado</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="block text-blue-600 font-semibold">Linguagem</span>
            <span className="text-sm text-gray-600">Simples e clara</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="block text-blue-600 font-semibold">Acompanhamento</span>
            <span className="text-sm text-gray-600">Individualizado</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="block text-blue-600 font-semibold">Evolução</span>
            <span className="text-sm text-gray-600">Gradual</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}