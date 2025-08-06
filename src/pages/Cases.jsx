import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Cases = () => {
  const { t } = useLanguage();
  
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
      author: 'Carlos Silva, CEO TechStart Solutions',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      client: 'Bayer',
      segment: 'Farmacêutica',
      challenge: 'A Bayer é uma empresa global focada em Ciências da Vida nas áreas de saúde e nutrição',
      solution: 'Mídia programática para fortalecer o reconhecimento da marca',
      results: [
        { metric: '280%', description: 'Aumento nas vendas online' },
        { metric: '12x', description: 'ROI em campanhas' },
        { metric: '45%', description: 'Redução no CAC' }
      ],
      testimonial: 'Em 6 meses, triplicamos nossas vendas online. A expertise da Plenn em mídia programática é impressionante.',
      author: 'Ana Costa, Diretora Marketing',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      client: 'Paramount Filmes',
      segment: 'Plataforma de streaming de video',
      challenge: 'Mídia programática + remarketing + richmedia',
      solution: 'Lançamento de séries e filmes na plataforma',
      results: [
        { metric: '320%', description: 'Aumento em agendamentos' },
        { metric: '8x', description: 'ROI em campanhas locais' },
        { metric: '55%', description: 'Redução no custo por lead' }
      ],
      testimonial: 'Nossa agenda ficou lotada! A estratégia digital da Plenn revolucionou nosso negócio.',
      author: 'Roberto Lima, Diretor Marketing',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      client: 'Universal',
      segment: 'Entretenimento',
      challenge: 'Empresa de entretenimento',
      solution: 'Marketing B2B + LinkedIn Ads + automação de vendas + CRM integrado',
      results: [
        { metric: '180%', description: 'Aumento em leads B2B' },
        { metric: '10x', description: 'ROI em campanhas LinkedIn' },
        { metric: '40%', description: 'Melhoria na taxa de conversão' }
      ],
      testimonial: 'A Plenn entende o mercado B2B como ninguém. Nossos resultados falam por si só.',
      author: 'Marina Santos, Diretora Comercial',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      client: 'Amazon Prime',
      segment: 'Plataforma de streaming de video',
      challenge: 'Rede de academias precisava aumentar matrículas e retenção de alunos',
      solution: 'Marketing local + automação de leads + campanhas sazonais + fidelização',
      results: [
        { metric: '250%', description: 'Aumento em matrículas' },
        { metric: '9x', description: 'ROI em campanhas' },
        { metric: '35%', description: 'Melhoria na retenção' }
      ],
      testimonial: 'Nunca tivemos tantos alunos! A estratégia da Plenn foi fundamental para nosso crescimento.',
      author: 'Pedro Oliveira, Diretor Geral',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      client: 'OpenText',
      segment: 'Empresa de tecnologia da informação	',
      challenge: 'Instituição de ensino precisava aumentar matrículas e melhorar comunicação',
      solution: 'Marketing educacional + automação de matrículas + gestão de redes sociais',
      results: [
        { metric: '190%', description: 'Aumento em matrículas' },
        { metric: '7x', description: 'ROI em campanhas' },
        { metric: '50%', description: 'Melhoria no engajamento' }
      ],
      testimonial: 'A Plenn entende as necessidades do setor educacional. Resultados excepcionais!',
      author: 'Profª. Lucia Ferreira, Diretora Pedagógica',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('casesPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('casesPageSubtitle')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            {t('casesPageButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-500/50 transition-all duration-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.client}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${caseStudy.gradient} text-white`}>
                      {caseStudy.segment}
                    </span>
                  </div>
                  <Target className="h-8 w-8 text-purple-400" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Desafio</h4>
                    <p className="text-gray-300">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Solução</h4>
                    <p className="text-gray-300">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent mb-1`}>
                        {result.metric}
                      </div>
                      <p className="text-gray-400 text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300 mb-4">
                  "{caseStudy.testimonial}"
                </blockquote>
                
                <p className="text-purple-400 font-medium">— {caseStudy.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Comprovados
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Métricas consolidadas de todos os nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, metric: '+500', label: 'Empresas Impactadas' },
              { icon: BarChart3, metric: '12x', label: 'ROI Médio' },
              { icon: Users, metric: '+150k', label: 'Leads Gerados' },
              { icon: DollarSign, metric: 'R$ 50M+', label: 'Faturamento Gerado' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-700/50 p-8 rounded-lg border border-slate-600">
                <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Ser Nosso Próximo Case de Sucesso?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Agende uma consultoria gratuita e descubra como podemos transformar seus resultados
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Quero Minha Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cases;

