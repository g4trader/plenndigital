import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Plenn Digital
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footerQuickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerHome')}
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerAbout')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerServicesLink')}
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerCases')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerBlog')}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerContactLink')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footerServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/midia-paga" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerPaidMedia')}
                </Link>
              </li>
              <li>
                <Link to="/servicos/content-seo" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerContentSEO')}
                </Link>
              </li>
              <li>
                <Link to="/servicos/redes-sociais" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerSocialMedia')}
                </Link>
              </li>
              <li>
                <Link to="/servicos/web-development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerWebDev')}
                </Link>
              </li>
              <li>
                <Link to="/servicos/ai-automation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerAIAutomation')}
                </Link>
              </li>
              <li>
                <Link to="/servicos/consultoria" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footerConsulting')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footerContact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                {t('phone')}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                {t('emailCris')}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                {t('emailJenifer')}
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 mt-0.5" />
                <div>
                  Porto Alegre, RS<br />
                  Brasil
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contato"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                {t('footerFreeAnalysis')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footerCopyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footerPrivacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footerTermsOfUse')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

