import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Zap, Search, Shield, BarChart3 } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-orange-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Design &{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Desenvolvimento
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Sites modernos e responsivos com experiência de usuário otimizada e performance de alto nível
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Desenvolvimento{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Completo
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Do design à implementação, criamos sites que convertem visitantes em clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design Responsivo</h3>
              <p className="text-gray-300">
                Sites que funcionam perfeitamente em todos os dispositivos, 
                garantindo uma experiência consistente para seus usuários.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Otimizada</h3>
              <p className="text-gray-300">
                Carregamento ultra-rápido com otimizações avançadas que 
                melhoram a experiência do usuário e o ranking no Google.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Técnico</h3>
              <p className="text-gray-300">
                Estrutura otimizada para motores de busca desde o desenvolvimento, 
                garantindo melhor visibilidade online.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Código Limpo</h3>
              <p className="text-gray-300">
                Desenvolvimento com as melhores práticas, código organizado 
                e documentado para facilitar futuras manutenções.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Segurança Avançada</h3>
              <p className="text-gray-300">
                Implementação de protocolos de segurança robustos para 
                proteger seu site e os dados dos seus clientes.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics Integrado</h3>
              <p className="text-gray-300">
                Configuração completa de ferramentas de análise para 
                acompanhar o desempenho e otimizar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Processo
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Metodologia comprovada para entregar sites que geram resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Briefing & Estratégia',
                description: 'Entendemos seu negócio, objetivos e público-alvo para criar a estratégia ideal.'
              },
              {
                number: '02',
                title: 'Design & Prototipagem',
                description: 'Criamos wireframes e protótipos interativos para validar a experiência do usuário.'
              },
              {
                number: '03',
                title: 'Desenvolvimento',
                description: 'Codificação com as melhores práticas, testes rigorosos e otimizações de performance.'
              },
              {
                number: '04',
                title: 'Launch & Otimização',
                description: 'Lançamento monitorado e otimizações contínuas baseadas em dados reais.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Comprovados
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">95%</div>
              <p className="text-gray-300">Melhoria na velocidade de carregamento</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">3x</div>
              <p className="text-gray-300">Aumento médio em conversões</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">80%</div>
              <p className="text-gray-300">Redução na taxa de rejeição</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">100%</div>
              <p className="text-gray-300">Sites responsivos e otimizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para ter um{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Site de Alto Impacto
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vamos criar um site que não apenas impressiona, mas converte visitantes em clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/cases"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-200"
            >
              Ver Nossos Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

