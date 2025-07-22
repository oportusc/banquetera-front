import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import NosotrosDetallado from './pages/NosotrosDetallado';
import GaleriaDetallado from './pages/GaleriaDetallado';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosDetallado />} />
          <Route path="/galeria" element={<GaleriaDetallado />} />
          {/* Aquí puedes agregar más rutas para otras páginas detalladas */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
