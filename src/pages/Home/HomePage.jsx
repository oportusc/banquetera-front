import React from 'react';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Contactanos from './components/Contactanos';
import Servicios from './components/Servicios';

const HomePage = () => {
  return (
    <>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contactanos />
    </>
  );
};

export default HomePage; 