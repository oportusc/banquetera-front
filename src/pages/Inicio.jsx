import React from 'react';

const Inicio = () => {
  return (
    <section id="inicio" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=800&fit=crop&crop=center')`
        }}
      ></div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Título principal con estilo cursivo */}
        <div className="mb-12">
          <h1 className="text-9xl font-kapakana text-gold-200 mb-6">
            O&P Eventos
          </h1>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gold-400"></div>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-16 text-cream-100 leading-relaxed font-elegant max-w-4xl mx-auto">
          Transformamos tus eventos en experiencias inolvidables con el mejor servicio de catering
        </p>
        
        {/* Botones más pequeños y discretos */}
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center mb-20">
          <button className="bg-gold-400 text-black px-6 py-3 rounded-lg font-medium text-base hover:bg-gold-300 transition-colors duration-300 transform hover:scale-105 font-elegant">
            Ver Nuestros Servicios
          </button>
          <button className="border border-gold-400 text-gold-400 px-6 py-3 rounded-lg font-medium text-base hover:bg-gold-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-elegant">
            Solicitar Cotización
          </button>
        </div>
        
        {/* Features con nuevo estilo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-kapakana text-gold-400 mb-3">Servicio Puntual</h3>
            <p className="text-cream-200 font-elegant text-sm">Llegamos siempre a tiempo para que tu evento sea perfecto</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-kapakana text-gold-400 mb-3">Calidad Premium</h3>
            <p className="text-cream-200 font-elegant text-sm">Ingredientes frescos y de la más alta calidad</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-kapakana text-gold-400 mb-3">Atención Personalizada</h3>
            <p className="text-cream-200 font-elegant text-sm">Cada evento es único y merece atención especial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio; 