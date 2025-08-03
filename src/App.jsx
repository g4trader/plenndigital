import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import PaidMedia from './pages/Services/PaidMedia';
import ContentSEO from './pages/Services/ContentSEO';
import SocialMedia from './pages/Services/SocialMedia';
import WebDevelopment from './pages/Services/WebDevelopment';
import AIAutomation from './pages/Services/AIAutomation';
import Consulting from './pages/Services/Consulting';
import ProgrammaticMedia from './pages/Services/ProgrammaticMedia';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sobre-nos" element={<About />} />
              <Route path="servicos" element={<Services />} />
              <Route path="servicos/midia-paga" element={<PaidMedia />} />
              <Route path="servicos/midia-programatica" element={<ProgrammaticMedia />} />
              <Route path="servicos/content-seo" element={<ContentSEO />} />
              <Route path="servicos/redes-sociais" element={<SocialMedia />} />
              <Route path="servicos/web-development" element={<WebDevelopment />} />
              <Route path="servicos/ai-automation" element={<AIAutomation />} />
              <Route path="servicos/consultoria" element={<Consulting />} />
              <Route path="cases" element={<Cases />} />
              <Route path="contato" element={<Contact />} />
              {/* Rota de fallback para URLs não encontradas */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;

