import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aulas de Matemática | Professor',
  description: 'Aulas particulares de Matemática para todos os níveis: reforço escolar, concursos, ensino fundamental e médio.',
}

const mathContent = [
  { 
    title: 'Matemática Básica', 
    description: 'Fundamentos essenciais: adição, subtração, multiplicação, divisão e muito mais.',
    icon: '➕'
  },
  { 
    title: 'Álgebra', 
    description: 'Equações, inequações, funções, polinômios e expressões algébricas.',
    icon: '✖️'
  },
  { 
    title: 'Geometria', 
    description: 'Formas geométricas, áreas, volumes, trigonometria e teorema de Pitágoras.',
    icon: '📐'
  },
  { 
    title: 'Raciocínio Lógico', 
    description: 'Desenvolva o pensamento crítico e a capacidade de resolver problemas complexos.',
    icon: '🧩'
  },
  { 
    title: 'Matemática para Concursos', 
    description: 'Prepare-se com questões específicas, estratégias e simulados.',
    icon: '🎯'
  },
  { 
    title: 'Reforço Escolar', 
    description: 'Acompanhamento personalizado para alunos do ensino fundamental e médio.',
    icon: '📚'
  },
  { 
    title: 'Porcentagem e Juros', 
    description: 'Cálculos financeiros, porcentagem, juros simples e compostos.',
    icon: '💰'
  },
  { 
    title: 'Regra de Três', 
    description: 'Proporções, regra de três simples e composta para resolver problemas do dia a dia.',
    icon: '📊'
  }
]

export default function MatematicaPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            📐 Matemática
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Aprenda Matemática com{' '}
            <span className="text-blue-600">Acompanhamento Personalizado</span>
          </h1>
          <p className="text-xl text-gray-600">
            Do básico ao avançado, com uma abordagem didática que respeita seu ritmo 
            e te ajuda a desenvolver confiança na matéria.
          </p>
        </div>

        {/* Conteúdos de Matemática */}
        <section className="mb-16" aria-labelledby="math-content-title">
          <h2 id="math-content-title" className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Conteúdos Oferecidos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathContent.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Metodologia */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como são as aulas?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📝
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Explicação + Prática</h3>
              <p className="text-gray-600 text-sm">
                Teoria seguida de exercícios práticos para fixação do conteúdo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Conteúdo Personalizado</h3>
              <p className="text-gray-600 text-sm">
                Aulas adaptadas ao seu nível, objetivos e dificuldades específicas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📈
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Acompanhamento</h3>
              <p className="text-gray-600 text-sm">
                Progresso contínuo com feedback e reforço nas áreas que precisam de mais atenção.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Quer aprender Matemática de forma eficiente e sem frustrações?
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Quero aprender Matemática
          </Link>
        </div>
      </div>
    </div>
  )
}