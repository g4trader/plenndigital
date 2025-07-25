import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const faqs = [
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Normalmente, os primeiros resultados aparecem entre 30-60 dias, dependendo do serviço. Campanhas de mídia paga podem mostrar resultados mais rápidos.'
    },
    {
      question: 'Vocês trabalham com empresas de todos os tamanhos?',
      answer: 'Sim! Atendemos desde startups até grandes corporações. Nossa metodologia se adapta ao porte e necessidades específicas de cada cliente.'
    },
    {
      question: 'Como funciona o processo de trabalho?',
      answer: 'Começamos com uma análise gratuita, depois criamos uma estratégia personalizada, implementamos as ações e monitoramos os resultados continuamente.'
    },
    {
      question: 'Quais são os investimentos mínimos?',
      answer: 'Os investimentos variam conforme o escopo do projeto. Durante a consultoria gratuita, apresentamos opções adequadas ao seu orçamento.'
    },
    {
      question: 'Vocês oferecem garantia de resultados?',
      answer: 'Trabalhamos com metas claras e transparentes. Nosso histórico de ROI médio de 12x demonstra nossa eficácia em gerar resultados consistentes.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('contactPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('contactPageSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h2 className="text-3xl font-bold mb-6">Solicite sua Análise Gratuita</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="midia-paga">Gestão de Mídia Paga</option>
                    <option value="content-seo">Marketing de Conteúdo & SEO</option>
                    <option value="redes-sociais">Gestão de Redes Sociais</option>
                    <option value="web-development">Web Design & Desenvolvimento</option>
                    <option value="ai-automation">Autoatendimento por IA</option>
                    <option value="consultoria">Consultoria Estratégica</option>
                    <option value="todos">Todos os Serviços</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Conte-nos mais sobre seu projeto e objetivos..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Estamos prontos para acelerar seu crescimento digital. Entre em contato conosco através dos canais abaixo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                    <p className="text-gray-300">contato@plenndigital.com.br</p>
                    <p className="text-gray-400 text-sm">Resposta em até 2 horas úteis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Telefone</h3>
                    <p className="text-gray-300">(11) 99999-9999</p>
                    <p className="text-gray-400 text-sm">Seg-Sex: 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-300">(11) 99999-9999</p>
                    <p className="text-gray-400 text-sm">Atendimento 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Localização</h3>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                    <p className="text-gray-400 text-sm">Atendimento presencial e remoto</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-400 text-sm">Emergências: 24/7 via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Esclarecemos as principais dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Acelerar Seu Crescimento?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agende uma consultoria gratuita e descubra como podemos transformar seus resultados
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

