import React from 'react';
// import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import LogoNegro from '../assets/images/LogoCompletoPNG.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4">

          {/* Información de Contacto */}
          <div className="flex flex-col items-center md:items-start mx-auto">
            <h3 className="text-lg font-semibold text-amber-600 mb-4">Contáctanos</h3>
            <div className="flex flex-col gap-2 text-gray-300">
              <span>📞 +56 9 8729 7888</span>
              <span>✉️ eventosoyp@gmail.com</span>
            </div>
          </div>

          {/* Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start mx-auto">
            <img src={LogoNegro} alt="OyPEventos" className="h-16 md:h-20 mb-4" />
            {/* <p className="text-gray-300 text-center md:text-left text-sm">
              Creando momentos inolvidables para tus eventos especiales
            </p> */}
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center md:items-start mx-auto">
            <h3 className="text-lg font-semibold text-amber-600 mb-4">Síguenos</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/oypeventos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/56987297888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 py-4 flex items-center">
          <div className="w-full flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} OyP Eventos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 