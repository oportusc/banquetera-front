import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import NosotrosDetallado from './pages/NosotrosDetallado';
import GaleriaDetallado from './pages/GaleriaDetallado';
import ServiciosDetallado from './pages/ServiciosDetallado';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosDetallado />} />
            <Route path="/galeria" element={<GaleriaDetallado />} />
            <Route path="/servicios" element={<ServiciosDetallado />} />
            {/* Aquí puedes agregar más rutas para otras páginas detalladas */}
          </Routes>
        </MainLayout>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
