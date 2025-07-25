import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
      >
        <img 
          src={currentLang?.flag} 
          alt={currentLang?.name}
          className="w-5 h-5 rounded-sm object-cover"
        />
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay para fechar o dropdown */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage === language.code ? 'bg-slate-700 text-blue-400' : 'text-gray-300'
                }`}
              >
                <img 
                  src={language.flag} 
                  alt={language.name}
                  className="w-5 h-5 rounded-sm object-cover"
                />
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;

