import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Gestão de Mídia Paga', path: '/servicos/midia-paga' },
    { name: 'Marketing de Conteúdo & SEO', path: '/servicos/content-seo' },
    { name: 'Gestão de Redes Sociais', path: '/servicos/redes-sociais' },
    { name: 'Web Design & Desenvolvimento', path: '/servicos/web-development' },
    { name: 'Autoatendimento por IA', path: '/servicos/ai-automation' },
    { name: 'Consultoria Estratégica', path: '/servicos/consultoria' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Plenn Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
              }`}
            >
              Home
            </Link>

            <Link
              to="/sobre-nos"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/sobre-nos') 
                  ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
              }`}
            >
              Sobre Nós
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/servicos') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Serviços
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2"
                >
                  <Link
                    to="/servicos"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                  >
                    Todos os Serviços
                  </Link>
                  <div className="border-t border-slate-700 my-2"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/cases"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/cases') 
                  ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
              }`}
            >
              Cases
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/blog') 
                  ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contato"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contato') 
                  ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
              }`}
            >
              Contato
            </Link>

            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Análise Gratuita
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Home
              </Link>

              <Link
                to="/sobre-nos"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/sobre-nos') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Sobre Nós
              </Link>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Serviços</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/servicos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                  >
                    Todos os Serviços
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/cases"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/cases') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Cases
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contato') 
                    ? 'text-blue-400 bg-blue-400/10 rounded-md' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 rounded-md'
                }`}
              >
                Contato
              </Link>

              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="mx-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
              >
                Análise Gratuita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

