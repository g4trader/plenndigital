import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MessageCircle, Share2, Camera, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SocialMedia = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestão de{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Redes Sociais
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Construa uma presença digital marcante e engaje sua audiência com conteúdo 
              estratégico que converte seguidores em clientes
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
            >
              Quero Engajar Minha Audiência
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços de Redes Sociais */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços de{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estratégias completas para todas as principais plataformas sociais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Criação de Conteúdo',
                description: 'Posts, stories, reels e vídeos profissionais alinhados com sua marca'
              },
              {
                icon: MessageCircle,
                title: 'Gestão de Comunidade',
                description: 'Atendimento ativo, resposta a comentários e construção de relacionamento'
              },
              {
                icon: BarChart3,
                title: 'Estratégia de Conteúdo',
                description: 'Planejamento editorial baseado em dados e comportamento da audiência'
              },
              {
                icon: Heart,
                title: 'Engajamento Orgânico',
                description: 'Táticas para aumentar curtidas, comentários, compartilhamentos e salvamentos'
              },
              {
                icon: Share2,
                title: 'Influencer Marketing',
                description: 'Parcerias estratégicas com influenciadores relevantes para sua marca'
              },
              {
                icon: Users,
                title: 'Ads Sociais',
                description: 'Campanhas pagas no Instagram, Facebook, LinkedIn e TikTok para amplificar alcance'
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-pink-500/50 transition-all duration-200">
                <service.icon className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plataformas que{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Dominamos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expertise comprovada nas principais redes sociais do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: 'Instagram',
                description: 'Stories, Reels, IGTV e posts que geram engajamento e vendas',
                color: 'from-purple-500 to-pink-500'
              },
              {
                platform: 'Facebook',
                description: 'Estratégias para alcance orgânico e campanhas de conversão',
                color: 'from-blue-600 to-blue-400'
              },
              {
                platform: 'LinkedIn',
                description: 'Conteúdo B2B profissional para geração de leads qualificados',
                color: 'from-blue-700 to-blue-500'
              },
              {
                platform: 'TikTok',
                description: 'Vídeos virais e tendências para alcançar audiência jovem',
                color: 'from-pink-500 to-red-500'
              }
            ].map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${platform.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl font-bold">
                    {platform.platform.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.platform}</h3>
                <p className="text-gray-300 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados que{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Impressionam
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Métricas reais de crescimento e engajamento de nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '+520%', label: 'Crescimento de Seguidores' },
              { metric: '+340%', label: 'Taxa de Engajamento' },
              { metric: '+280%', label: 'Alcance Orgânico' },
              { metric: '+190%', label: 'Conversões Sociais' }
            ].map((result, index) => (
              <div key={index} className="text-center bg-slate-700/50 p-8 rounded-lg border border-slate-600">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-300 text-lg">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Trabalhamos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Processo estruturado para garantir consistência e resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise & Estratégia',
                description: 'Auditoria das redes atuais e definição de persona e objetivos'
              },
              {
                step: '02',
                title: 'Planejamento Editorial',
                description: 'Calendário de conteúdo com temas, formatos e frequência'
              },
              {
                step: '03',
                title: 'Produção & Publicação',
                description: 'Criação de conteúdo visual e textual + agendamento estratégico'
              },
              {
                step: '04',
                title: 'Monitoramento',
                description: 'Análise de métricas, engajamento e otimização contínua'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Viralizar sua Marca?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Receba uma análise gratuita das suas redes sociais e descubra oportunidades de crescimento
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Quero Minha Análise de Redes Sociais
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;

