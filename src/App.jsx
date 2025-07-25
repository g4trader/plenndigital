import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3,
  Megaphone,
  Search,
  Users,
  Globe,
  Bot,
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'about', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Plenn Digital
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Serviços' },
              { id: 'process', label: 'Processo' },
              { id: 'about', label: 'Sobre Nós' },
              { id: 'contact', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')} 
            className="hidden md:flex btn-primary"
          >
            Análise Gratuita
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Serviços' },
                { id: 'process', label: 'Processo' },
                { id: 'about', label: 'Sobre Nós' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full btn-primary"
              >
                Análise Gratuita
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen hero-bg flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Transformamos{' '}
              <span className="gradient-text">Dados</span>{' '}
              em{' '}
              <span className="gradient-text">Resultados Reais</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Combinamos inteligência artificial, estratégias afiadas e tecnologia de ponta 
              para acelerar o crescimento do seu negócio digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Quero Crescer Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('process')}
              >
                Ver Como Trabalhamos
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/2 left-10 animate-float">
            <div className="w-20 h-20 rounded-full bg-primary/20 animate-pulse-slow"></div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 rounded-full bg-secondary/20 animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Why Plenn Digital Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não somos apenas uma agência.{' '}
              <span className="gradient-text">Somos seus parceiros de crescimento.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Plenn Digital combina tecnologia de ponta com estratégias eficientes para 
              potencializar a performance e o ROI de negócios em diversos segmentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-12 h-12 text-primary" />,
                title: "Inteligência Artificial",
                description: "Automação e personalização avançada para otimizar cada interação com seus clientes"
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-primary" />,
                title: "Dados Estratégicos",
                description: "Decisões baseadas em métricas precisas e análises profundas do comportamento do mercado"
              },
              {
                icon: <Target className="w-12 h-12 text-primary" />,
                title: "Resultados Mensuráveis",
                description: "ROI comprovado com relatórios detalhados e transparência total nos resultados"
              }
            ].map((pillar, index) => (
              <Card key={index} className="card-hover bg-background">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Soluções Completas</span>{' '}
              para Seu Crescimento Digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Não importa o desafio, temos a solução ideal para acelerar seu crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Gestão de Mídia Paga",
                description: "Google Ads, Facebook Ads, LinkedIn Ads com otimização por IA para máximo ROI"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Marketing de Conteúdo & SEO",
                description: "Produção de conteúdo estratégico e otimização para buscadores"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Gestão de Redes Sociais",
                description: "Planejamento, criação e gestão focada em engajamento e conversão"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Design & Desenvolvimento",
                description: "Sites modernos e responsivos com experiência do usuário otimizada"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Autoatendimento por IA",
                description: "Chatbots inteligentes com atendimento 24/7 personalizado"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Consultoria Estratégica",
                description: "Análise completa do negócio e planejamento de crescimento"
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="gradient-text">Transformamos</span> Seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa metodologia comprovada em 4 etapas para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análise Estratégica",
                description: "Auditoria completa do negócio, identificação de oportunidades e definição de objetivos"
              },
              {
                step: "02",
                title: "Planejamento Inteligente",
                description: "Estratégia personalizada com implementação de IA e cronograma de execução"
              },
              {
                step: "03",
                title: "Execução & Otimização",
                description: "Implementação das campanhas com monitoramento em tempo real e ajustes baseados em dados"
              },
              {
                step: "04",
                title: "Resultados & Escalabilidade",
                description: "Relatórios detalhados, análise de ROI e planejamento de crescimento contínuo"
              }
            ].map((step, index) => (
              <Card key={index} className="card-hover bg-background">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Resultados</span> que Falam por Si
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Números reais de clientes que confiaram na Plenn Digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                description: "Aumento em leads qualificados",
                detail: "Cliente do setor de educação"
              },
              {
                metric: "450%",
                description: "ROI em campanhas pagas",
                detail: "E-commerce de moda"
              },
              {
                metric: "60%",
                description: "Redução no CAC com IA",
                detail: "Startup de tecnologia"
              }
            ].map((result, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold gradient-text mb-4">{result.metric}</div>
                  <h3 className="text-xl font-bold mb-2">{result.description}</h3>
                  <p className="text-muted-foreground">{result.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tecnologia e Estratégia</span>{' '}
              em Perfeita Sintonia
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              A Plenn Digital nasceu da união entre expertise em tecnologia e visão estratégica de marketing. 
              Somos especialistas em soluções inovadoras impulsionadas por inteligência artificial, 
              focados em transformar a presença digital de empresas e gerar resultados reais e mensuráveis.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "Inovação",
                  description: "Sempre na vanguarda das tecnologias digitais"
                },
                {
                  icon: <Target className="w-8 h-8 text-primary" />,
                  title: "Resultados",
                  description: "Foco total em métricas que importam para seu negócio"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-primary" />,
                  title: "Transparência",
                  description: "Relatórios claros e comunicação direta sempre"
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-background rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Visão</h4>
                  <p className="text-muted-foreground">
                    Ser referência em soluções digitais integradas com IA
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Missão</h4>
                  <p className="text-muted-foreground">
                    Acelerar negócios através de estratégias digitais inteligentes
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Valores</h4>
                  <p className="text-muted-foreground">
                    Inovação, Resultados, Transparência, Excelência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="gradient-text">Acelerar</span> Seu Crescimento?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seu negócio digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Solicite sua Análise Gratuita</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" className="bg-muted border-border" />
                    <Input placeholder="Seu email" type="email" className="bg-muted border-border" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Telefone" className="bg-muted border-border" />
                    <Input placeholder="Empresa" className="bg-muted border-border" />
                  </div>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto ou desafio..." 
                    rows={4}
                    className="bg-muted border-border"
                  />
                  <Button className="w-full btn-primary text-lg py-3">
                    Quero Minha Análise Gratuita
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">contato@plenndigital.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-muted-foreground">(11) 3333-3333</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">Resposta Rápida</h4>
                  <p className="mb-4">
                    Respondemos todas as consultas em até 2 horas durante horário comercial.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} />
                    <span>Análise gratuita garantida</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">
                Plenn Digital
              </div>
              <p className="text-muted-foreground mb-4">
                Transformando dados em resultados reais através de inteligência artificial e estratégias digitais.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Mídia Paga</li>
                <li>SEO & Conteúdo</li>
                <li>Redes Sociais</li>
                <li>Web Design</li>
                <li>IA & Automação</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sobre Nós</li>
                <li>Cases</li>
                <li>Blog</li>
                <li>Carreira</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@plenndigital.com.br</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Plenn Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

