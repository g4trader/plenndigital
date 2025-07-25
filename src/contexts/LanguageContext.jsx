import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  useEffect(() => {
    // Verificar se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('plenn-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      localStorage.setItem('plenn-language', language);
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'pt', name: 'Português', flag: '/flag-br.png' },
      { code: 'en', name: 'English', flag: '/flag-us.png' },
      { code: 'es', name: 'Español', flag: '/flag-es.png' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

