import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Professor de Matemática e Tecnologia',
  description: 'Conheça o professor de Matemática e Tecnologia, com experiência em desenvolvimento de software e ensino.',
}

export default function SobrePage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre o Professor</h1>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Olá! Sou professor de Matemática e Tecnologia, apaixonado por ajudar pessoas a descobrirem 
            que a tecnologia e a matemática podem ser aprendidas de forma simples e prazerosa.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Com experiência prática em desenvolvimento de software e ensino, desenvolvi uma metodologia 
            que transforma assuntos complexos em explicações acessíveis para todas as idades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800">Experiência</h3>
              <p className="text-gray-600 text-sm mt-1">
                Desenvolvimento de software, programação e ensino de tecnologia.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800">Especialidades</h3>
              <p className="text-gray-600 text-sm mt-1">
                Matemática, Programação, Ensino para terceira idade.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
            <p className="text-lg text-blue-800 font-medium">
              { "Aprender tecnologia não tem idade." }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}