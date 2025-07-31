import React from 'react';
import { Link } from 'react-router-dom';
import ejemplo from '../../../assets/images/ejemplo.webp'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Servicios = () => {
  // Array de servicios simplificado
  const servicios = [
    {
      id: 1,
      titulo: "Matrimonios",
      descripcion: "Celebraciones únicas e inolvidables",
      imagen: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      urlParam: "matrimonios"
    },
    {
      id: 2,
      titulo: "Eventos Empresa",
      descripcion: "Eventos profesionales para empresas",
      imagen: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      urlParam: "eventos-empresa"
    },
    {
      id: 3,
      titulo: "Graduaciones",
      descripcion: "Experiencia culinaria de alta calidad",
      imagen: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      urlParam: "graduaciones"
    },
    {
      id: 4,
      titulo: "Cumpleaños",
      descripcion: "Celebraciones con estilo y elegancia",
      imagen: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      urlParam: "cumpleanos"
    },
    {
      id: 5,
      titulo: "Coffee Break",
      descripcion: "El intermedio ideal para las reuniones",
      imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      urlParam: "coffee-break"
    }
  ];

  return (
    <section id="nosotros" className="bg-black text-white py-12 sm:py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <h2 className="text-6xl sm:text-7xl text-center font-cormorant text-amber-500 font-medium leading-none">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center gap-8 pt-10 sm:pt-20">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="w-full max-w-sm md:max-w-xs lg:max-w-sm flex">
              <Card
                className="w-full rounded-lg bg-slate-600 flex flex-col group"
                header={
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      alt={servicio.titulo}
                      src={servicio.imagen}
                      className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <Link
                        to={`/servicios?servicio=${servicio.urlParam}`}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-1 border-amber-400 hover:bg-amber-600 hover:border-amber-600 text-white font-semibold px-6 py-2 rounded-md"
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                }
              >
                <div className="text-center px-2 py-6 flex flex-col min-h-20">
                  <h3 className="text-2xl font-semibold text-amber-500 mb-2">
                    {servicio.titulo}
                  </h3>
                  <p className="text-white text-lg mb-4">
                    {servicio.descripcion}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Sección de información adicional */}
        {/* <div className="mt-20 text-center">
          <p className="text-cream-200 leading-relaxed text-lg mb-6">
            O&P Eventos nace del encuentro de dos personas con vocación por el servicio y la hospitalidad.
            Una historia que comenzó trabajando en eventos, uniendo experiencia, cariño y el sueño compartido de crear celebraciones con sentido.
          </p>
          <p className="text-cream-200 leading-relaxed text-lg mb-8">
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
        </div> */}
      </div>
    </section>
  );
};

export default Servicios; 