import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, TrendingUp, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
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
              Resultados que{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                não cabem em promessas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Não importa o desafio, temos a solução ideal para acelerar seu crescimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+500</div>
              <div className="text-gray-300">negócios impactados</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">ROI médio</div>
              <div className="text-gray-300">superior a 12x em campanhas</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+150.000</div>
              <div className="text-gray-300">leads gerados para nossos clientes</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">Especialistas</div>
              <div className="text-gray-300">certificados em IA e Marketing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                De uma{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  ideia ambiciosa
                </span>{' '}
                para um império de resultados
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Em 2020, a Plenn Digital nasceu com uma visão clara: revolucionar o marketing digital 
                através da inteligência artificial. Enquanto o mercado ainda descobria o potencial da IA, 
                já estávamos desenvolvendo soluções que transformam dados em crescimento real.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Crescemos rápido porque não seguimos o óbvio. Apostamos em estratégias disruptivas, 
                automação inteligente e um modelo de vendas previsível. O resultado? Mais de 500 empresas 
                impactadas e um crescimento exponencial que não para.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Hoje, depois de transformar centenas de negócios, seguimos com a mesma mentalidade:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">Alta performance sempre.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">IA como diferencial competitivo.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-lg font-semibold">Resultados mensuráveis e transparentes.</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2020</div>
                    <div className="text-sm text-gray-300">Fundação da Plenn Digital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2021</div>
                    <div className="text-sm text-gray-300">Primeiros cases de IA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">2022</div>
                    <div className="text-sm text-gray-300">100+ clientes atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">2024</div>
                    <div className="text-sm text-gray-300">Líder em IA para Marketing</div>
                  </div>
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
              Somos{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Foguetes
              </span>
              : sem freios, sem medo, sem volta
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              O que diferencia a Plenn Digital? Nossa mentalidade de foguete:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Só trabalhamos com quem quer crescer de verdade.</h3>
              <p className="text-gray-300">
                Não aceitamos projetos sem ambição. Se você não está pronto para escalar, 
                talvez não seja o momento certo para voar conosco.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossos clientes são parceiros, não apenas contratos.</h3>
              <p className="text-gray-300">
                Construímos relacionamentos duradouros baseados em confiança, transparência 
                e resultados compartilhados.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Se não podemos entregar escala, nem começamos o projeto.</h3>
              <p className="text-gray-300">
                Cada estratégia é pensada para crescimento exponencial. Não fazemos trabalhos 
                que não tenham potencial de transformação real.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nosso time não busca conforto, busca superação.</h3>
              <p className="text-gray-300">
                Cada membro da equipe é selecionado pela mentalidade de crescimento e 
                paixão por resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologia e{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Estratégia
              </span>{' '}
              em Perfeita Sintonia
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A Plenn Digital nasceu da união entre expertise em tecnologia e visão estratégica de marketing. 
              Somos especialistas em soluções inovadoras impulsionadas por inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inovação</h3>
              <p className="text-gray-300">
                Sempre na vanguarda das tecnologias digitais, especialmente em inteligência artificial
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Visão</h4>
                <p className="text-sm text-gray-400">
                  Ser referência global em soluções digitais integradas com IA
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultados</h3>
              <p className="text-gray-300">
                Foco total em métricas que importam para seu negócio, com transparência absoluta
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Missão</h4>
                <p className="text-sm text-gray-400">
                  Acelerar negócios através de estratégias digitais inteligentes
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparência</h3>
              <p className="text-gray-300">
                Relatórios claros e comunicação direta sempre, sem jargões ou promessas vazias
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Valores</h4>
                <p className="text-sm text-gray-400">
                  Inovação, Resultados, Transparência, Excelência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Se seu negócio quer{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              escalar
            </span>
            , o melhor momento para agir é agora
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Acelerar vendas exige método, tecnologia e um time de elite. E nós temos tudo isso.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Vamos Acelerar Seu Crescimento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

