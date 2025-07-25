import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, BarChart3, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';

const Consulting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-blue-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Consultoria{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Estratégica
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Análise completa do negócio e planejamento de crescimento com estratégias personalizadas
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200"
          >
            Agendar Consultoria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Consultoria{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Completa
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transformamos insights em estratégias acionáveis para acelerar seu crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Auditoria Completa</h3>
              <p className="text-gray-300">
                Análise profunda de todos os aspectos do seu negócio digital, 
                identificando oportunidades e gargalos de crescimento.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Estratégia Personalizada</h3>
              <p className="text-gray-300">
                Desenvolvimento de estratégias únicas baseadas no seu mercado, 
                concorrência e objetivos específicos de negócio.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Implementação Guiada</h3>
              <p className="text-gray-300">
                Acompanhamento na execução das estratégias com cronograma 
                detalhado e marcos de acompanhamento.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mentoria Executiva</h3>
              <p className="text-gray-300">
                Mentoria direta com especialistas seniores para acelerar 
                a tomada de decisões e execução de estratégias.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Otimização Contínua</h3>
              <p className="text-gray-300">
                Monitoramento constante de resultados com ajustes estratégicos 
                baseados em dados e performance real.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultados Garantidos</h3>
              <p className="text-gray-300">
                Compromisso com resultados mensuráveis e metas claras, 
                com acompanhamento de KPIs específicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Metodologia
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Processo estruturado para maximizar resultados e acelerar crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Diagnóstico Profundo',
                description: 'Análise completa do negócio, mercado, concorrência e oportunidades de crescimento.'
              },
              {
                number: '02',
                title: 'Estratégia Customizada',
                description: 'Desenvolvimento de plano estratégico personalizado com objetivos e métricas claras.'
              },
              {
                number: '03',
                title: 'Execução Orientada',
                description: 'Implementação das estratégias com acompanhamento próximo e ajustes em tempo real.'
              },
              {
                number: '04',
                title: 'Otimização & Escala',
                description: 'Análise de resultados, otimizações contínuas e planejamento para escalabilidade.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Especialização */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Áreas de{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Especialização
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Marketing Digital</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Estratégia de marketing omnichannel
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Otimização de funil de vendas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Automação de marketing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Análise de ROI e performance
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Transformação Digital</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Implementação de tecnologias
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Automação de processos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Integração de sistemas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  Cultura digital organizacional
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Crescimento & Escala</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  Estratégias de expansão
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  Otimização operacional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  Desenvolvimento de equipes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  Planejamento financeiro
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Análise & Dados</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                  Business Intelligence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                  Análise preditiva
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                  Dashboards executivos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                  Cultura data-driven
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Comprovados
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">300%</div>
              <p className="text-gray-300">Crescimento médio em receita</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-gray-300">Redução em custos operacionais</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">6 meses</div>
              <p className="text-gray-300">Tempo médio para ROI positivo</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
              <p className="text-gray-300">Taxa de satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Acelerar
            </span>{' '}
            seu Crescimento?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agende uma consultoria estratégica e descubra como podemos transformar seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/cases"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-200"
            >
              Ver Cases de Sucesso
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;

