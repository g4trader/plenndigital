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
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com seu backend/CRM
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Gestão de Mídia Paga',
    'Marketing de Conteúdo & SEO',
    'Gestão de Redes Sociais',
    'Web Design & Desenvolvimento',
    'Autoatendimento por IA',
    'Consultoria Estratégica',
    'Projeto Personalizado'
  ];

  const budgetRanges = [
    'R$ 5.000 - R$ 10.000',
    'R$ 10.000 - R$ 25.000',
    'R$ 25.000 - R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'Acima de R$ 100.000'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Acelerar
            </span>{' '}
            Seu{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Crescimento
            </span>
            ?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar 
            seu negócio digital com estratégias de alta performance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">
                Solicite sua{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Análise Gratuita
                </span>
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-300">
                    Recebemos sua solicitação e entraremos em contato em até 2 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Seu nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Como devemos te chamar?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Seu email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Serviço de interesse
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Orçamento mensal
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Selecione uma faixa</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Conte-nos sobre seu projeto ou desafio
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Descreva seus objetivos, desafios atuais e o que espera alcançar..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                  >
                    Quero Minha Análise Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Entre em{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Contato
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">WhatsApp</p>
                      <p className="text-gray-300">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">Email</p>
                      <p className="text-gray-300">contato@plenndigital.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">Telefone</p>
                      <p className="text-gray-300">(11) 3333-3333</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">Localização</p>
                      <p className="text-gray-300">São Paulo, SP<br />Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold">Resposta Rápida</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Respondemos todas as consultas em até 2 horas durante horário comercial.
                </p>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-green-400 font-semibold">Análise gratuita garantida</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Ações Rápidas</h3>
                
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Chamar no WhatsApp
                </a>
                
                <a
                  href="mailto:contato@plenndigital.com.br"
                  className="block w-full border border-gray-600 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Esclarecemos as principais dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Qual é o investimento mínimo para começar?',
                answer: 'Nossos projetos começam a partir de R$ 5.000 mensais, mas o investimento ideal varia conforme seus objetivos e o escopo do projeto. Na análise gratuita, definimos a melhor estratégia para seu orçamento.'
              },
              {
                question: 'Em quanto tempo vejo os primeiros resultados?',
                answer: 'Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo do serviço. Campanhas de mídia paga mostram resultados mais rápidos, enquanto SEO e marketing de conteúdo têm um prazo maior para consolidação.'
              },
              {
                question: 'Vocês atendem empresas de todos os segmentos?',
                answer: 'Sim! Temos experiência em diversos segmentos como tecnologia, educação, saúde, e-commerce, finanças e muitos outros. Nossa metodologia se adapta às necessidades específicas de cada mercado.'
              },
              {
                question: 'Como funciona o acompanhamento dos resultados?',
                answer: 'Fornecemos relatórios detalhados mensais com todas as métricas importantes, além de reuniões de alinhamento. Você tem acesso a dashboards em tempo real para acompanhar o desempenho das campanhas.'
              },
              {
                question: 'Posso cancelar o contrato a qualquer momento?',
                answer: 'Nossos contratos têm prazo mínimo de 6 meses para garantir a efetividade das estratégias. Após esse período, você pode cancelar com 30 dias de antecedência.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

