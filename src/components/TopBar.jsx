import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full top-0 z-50 border-b border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="max-h-20">
              <img src="/src/assets/images/LogoBlancoHorizontalv3.png" alt="O&P Eventos" className="h-28 rounded-md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {isHomePage ? (
                <>
                  <a href="#inicio" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Inicio
                  </a>
                  <a href="#nosotros" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Nosotros
                  </a>
                  <a href="#galeria" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Galería
                  </a>
                  <a href="#contactanos" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Contáctanos
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Inicio
                  </Link>
                  <Link to="/nosotros" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Nosotros
                  </Link>
                  <Link to="/galeria" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Galería
                  </Link>
                  <Link to="/contactanos" className="text-cream-100 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-elegant">
                    Contáctanos
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cream-100 hover:text-gold-400 focus:outline-none focus:text-gold-400 transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gold-400/20">
              {isHomePage ? (
                <>
                  <a href="#inicio" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Inicio
                  </a>
                  <a href="#nosotros" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Nosotros
                  </a>
                  <a href="#galeria" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Galería
                  </a>
                  <a href="#contactanos" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Contáctanos
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Inicio
                  </Link>
                  <Link to="/nosotros" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Nosotros
                  </Link>
                  <Link to="/galeria" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Galería
                  </Link>
                  <Link to="/contactanos" className="text-cream-100 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 font-elegant">
                    Contáctanos
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar; 