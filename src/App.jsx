import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import PaidMedia from './pages/Services/PaidMedia';
import ContentSEO from './pages/Services/ContentSEO';
import SocialMedia from './pages/Services/SocialMedia';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre-nos" element={<About />} />
            <Route path="servicos" element={<Services />} />
            <Route path="servicos/midia-paga" element={<PaidMedia />} />
            <Route path="servicos/content-seo" element={<ContentSEO />} />
            <Route path="servicos/redes-sociais" element={<SocialMedia />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contato" element={<Contact />} />
            {/* Outras páginas de serviços serão adicionadas */}
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

