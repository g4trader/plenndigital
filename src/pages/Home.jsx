import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart3, Target, Zap, Users, TrendingUp, CheckCircle, Award, Rocket } from 'lucide-react';
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

  const services = [
    {
      icon: Target,
      title: t('paidMediaTitle'),
      description: t('paidMediaDescription'),
      link: '/servicos/midia-paga'
    },
    {
      icon: TrendingUp,
      title: t('contentSeoTitle'),
      description: t('contentSeoDescription'),
      link: '/servicos/content-seo'
    },
    {
      icon: Users,
      title: t('socialMediaTitle'),
      description: t('socialMediaDescription'),
      link: '/servicos/redes-sociais'
    },
    {
      icon: Zap,
      title: t('webDevTitle'),
      description: t('webDevDescription'),
      link: '/servicos/web-development'
    },
    {
      icon: Brain,
      title: t('aiAutomationTitle'),
      description: t('aiAutomationDescription'),
      link: '/servicos/ai-automation'
    },
    {
      icon: Award,
      title: t('consultingTitle'),
      description: t('consultingDescription'),
      link: '/servicos/consultoria'
    }
  ];

  const methodologySteps = [
    {
      number: '01',
      title: t('methodologyStep1Title'),
      description: t('methodologyStep1Description')
    },
    {
      number: '02',
      title: t('methodologyStep2Title'),
      description: t('methodologyStep2Description')
    },
    {
      number: '03',
      title: t('methodologyStep3Title'),
      description: t('methodologyStep3Description')
    },
    {
      number: '04',
      title: t('methodologyStep4Title'),
      description: t('methodologyStep4Description')
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: t('whyChoose1Title'),
      description: t('whyChoose1Description')
    },
    {
      icon: CheckCircle,
      title: t('whyChoose2Title'),
      description: t('whyChoose2Description')
    },
    {
      icon: Rocket,
      title: t('whyChoose3Title'),
      description: t('whyChoose3Description')
    }
  ];

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
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                  >
                    {t('learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('methodologyTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t('methodologyHighlight')}</span> {t('methodologySubtitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('methodologyDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher a Plenn */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('whyChooseTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{t('whyChooseHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('whyChooseSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('ctaTitle')} <span className="text-yellow-300">{t('ctaHighlight')}</span> {t('ctaSubtitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              {t('ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/cases"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
            >
              {t('ctaSecondaryButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

