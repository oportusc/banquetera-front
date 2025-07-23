import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoNegro from '../assets/images/LogoCompletoPNG.png';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array de navegación
  const navigationItems = [
    { name: 'Inicio', href: '/', anchor: '#inicio' },
    { name: 'Nosotros', href: '/nosotros', anchor: '#nosotros' },
    { name: 'Galería', href: '/galeria', anchor: '#galeria' },
    { name: 'Contáctanos', href: '/contactanos', anchor: '#contactanos' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-28">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={LogoNegro} alt="OyPEventos" className="h-16 md:h-24" />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex gap-8">
            {navigationItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="text-white font-roboto font-light hover:text-amber-600 hover:bg-amber-50 hover:font-semibold px-2 py-1 rounded-md transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menú Móvil */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2 border-t border-gray-700">
            {navigationItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="block text-white hover:text-amber-600 hover:bg-amber-50 hover:font-semibold px-4 py-3 rounded-md transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar; 