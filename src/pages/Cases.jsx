import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, Zap, BarChart3, Award } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      client: 'TechStart Solutions',
      segment: 'Tecnologia',
      challenge: 'Startup de SaaS precisava gerar leads qualificados e acelerar o crescimento',
      solution: 'Estratégia integrada de mídia paga + automação por IA + otimização de conversão',
      results: [
        { metric: '450%', description: 'Aumento em leads qualificados' },
        { metric: '15x', description: 'ROI em campanhas pagas' },
        { metric: '65%', description: 'Redução no CAC' }
      ],
      testimonial: 'A Plenn Digital transformou completamente nossa estratégia de aquisição. Os resultados superaram todas as expectativas.',
      author: 'Carlos Silva, CEO',
      icon: Zap,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      client: 'EduTech Academy',
      segment: 'Educação',
      challenge: 'Escola online precisava aumentar matrículas e melhorar taxa de conversão',
      solution: 'Marketing de conteúdo + SEO + automação de nutrição de leads',
      results: [
        { metric: '320%', description: 'Crescimento em matrículas' },
        { metric: '12x', description: 'ROI em marketing digital' },
        { metric: '80%', description: 'Melhoria na conversão' }
      ],
      testimonial: 'Nossa receita triplicou em 8 meses. A estratégia da Plenn foi fundamental para esse crescimento.',
      author: 'Ana Costa, Diretora',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      client: 'HealthCare Plus',
      segment: 'Saúde',
      challenge: 'Clínica médica queria expandir atendimento e melhorar agendamentos online',
      solution: 'Chatbot inteligente + gestão de redes sociais + campanhas locais',
      results: [
        { metric: '280%', description: 'Aumento em agendamentos' },
        { metric: '90%', description: 'Automação do atendimento' },
        { metric: '50%', description: 'Redução no tempo de resposta' }
      ],
      testimonial: 'O chatbot da Plenn revolucionou nosso atendimento. Agora conseguimos atender 24/7 com qualidade.',
      author: 'Dr. Roberto Lima',
      icon: Target,
      gradient: 'from-pink-500 to-red-600'
    },
    {
      client: 'Fashion Forward',
      segment: 'E-commerce',
      challenge: 'Loja de moda online precisava aumentar vendas e melhorar experiência do cliente',
      solution: 'Personalização por IA + remarketing avançado + otimização de UX',
      results: [
        { metric: '380%', description: 'Crescimento em vendas online' },
        { metric: '18x', description: 'ROI em campanhas' },
        { metric: '45%', description: 'Aumento no ticket médio' }
      ],
      testimonial: 'A IA da Plenn personalizou nossa loja de forma impressionante. Cada cliente tem uma experiência única.',
      author: 'Marina Santos, Fundadora',
      icon: Users,
      gradient: 'from-red-500 to-orange-600'
    },
    {
      client: 'InvestSmart',
      segment: 'Finanças',
      challenge: 'Consultoria financeira queria captar mais clientes premium e educar o mercado',
      solution: 'Conteúdo educacional + LinkedIn Ads + webinars automatizados',
      results: [
        { metric: '250%', description: 'Aumento em clientes premium' },
        { metric: '14x', description: 'ROI em campanhas B2B' },
        { metric: '70%', description: 'Crescimento na autoridade' }
      ],
      testimonial: 'Nos tornamos referência no mercado graças à estratégia de conteúdo da Plenn Digital.',
      author: 'Fernando Oliveira, Sócio',
      icon: BarChart3,
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      client: 'GreenTech Energia',
      segment: 'Energia Solar',
      challenge: 'Empresa de energia solar precisava gerar leads qualificados em mercado competitivo',
      solution: 'SEO local + Google Ads + automação de vendas por IA',
      results: [
        { metric: '420%', description: 'Aumento em orçamentos solicitados' },
        { metric: '16x', description: 'ROI em marketing digital' },
        { metric: '60%', description: 'Melhoria na qualificação' }
      ],
      testimonial: 'A Plenn nos ajudou a dominar o mercado local. Somos líderes em nossa região.',
      author: 'João Pereira, Diretor Comercial',
      icon: Award,
      gradient: 'from-green-500 to-blue-600'
    }
  ];

  const stats = [
    { number: '+500', label: 'Projetos Realizados' },
    { number: '15x', label: 'ROI Médio' },
    { number: '+150k', label: 'Leads Gerados' },
    { number: '98%', label: 'Satisfação dos Clientes' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Estratégia,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              execução
            </span>
            , resultado:{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              conheça os negócios que decolaram
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Crescimento real, resultados que falam por si. Conheça as empresas que escalaram 
            com nossas estratégias e veja como transformamos desafios em cases de sucesso.
          </p>
          
          <p className="text-lg text-gray-400 mb-8">
            Aqui, cada número tem uma história – e a próxima pode ser a sua.
          </p>
          
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Quer Ver Seu Negócio Aqui?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${caseStudy.gradient} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <caseStudy.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {caseStudy.client}
                      </h3>
                      <p className="text-sm text-gray-400">{caseStudy.segment}</p>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">DESAFIO</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">SOLUÇÃO</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">RESULTADOS</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-400">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-slate-700 pt-6">
                    <p className="text-gray-300 text-sm italic mb-3">
                      "{caseStudy.testimonial}"
                    </p>
                    <p className="text-xs text-gray-400">
                      — {caseStudy.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia de Sucesso */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fórmula
              </span>{' '}
              de Sucesso
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cada case de sucesso segue nossa metodologia comprovada, 
              adaptada às necessidades específicas de cada negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Análise Profunda</h3>
              <p className="text-gray-300">
                Começamos com uma auditoria completa do negócio, identificando 
                oportunidades únicas e definindo objetivos claros e mensuráveis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Execução Inteligente</h3>
              <p className="text-gray-300">
                Implementamos estratégias personalizadas com tecnologia de ponta, 
                sempre com foco em resultados rápidos e sustentáveis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Otimização Contínua</h3>
              <p className="text-gray-300">
                Monitoramos constantemente os resultados e otimizamos as estratégias 
                para garantir crescimento exponencial e duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para ser o{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              próximo case
            </span>{' '}
            de sucesso?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e descubra como podemos acelerar 
            seus resultados com estratégias comprovadas e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
            >
              Quero Meus Resultados Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/servicos"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all duration-200"
            >
              Conhecer Nossos Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;

