import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Zap, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PaidMedia = () => {
  // const { t } = useLanguage(); // Temporariamente desabilitado

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestão de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mídia Paga
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Maximize seu ROI com campanhas inteligentes no Google Ads, Facebook Ads e LinkedIn Ads, 
              otimizadas por IA para resultados excepcionais
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Quero Aumentar Meu ROI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* O Que Oferecemos */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Oferecemos em{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mídia Paga
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para maximizar seus investimentos em publicidade digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Google Ads Avançado',
                description: 'Campanhas de Search, Display, Shopping e YouTube otimizadas para conversão máxima'
              },
              {
                icon: Users,
                title: 'Facebook & Instagram Ads',
                description: 'Segmentação precisa e criativos de alta performance para engajamento e vendas'
              },
              {
                icon: BarChart3,
                title: 'LinkedIn Ads B2B',
                description: 'Campanhas especializadas para geração de leads qualificados no ambiente corporativo'
              },
              {
                icon: Zap,
                title: 'Otimização por IA',
                description: 'Algoritmos inteligentes para ajustes automáticos de lances e segmentação'
              },
              {
                icon: TrendingUp,
                title: 'Análise de Performance',
                description: 'Relatórios detalhados com insights acionáveis para melhoria contínua'
              },
              {
                icon: DollarSign,
                title: 'Gestão de Orçamento',
                description: 'Distribuição inteligente de investimento para máximo retorno em cada canal'
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-200">
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Metodologia
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Processo estruturado em 5 etapas para garantir resultados consistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Auditoria Completa',
                description: 'Análise das campanhas atuais e identificação de oportunidades'
              },
              {
                step: '02',
                title: 'Estratégia Personalizada',
                description: 'Definição de objetivos, KPIs e estratégia de canais'
              },
              {
                step: '03',
                title: 'Implementação',
                description: 'Criação e configuração das campanhas com melhores práticas'
              },
              {
                step: '04',
                title: 'Otimização Contínua',
                description: 'Monitoramento diário e ajustes baseados em performance'
              },
              {
                step: '05',
                title: 'Relatórios & Insights',
                description: 'Análises detalhadas e recomendações para crescimento'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
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
              Resultados{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Comprovados
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Métricas reais de clientes que transformaram seus negócios conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '+450%', label: 'Aumento em Leads' },
              { metric: '+280%', label: 'Crescimento no ROI' },
              { metric: '-65%', label: 'Redução no CAC' },
              { metric: '+320%', label: 'Aumento nas Vendas' }
            ].map((result, index) => (
              <div key={index} className="text-center bg-slate-700/50 p-8 rounded-lg border border-slate-600">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-300 text-lg">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Multiplicar Seus Resultados?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agende uma consultoria gratuita e descubra como podemos otimizar suas campanhas
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Quero Minha Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaidMedia;

