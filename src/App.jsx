import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<About />} />
          <Route path="servicos" element={<Services />} />
          <Route path="cases" element={<Cases />} />
          <Route path="contato" element={<Contact />} />
          {/* Blog e páginas individuais de serviços serão adicionadas depois */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

