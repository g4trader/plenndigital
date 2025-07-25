import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart3, Target, Zap, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GrowthChart from '../components/Chart/GrowthChart';

const Home = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            filter: 'brightness(0.3)'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {t('heroTitle')}{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {t('heroTitleHighlight')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                {t('heroSubtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contato"
                  className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center shadow-lg"
                >
                  {t('heroButton')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Chart */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Plenn Digital */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('homePartnershipTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t('homePartnershipHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('homePartnershipSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('aiCardTitle')}</h3>
              <p className="text-gray-300">
                {t('aiCardDescription')}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('strategicDataTitle')}</h3>
              <p className="text-gray-300">
                {t('strategicDataDescription')}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('measurableResultsTitle')}</h3>
              <p className="text-gray-300">
                {t('measurableResultsDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soluções Completas para Seu{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Crescimento Digital
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Não importa o desafio, temos a solução ideal para acelerar seu crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Gestão de Mídia Paga',
                description: 'Google Ads, Facebook Ads, LinkedIn Ads com otimização por IA para máximo ROI',
                link: '/servicos/midia-paga'
              },
              {
                icon: TrendingUp,
                title: 'Marketing de Conteúdo & SEO',
                description: 'Produção de conteúdo estratégico e otimização para buscadores',
                link: '/servicos/content-seo'
              },
              {
                icon: Users,
                title: 'Gestão de Redes Sociais',
                description: 'Planejamento, criação e gestão focada em engajamento e conversão',
                link: '/servicos/redes-sociais'
              },
              {
                icon: Brain,
                title: 'Web Design & Desenvolvimento',
                description: 'Sites modernos e responsivos com experiência do usuário otimizada',
                link: '/servicos/web-development'
              },
              {
                icon: Target,
                title: 'Autoatendimento por IA',
                description: 'Chatbots inteligentes com atendimento 24/7 personalizado',
                link: '/servicos/ai-automation'
              },
              {
                icon: BarChart3,
                title: 'Consultoria Estratégica',
                description: 'Análise completa do negócio e planejamento de crescimento',
                link: '/servicos/consultoria'
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section id="como-trabalhamos" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Transformamos
              </span>{' '}
              Seu Negócio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Nossa metodologia comprovada em 4 etapas para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Análise Estratégica',
                description: 'Auditoria completa do negócio, identificação de oportunidades e definição de objetivos'
              },
              {
                number: '02',
                title: 'Planejamento Inteligente',
                description: 'Estratégia personalizada com implementação de IA e cronograma de execução'
              },
              {
                number: '03',
                title: 'Execução & Otimização',
                description: 'Implementação das campanhas com monitoramento em tempo real e ajustes baseados em dados'
              },
              {
                number: '04',
                title: 'Resultados & Escalabilidade',
                description: 'Relatórios detalhados, análise de ROI e planejamento de crescimento contínuo'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Acelerar
            </span>{' '}
            Seu Crescimento?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e descubra como podemos transformar seu negócio digital
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Quero Minha Análise Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

