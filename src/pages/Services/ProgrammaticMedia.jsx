import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Zap, TrendingUp, Users, DollarSign, Monitor, Smartphone, Tv, Radio, MapPin, Play } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProgrammaticMedia = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('realTimeOptimization'),
      description: t('realTimeOptimizationDesc')
    },
    {
      icon: Target,
      title: t('preciseTargeting'),
      description: t('preciseTargetingDesc')
    },
    {
      icon: BarChart3,
      title: t('crossPlatform'),
      description: t('crossPlatformDesc')
    }
  ];

  const mediaChannels = [
    {
      icon: Monitor,
      title: t('displayAds'),
      description: t('displayAdsDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Play,
      title: t('videoAds'),
      description: t('videoAdsDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: t('mobileAds'),
      description: t('mobileAdsDesc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Tv,
      title: t('connectedTV'),
      description: t('connectedTVDesc'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: t('oohDigital'),
      description: t('oohDigitalDesc'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Radio,
      title: t('audioAds'),
      description: t('audioAdsDesc'),
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('programmaticMediaTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {t('programmaticMediaSubtitle')}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              {t('ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Descrição da Plataforma */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tecnologia{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Avançada
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('programmaticMediaDescription')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Alcance Médio</span>
                  <span className="text-2xl font-bold text-blue-400">+2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">CTR Médio</span>
                  <span className="text-2xl font-bold text-green-400">3.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">ROI Médio</span>
                  <span className="text-2xl font-bold text-purple-400">450%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Redução de CPA</span>
                  <span className="text-2xl font-bold text-pink-400">-35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canais de Mídia */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('mediaChannelsTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('mediaChannelsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{channel.title}</h3>
                  <p className="text-gray-300">{channel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Trabalhamos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Processo estruturado para máxima eficiência e resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Análise de Audiência</h3>
              <p className="text-gray-300">
                Mapeamento detalhado do seu público-alvo e comportamento digital
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Configuração da Plataforma</h3>
              <p className="text-gray-300">
                Setup da tecnologia programática e integração com DSPs premium
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Lançamento e Otimização</h3>
              <p className="text-gray-300">
                Campanhas ao vivo com otimização automática por IA em tempo real
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Relatórios e Insights</h3>
              <p className="text-gray-300">
                Dashboards em tempo real e relatórios detalhados de performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que Escolher{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Nossa Plataforma?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <DollarSign className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Economia de até 40%</h3>
              <p className="text-gray-300">
                Redução significativa no CPA através de otimização automática
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Aumento de 300% no ROI</h3>
              <p className="text-gray-300">
                Performance superior através de targeting preciso e otimização contínua
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Alcance Qualificado</h3>
              <p className="text-gray-300">
                Acesso a inventário premium e audiências de alta qualidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para{' '}
            <span className="text-yellow-300">Revolucionar</span>{' '}
            sua Mídia Digital?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Descubra como nossa plataforma de mídia programática pode transformar seus resultados digitais
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

export default ProgrammaticMedia;

