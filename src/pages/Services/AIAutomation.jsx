import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, MessageSquare, Zap, Target, BarChart3 } from 'lucide-react';

const AIAutomation = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900/20 to-yellow-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IA &{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Automação
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Chatbots inteligentes com atendimento 24/7 personalizado e automação de processos
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all duration-200"
          >
            Implementar IA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soluções{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Inteligentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Automatize processos e melhore a experiência do cliente com IA avançada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Chatbots Inteligentes</h3>
              <p className="text-gray-300">
                Atendimento automatizado 24/7 com IA conversacional que 
                entende contexto e resolve problemas complexos.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Processamento de Linguagem</h3>
              <p className="text-gray-300">
                IA que compreende e responde em linguagem natural, 
                proporcionando conversas fluidas e naturais.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Automação de Processos</h3>
              <p className="text-gray-300">
                Automatize tarefas repetitivas e workflows complexos, 
                liberando sua equipe para atividades estratégicas.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalização Avançada</h3>
              <p className="text-gray-300">
                IA que aprende com cada interação, oferecendo 
                experiências cada vez mais personalizadas.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics Inteligente</h3>
              <p className="text-gray-300">
                Análise preditiva e insights automáticos para 
                tomada de decisões baseada em dados.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integração Omnichannel</h3>
              <p className="text-gray-300">
                IA integrada em todos os canais de comunicação 
                para experiência consistente e unificada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefícios da{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Automação
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transforme seu negócio com inteligência artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Redução de Custos</h3>
                    <p className="text-gray-300">Diminua custos operacionais em até 60% automatizando atendimento e processos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Disponibilidade 24/7</h3>
                    <p className="text-gray-300">Atendimento ininterrupto que nunca dorme, aumentando satisfação do cliente.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Escalabilidade Infinita</h3>
                    <p className="text-gray-300">Atenda milhares de clientes simultaneamente sem perder qualidade.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Aprendizado Contínuo</h3>
                    <p className="text-gray-300">IA que evolui constantemente, melhorando respostas e processos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Resultados Típicos</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Redução de Custos</span>
                  <span className="text-2xl font-bold text-orange-400">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Aumento na Satisfação</span>
                  <span className="text-2xl font-bold text-yellow-400">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tempo de Resposta</span>
                  <span className="text-2xl font-bold text-orange-400">&lt;1s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Resolução Automática</span>
                  <span className="text-2xl font-bold text-yellow-400">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementação */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processo de{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Implementação
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Análise & Mapeamento',
                description: 'Identificamos processos que podem ser automatizados e definimos objetivos claros.'
              },
              {
                number: '02',
                title: 'Desenvolvimento da IA',
                description: 'Criamos e treinamos a IA específica para suas necessidades e contexto de negócio.'
              },
              {
                number: '03',
                title: 'Integração & Testes',
                description: 'Integramos com seus sistemas existentes e realizamos testes extensivos.'
              },
              {
                number: '04',
                title: 'Otimização Contínua',
                description: 'Monitoramos performance e otimizamos continuamente baseado em dados reais.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Automatizar
            </span>{' '}
            seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Implemente IA e automação para reduzir custos, aumentar eficiência e melhorar a experiência do cliente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center"
            >
              Implementar IA Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/cases"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-200"
            >
              Ver Cases de Automação
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;

