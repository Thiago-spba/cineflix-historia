import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; 
import Objetivo from './components/Objetivo'; 
import Aprendizagem from './components/Aprendizagem'; 
import Contato from './components/Contato';
import AdminPage from './components/AdminPage'; 

function App() {
  return (
    <Router>
      {/* Cabeçalho do site */}
      <Header />

      {/* Rotas principais */}
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de objetivo */}
        <Route path="/objetivo" element={<Objetivo />} />

        {/* Página de aprendizagem */}
        <Route path="/aprendizagem" element={<Aprendizagem />} />

        {/* Página de contato */}
        <Route path="/contato" element={<Contato />} />

        {/* Página de administrador */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
