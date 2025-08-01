import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import NosotrosDetallado from './pages/NosotrosDetallado';
import GaleriaDetallado from './pages/GaleriaDetallado';
import ServiciosDetallado from './pages/ServiciosDetallado';
import ScrollToTop from './components/ScrollToTop';
import ContactanosDetallado from './pages/ContactanosDetallado';

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosDetallado />} />
            <Route path="/servicios" element={<ServiciosDetallado />} />
            <Route path="/contactanos" element={<ContactanosDetallado />} />
            {/* <Route path="/galeria" element={<GaleriaDetallado />} /> */}
            {/* Aquí puedes agregar más rutas para otras páginas detalladas */}
          </Routes>
        </MainLayout>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
