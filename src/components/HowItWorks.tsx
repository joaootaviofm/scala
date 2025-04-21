import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 text-white bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Como funciona?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nossa abordagem simplificada para implementar soluções de IA no seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
          <div className="bg-gray-800 backdrop-blur-md cursor-default hover:scale-110 duration-300 p-6 rounded-lg shadow-xl hover:shadow-white/10 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-gray-900 p-3 rounded-full mr-4">
                <span className="text-[#008fff] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold">Consultoria Gratuita</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Iniciamos com uma consultoria gratuita para entender profundamente seus objetivos de negócio e requisitos técnicos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Identificação de necessidades</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Análise de objetivos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Avaliação inicial de viabilidade</span>
              </li>
            </ul>
          </div>

          
          <div className="hover:scale-110 duration-300 cursor-default bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-white/10 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-gray-900 p-3 rounded-full mr-4">
                <span className="text-[#008fff] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold">Proposta Detalhada</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Com base na consultoria, elaboramos um escopo completo com todos os detalhes do projeto.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Cronograma de execução</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Orçamento transparente</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Especificações técnicas claras</span>
              </li>
            </ul>
          </div>

          <div className="hover:scale-110 duration-300 cursor-default bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-white/10 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-gray-900 p-3 rounded-full mr-4">
                <span className="text-[#008fff] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold">Desenvolvimento do Projeto</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Após a aprovação da proposta, iniciamos o desenvolvimento da sua solução personalizada de IA.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Implementação especializada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Acompanhamento contínuo</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2" />
                <span className="text-gray-300">Entrega de resultados mensuráveis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="cursor-pointer bg-[#4452FE] hover:bg-transparent text-white font-medium py-3 px-8 border border-transparent hover:border-white hover:scale-110 duration-300 hover:shadow-xl shadow-white/10">
            Agende sua consultoria gratuita
          </button>
        </div>
      </div>
    </section>
  );
}