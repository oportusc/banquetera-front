import React from 'react';
import { Link } from 'react-router-dom';
import ejemplo from '../../../assets/images/ejemplo.webp'

const Nosotros = () => {
  return (
    <section id="nosotros" className="bg-black text-white py-12 sm:mt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className='flex flex-col gap-8 text-center'>
            <h2 className="text-6xl sm:text-7xl text-center font-cormorant text-amber-500 font-medium leading-none">¿Quiénes Somos?</h2>
            <p className="text-cream-200 leading-relaxed text-lg">
              <b>O&P Eventos</b> nace del encuentro de dos personas con vocación por el servicio y la hospitalidad.
              Una historia que comenzó trabajando en eventos, uniendo experiencia, cariño y el sueño compartido de crear celebraciones con sentido.
            </p>
            <p className="text-cream-200 leading-relaxed text-lg">
              Nuestro sello es la calidez, la atención a los detalles y el compromiso real con cada celebración.
              Creemos que un buen evento no solo se organiza: se vive, se siente y se recuerda.
            </p>
            <div className="mt-6">
              <Link
                to="/nosotros"
                className="border border-1 border-amber-400 p-3 rounded-md font-semibold sm:w-auto sm:min-w-48 md:min-w-60 hover:bg-amber-600 hover:border-amber-600 transition-colors"
              >
                Conoce nuestra historia
              </Link>
            </div>
          </div>

          <div className='items-center my-auto'>
            <img src={ejemplo} alt="emeplo" className='rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros; 