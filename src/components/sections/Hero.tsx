'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tecnologia, Matemática e{' '}
              <span className="text-blue-600">Aprendizado para todas as idades</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Aprenda tecnologia com tranquilidade, desenvolva seus conhecimentos em Matemática 
            ou dê os primeiros passos na programação com acompanhamento personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Quero conhecer as aulas
            </Link>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Falar com o professor
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <span>✓ Aulas particulares</span>
            <span>✓ Ritmo personalizado</span>
            <span>✓ Atendimento paciente</span>
            <span>✓ Para todas as idades</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}