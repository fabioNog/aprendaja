import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aulas de Tecnologia e Programação | Professor',
  description: 'Aprenda programação do zero: JavaScript, HTML, CSS, Frontend, Backend, Banco de Dados e muito mais.',
}

const techContent = [
  { 
    title: 'Lógica de Programação', 
    description: 'Fundamentos do pensamento computacional: algoritmos, fluxogramas e raciocínio lógico.',
    icon: '🧠'
  },
  { 
    title: 'JavaScript', 
    description: 'Linguagem essencial para desenvolvimento web, com foco em prática e projetos reais.',
    icon: '⚡'
  },
  { 
    title: 'HTML & CSS', 
    description: 'Construa interfaces web modernas, responsivas e acessíveis do zero.',
    icon: '🎨'
  },
  { 
    title: 'Frontend', 
    description: 'React, Next.js e frameworks modernos para criar aplicações web incríveis.',
    icon: '💻'
  },
  { 
    title: 'Backend', 
    description: 'NestJS, Node.js, criação de APIs RESTful e arquitetura de servidores.',
    icon: '🔧'
  },
  { 
    title: 'Banco de Dados', 
    description: 'PostgreSQL, SQL, modelagem de dados e integração com aplicações.',
    icon: '🗄️'
  },
  { 
    title: 'Git e GitHub', 
    description: 'Controle de versão, trabalho colaborativo e boas práticas de desenvolvimento.',
    icon: '🔀'
  },
  { 
    title: 'APIs e Integrações', 
    description: 'Consumo e criação de APIs, integração com serviços externos e autenticação.',
    icon: '🔗'
  }
]

export default function TecnologiaPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            💻 Tecnologia
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Aprenda Programação do{' '}
            <span className="text-blue-600">Zero</span>
          </h1>
          <p className="text-xl text-gray-600">
            Desenvolva habilidades práticas em programação, desde os fundamentos 
            até a criação de projetos completos.
          </p>
        </div>

        {/* Conteúdos de Tecnologia */}
        <section className="mb-16" aria-labelledby="tech-content-title">
          <h2 id="tech-content-title" className="text-2xl font-bold text-gray-900 mb-8 text-center">
            O que você vai aprender
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techContent.map((item, index) => (
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
            Nossa Metodologia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🏗️
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Projetos Práticos</h3>
              <p className="text-gray-600 text-sm">
                Aprenda construindo projetos reais que fortalecem seu portfólio.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📚
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fundamentos Sólidos</h3>
              <p className="text-gray-600 text-sm">
                Base sólida em conceitos essenciais para evoluir com segurança.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Evolução Guiada</h3>
              <p className="text-gray-600 text-sm">
                Progresso gradual do básico ao avançado com acompanhamento.
              </p>
            </div>
          </div>
        </section>

        {/* Diferencial */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12 text-center border border-blue-200">
          <p className="text-lg text-blue-800 font-medium">
            🎯 "Aprenda programação com um professor que tem experiência prática 
            em desenvolvimento de software e sabe transformar conceitos complexos 
            em explicações simples."
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Quer iniciar sua jornada no mundo da programação?
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Quero aprender Programação
          </Link>
        </div>
      </div>
    </div>
  )
}