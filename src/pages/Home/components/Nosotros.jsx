import React from 'react';
import { Link } from 'react-router-dom';

const Nosotros = () => {
  return (
    <section id="nosotros" className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-cursive italic mb-6 text-gold-400">Nosotros</h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gold-400"></div>
          </div>
          <p className="text-xl text-cream-100 max-w-4xl mx-auto font-elegant">
            Más de 15 años de experiencia creando momentos inolvidables a través de la excelencia culinaria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-cursive italic mb-8 text-gold-400">Nuestra Historia</h3>
            <p className="text-cream-200 mb-8 leading-relaxed text-lg font-elegant">
              Fundada en 2008, nuestra banquetera nació de la pasión por la gastronomía y el deseo de 
              crear experiencias únicas. Comenzamos como un pequeño equipo de chefs apasionados y 
              hoy somos una empresa reconocida por nuestra calidad y servicio excepcional.
            </p>
            <p className="text-cream-200 mb-8 leading-relaxed text-lg font-elegant">
              Cada plato que servimos cuenta una historia, cada evento que organizamos crea recuerdos 
              que duran toda la vida. Nuestro compromiso es superar las expectativas de nuestros 
              clientes en cada ocasión.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-cursive italic text-gold-400 mb-2">500+</div>
                <div className="text-cream-200 font-elegant">Eventos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-cursive italic text-gold-400 mb-2">15+</div>
                <div className="text-cream-200 font-elegant">Años de Experiencia</div>
              </div>
            </div>
            <div className="mt-10">
              <Link 
                to="/nosotros" 
                className="bg-gold-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-colors duration-300 inline-block font-elegant text-lg"
              >
                Ver Más
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-10 border border-gold-400/20">
            <h4 className="text-2xl font-cursive italic mb-8 text-gold-400">Nuestros Valores</h4>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-lg text-gold-400">Excelencia</h5>
                  <p className="text-cream-200 text-sm font-elegant">Buscamos la perfección en cada detalle</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-lg text-gold-400">Innovación</h5>
                  <p className="text-cream-200 text-sm font-elegant">Creamos experiencias únicas y memorables</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-lg text-gold-400">Compromiso</h5>
                  <p className="text-cream-200 text-sm font-elegant">Cumplimos nuestras promesas al 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-cursive italic mb-12 text-gold-400">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800 rounded-lg p-8 border border-gold-400/20 group hover:border-gold-400/40 transition-colors duration-300">
              <div className="w-28 h-28 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gold-400">Chef Principal</h4>
              <p className="text-cream-200 font-elegant">Especialista en cocina internacional</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 border border-gold-400/20 group hover:border-gold-400/40 transition-colors duration-300">
              <div className="w-28 h-28 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gold-400">Coordinadora de Eventos</h4>
              <p className="text-cream-200 font-elegant">Experta en planificación y logística</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 border border-gold-400/20 group hover:border-gold-400/40 transition-colors duration-300">
              <div className="w-28 h-28 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gold-400">Pastelera</h4>
              <p className="text-cream-200 font-elegant">Creadora de postres artesanales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros; 