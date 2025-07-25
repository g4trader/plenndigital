import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, TrendingUp, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: t('aboutStat1Number'),
      text: t('aboutStat1Text'),
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      number: t('aboutStat2Number'),
      text: t('aboutStat2Text'),
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      number: t('aboutStat3Number'),
      text: t('aboutStat3Text'),
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Award,
      number: t('aboutStat4Number'),
      text: t('aboutStat4Text'),
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const timeline = [
    { year: '2020', text: t('aboutTimeline1') },
    { year: '2021', text: t('aboutTimeline2') },
    { year: '2022', text: t('aboutTimeline3') },
    { year: '2024', text: t('aboutTimeline4') }
  ];

  const rockets = [
    {
      icon: Brain,
      title: t('aboutRocket1Title'),
      description: t('aboutRocket1Description'),
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: t('aboutRocket2Title'),
      description: t('aboutRocket2Description'),
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: t('aboutRocket3Title'),
      description: t('aboutRocket3Description'),
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Zap,
      title: t('aboutRocket4Title'),
      description: t('aboutRocket4Description'),
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: t('aboutInnovationTitle'),
      description: t('aboutInnovationDescription'),
      label: t('aboutVisionLabel'),
      text: t('aboutVisionText'),
      gradient: 'from-blue-500 to-purple-600',
      labelColor: 'text-blue-400'
    },
    {
      icon: Target,
      title: t('aboutResultsTitle2'),
      description: t('aboutResultsDescription2'),
      label: t('aboutMissionLabel'),
      text: t('aboutMissionText'),
      gradient: 'from-purple-500 to-pink-600',
      labelColor: 'text-purple-400'
    },
    {
      icon: Award,
      title: t('aboutTransparencyTitle'),
      description: t('aboutTransparencyDescription'),
      label: t('aboutValuesLabel'),
      text: t('aboutValuesText'),
      gradient: 'from-pink-500 to-red-600',
      labelColor: 'text-pink-400'
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
            {t('aboutPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {t('aboutPageSubtitle')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            {t('aboutPageButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Números que Impressionam */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutResultsTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('aboutResultsHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('aboutResultsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('aboutHistoryTitle')}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {t('aboutHistoryHighlight')}
                </span>{' '}
                {t('aboutHistoryTitleEnd')}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {t('aboutHistoryP1')}
              </p>
              <p className="text-lg text-gray-300 mb-6">
                {t('aboutHistoryP2')}
              </p>
              <p className="text-lg text-gray-300 mb-8">
                {t('aboutHistoryP3')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">{t('aboutHistoryPoint1')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">{t('aboutHistoryPoint2')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">{t('aboutHistoryPoint3')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  {timeline.map((item, index) => {
                    const colors = ['text-blue-400', 'text-purple-400', 'text-pink-400', 'text-red-400'];
                    return (
                      <div key={index} className="text-center">
                        <div className={`text-3xl font-bold ${colors[index]} mb-2`}>{item.year}</div>
                        <div className="text-sm text-gray-300">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Somos Foguetes */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutRocketsTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('aboutRocketsHighlight')}
              </span>
              {t('aboutRocketsTitleEnd')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('aboutRocketsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rockets.map((rocket, index) => {
              const Icon = rocket.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <div className={`w-16 h-16 bg-gradient-to-r ${rocket.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{rocket.title}</h3>
                  <p className="text-gray-300">
                    {rocket.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutMissionTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('aboutMissionHighlight')}
              </span>{' '}
              {t('aboutMissionTitleEnd')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('aboutMissionSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                  <div className="mt-6">
                    <h4 className={`text-lg font-semibold ${value.labelColor} mb-2`}>{value.label}</h4>
                    <p className="text-sm text-gray-400">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('aboutCtaTitle')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('aboutCtaHighlight')}
            </span>
            {t('aboutCtaTitleEnd')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('aboutCtaSubtitle')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            {t('aboutCtaButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

