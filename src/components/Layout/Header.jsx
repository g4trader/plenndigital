import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Plenn Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('home')}
            </Link>
            
            <Link
              to="/sobre-nos"
              className={`text-sm font-medium transition-colors ${
                isActive('/sobre-nos') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('about')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/servicos') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('services')}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsServicesOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20">
                    <Link
                      to="/servicos"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors rounded-t-lg"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('allServices')}
                    </Link>
                    <Link
                      to="/servicos/midia-paga"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('paidMedia')}
                    </Link>
                    <Link
                      to="/servicos/midia-programatica"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('programmaticMedia')}
                    </Link>
                    <Link
                      to="/servicos/content-seo"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('contentSEO')}
                    </Link>
                    <Link
                      to="/servicos/redes-sociais"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('socialMedia')}
                    </Link>
                    <Link
                      to="/servicos/web-development"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('webDevelopment')}
                    </Link>
                    <Link
                      to="/servicos/ai-automation"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('aiAutomation')}
                    </Link>
                    <Link
                      to="/servicos/consultoria"
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors rounded-b-lg"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t('consulting')}
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link
              to="/cases"
              className={`text-sm font-medium transition-colors ${
                isActive('/cases') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('cases')}
            </Link>
            
            <a
              href="https://blog.plenndigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-gray-300 hover:text-white"
            >
              {t('blog')}
            </a>
            
            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors ${
                isActive('/contato') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Right Side - Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            //<LanguageSelector />
            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              {t('freeAnalysis')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              
              <Link
                to="/sobre-nos"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/sobre-nos') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              
              <Link
                to="/servicos"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname.startsWith('/servicos') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              
              <Link
                to="/cases"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/cases') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('cases')}
              </Link>
              
              <a
                href="https://blog.plenndigital.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </a>
              
              <Link
                to="/contato"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/contato') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                //<LanguageSelector />
              </div>
              
              <Link
                to="/contato"
                className="block mx-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('freeAnalysis')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

