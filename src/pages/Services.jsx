import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Users, Code, Bot, MessageSquare, Zap, TrendingUp, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Zap,
      title: 'Gestão de Mídia Paga',
      description: 'Google Ads, Facebook Ads, LinkedIn Ads com otimização por IA para máximo ROI',
      features: ['Campanhas otimizadas por IA', 'ROI médio superior a 12x', 'Relatórios em tempo real', 'Segmentação avançada'],
      link: '/servicos/midia-paga',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Marketing de Conteúdo & SEO',
      description: 'Produção de conteúdo estratégico e otimização para buscadores',
      features: ['Conteúdo otimizado para IA', 'Estratégia de palavras-chave', 'Link building avançado', 'Análise de concorrência'],
      link: '/servicos/content-seo',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Gestão de Redes Sociais',
      description: 'Planejamento, criação e gestão focada em engajamento e conversão',
      features: ['Estratégia de conteúdo', 'Automação inteligente', 'Análise de performance', 'Community management'],
      link: '/servicos/redes-sociais',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Brain,
      title: 'Web Design & Desenvolvimento',
      description: 'Sites modernos e responsivos com experiência do usuário otimizada',
      features: ['Design responsivo', 'Performance otimizada', 'SEO técnico', 'Integração com IA'],
      link: '/servicos/web-development',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Autoatendimento por IA',
      description: 'Chatbots inteligentes com atendimento 24/7 personalizado',
      features: ['IA conversacional', 'Integração omnichannel', 'Aprendizado contínuo', 'Análise de sentimento'],
      link: '/servicos/ai-automation',
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Consultoria Estratégica',
      description: 'Análise completa do negócio e planejamento de crescimento',
      features: ['Auditoria completa', 'Estratégia personalizada', 'Implementação guiada', 'Mentoria executiva'],
      link: '/servicos/consultoria',
      gradient: 'from-green-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('servicesPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('servicesPageSubtitle')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            {t('servicesPageButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Metodologia
              </span>{' '}
              Exclusiva
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cada projeto segue nossa metodologia comprovada, garantindo resultados excepcionais 
              e crescimento sustentável para seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Análise & Diagnóstico',
                description: 'Auditoria completa do seu negócio, identificação de oportunidades e definição de objetivos claros.'
              },
              {
                number: '02',
                title: 'Estratégia Personalizada',
                description: 'Desenvolvimento de estratégia única com implementação de IA e cronograma detalhado.'
              },
              {
                number: '03',
                title: 'Execução & Monitoramento',
                description: 'Implementação das campanhas com monitoramento em tempo real e otimizações baseadas em dados.'
              },
              {
                number: '04',
                title: 'Resultados & Escala',
                description: 'Análise de performance, relatórios detalhados e planejamento para crescimento contínuo.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciação */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Plenn Digital
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Não somos apenas mais uma agência. Somos especialistas em transformar 
              dados em resultados reais através de tecnologia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">IA em Tudo</h3>
              <p className="text-gray-300">
                Todos os nossos serviços são potencializados por inteligência artificial, 
                garantindo otimização contínua e resultados superiores.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultados Garantidos</h3>
              <p className="text-gray-300">
                Trabalhamos com metas claras e métricas transparentes. 
                Nosso ROI médio de 12x comprova a eficácia das nossas estratégias.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Parceria Verdadeira</h3>
              <p className="text-gray-300">
                Não somos fornecedores, somos parceiros de crescimento. 
                Seu sucesso é nosso sucesso, e trabalhamos juntos para alcançá-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Transformar
            </span>{' '}
            Seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Escolha o serviço ideal para seu negócio ou solicite uma consultoria 
            personalizada para descobrir as melhores oportunidades de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
            >
              Solicitar Consultoria Gratuita
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

export default Services;

