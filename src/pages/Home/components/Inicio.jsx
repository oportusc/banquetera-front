import React from 'react';
import logoCompleto from '../../../assets/images/prueba.png'
import { Link } from 'react-router-dom';

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
          <div className='flex flex-col text-center justify-center items-center gap-y-16 h-full p-4 md:p-8 lg:p-12'>
            <div className="">
              <img src={logoCompleto} alt="" className='' />
            </div>
            <div className='flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-12'>
              <div className='flex w-full md:w-3/4 lg:w-1/2 mx-auto px-4'>
                <p className="text-base sm:text-lg md:text-xl text-center">
                  Transformamos tus eventos en experiencias inolvidables con el mejor servicio de banqueteria en la V Región.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center px-4 font-semibold">
                <Link to="/servicios" className="border border-1 border-amber-400 p-3 rounded-md w-full sm:w-auto sm:min-w-48 md:min-w-60 hover:bg-amber-600 hover:border-amber-600 transition-colors">
                  Ver Nuestros Servicios
                </Link>
                <Link to="/contactanos" className="border border-1 border-amber-400 p-3 rounded-md w-full sm:w-auto sm:min-w-48 md:min-w-60 hover:bg-amber-600 hover:border-amber-600 transition-colors">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio; 