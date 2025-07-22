import React from 'react';

const Inicio = () => {
  return (
    <section id="inicio" className="h-[85vh] bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className='flex flex-col text-center justify-center items-center h-full p-4 md:p-8 lg:p-12'>
            <div className="mb-6 md:mb-10 lg:mb-12">
              <span className="text-9xl font-kapakana text-amber-500 font-medium leading-none">
                O&P Eventos
              </span>
            </div>
            <div className='flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-12'>
              <div className='flex w-full md:w-3/4 lg:w-1/2 mx-auto px-4'>
                <p className="text-base sm:text-lg md:text-xl text-center">
                  Transformamos tus eventos en experiencias inolvidables con el mejor servicio de banqueteria en la V Región.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center px-4">
                <button className="border border-1 border-amber-400 p-3 rounded-md w-full sm:w-auto sm:min-w-48 md:min-w-60 hover:bg-amber-600 hover:border-amber-600 transition-colors">
                  Ver Nuestros Servicios
                </button>
                <button className="border border-1 border-amber-200 p-3 rounded-md w-full sm:w-auto sm:min-w-48 md:min-w-60 hover:bg-amber-600 hover:border-amber-600 transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
            <div className="hidden sm:flex md:flex-row justify-center gap-8 md:gap-12 lg:gap-20 xl:gap-40 mt-12 md:mt-16 lg:mt-20 px-4">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl text-gold-600 mb-2 md:mb-3">Servicio Puntual</h3>
                <p className="text-cream-200 font-elegant text-xs md:text-sm">Llegamos siempre a tiempo para que tu evento sea perfecto</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl text-gold-600 mb-2 md:mb-3">Calidad Premium</h3>
                <p className="text-cream-200 font-elegant text-xs md:text-sm">Ingredientes frescos y de la más alta calidad</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl text-gold-400 mb-2 md:mb-3">Atención Personalizada</h3>
                <p className="text-cream-200 font-elegant text-xs md:text-sm">Cada evento es único y merece atención especial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio; 