import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContentSEO = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing de Conteúdo{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                & SEO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Domine os resultados orgânicos com conteúdo estratégico e SEO técnico avançado 
              para posicionar sua marca no topo do Google
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200"
            >
              Quero Dominar o Google
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços de Conteúdo & SEO */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estratégias de{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Conteúdo & SEO
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combinamos produção de conteúdo de alta qualidade com SEO técnico para resultados duradouros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'SEO Técnico Avançado',
                description: 'Otimização completa de site, velocidade, Core Web Vitals e estrutura técnica'
              },
              {
                icon: FileText,
                title: 'Produção de Conteúdo',
                description: 'Artigos, blog posts, e-books e materiais ricos focados em conversão'
              },
              {
                icon: TrendingUp,
                title: 'Pesquisa de Palavras-chave',
                description: 'Análise profunda de oportunidades e estratégia de long-tail keywords'
              },
              {
                icon: Users,
                title: 'Content Marketing',
                description: 'Estratégia completa de conteúdo para nutrir leads e educar o mercado'
              },
              {
                icon: Award,
                title: 'Link Building',
                description: 'Construção de autoridade através de backlinks de qualidade e relevantes'
              },
              {
                icon: Zap,
                title: 'SEO Local',
                description: 'Otimização para buscas locais e Google My Business para negócios regionais'
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-green-500/50 transition-all duration-200">
                <service.icon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso{' '}
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                Processo
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Metodologia estruturada para garantir resultados orgânicos sustentáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Auditoria SEO',
                description: 'Análise técnica completa do site e identificação de oportunidades de melhoria'
              },
              {
                step: '02',
                title: 'Estratégia de Conteúdo',
                description: 'Planejamento editorial baseado em pesquisa de palavras-chave e persona'
              },
              {
                step: '03',
                title: 'Produção & Otimização',
                description: 'Criação de conteúdo otimizado e implementação de melhorias técnicas'
              },
              {
                step: '04',
                title: 'Monitoramento',
                description: 'Acompanhamento de rankings, tráfego orgânico e conversões'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por Que Investir em{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Conteúdo & SEO?
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Resultados Duradouros',
                    description: 'Diferente da mídia paga, o SEO gera tráfego orgânico contínuo sem custo por clique'
                  },
                  {
                    title: 'Autoridade de Marca',
                    description: 'Conteúdo de qualidade posiciona sua empresa como referência no mercado'
                  },
                  {
                    title: 'Custo-Benefício Superior',
                    description: 'ROI crescente ao longo do tempo com investimento inicial menor que mídia paga'
                  },
                  {
                    title: 'Leads Mais Qualificados',
                    description: 'Usuários que encontram você organicamente têm maior intenção de compra'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: '+380%', label: 'Tráfego Orgânico' },
                { metric: '+250%', label: 'Leads Qualificados' },
                { metric: '#1', label: 'Posição no Google' },
                { metric: '+180%', label: 'Tempo no Site' }
              ].map((result, index) => (
                <div key={index} className="text-center bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <p className="text-gray-300">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Dominar o Google?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Receba uma auditoria SEO gratuita e descubra como melhorar seu posicionamento
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Quero Minha Auditoria SEO Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentSEO;

