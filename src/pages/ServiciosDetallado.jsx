import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TabCustom from './components/TabCustom';

const ServiciosDetallado = () => {
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);

  // Datos detallados de cada servicio
  const serviciosDetallados = [
    {
      id: 'matrimonios',
      titulo: 'Matrimonios',
      descripcion: 'Celebraciones únicas e inolvidables',
      imagen: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      imagenSecundaria: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      contenido: {
        descripcion: 'Hacemos realidad el día más especial de tu vida con una atención personalizada y profesional. Desde la planificación hasta el último detalle, nos encargamos de que todo sea perfecto.',
        servicios: [
          'Catering completo con menú personalizado',
          'Servicio de meseros profesionales',
          'Decoración temática y floral',
          'Coordinación del evento',
          'Postres y pastel de bodas',
          'Bebidas y coctelería',
          'Montaje y desmontaje'
        ],
        caracteristicas: [
          'Menú personalizado según preferencias',
          'Decoración elegante y sofisticada',
          'Coordinación completa del evento',
          'Atención personalizada'
        ],
        paquetes: [
          {
            nombre: 'Básico',
            precio: 'Desde $50.000',
            incluye: ['Catering para 50 personas', 'Servicio básico', 'Decoración simple']
          },
          {
            nombre: 'Premium',
            precio: 'Desde $80.000',
            incluye: ['Catering para 100 personas', 'Servicio completo', 'Decoración premium', 'Coordinación']
          },
          {
            nombre: 'Luxury',
            precio: 'Desde $120.000',
            incluye: ['Catering ilimitado', 'Servicio VIP', 'Decoración de lujo', 'Coordinación completa', 'Postres gourmet']
          }
        ]
      }
    },
    {
      id: 'eventos-empresa',
      titulo: 'Empresas',
      descripcion: 'Eventos profesionales para empresas',
      imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      imagenSecundaria: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      contenido: {
        descripcion: 'Especialistas en eventos corporativos que reflejan la imagen y valores de tu empresa. Ofrecemos soluciones profesionales para reuniones, conferencias, lanzamientos y celebraciones empresariales.',
        servicios: [
          'Coffee breaks y catering ejecutivo',
          'Servicio de meseros profesionales',
          'Montaje de stands y presentaciones',
          'Coordinación logística completa',
          'Bebidas y refrigerios',
          'Decoración corporativa',
          'Audiovisual y tecnología'
        ],
        caracteristicas: [
          'Catering ejecutivo de alta calidad',
          'Servicio profesional y discreto',
          'Montaje rápido y eficiente',
          'Coordinación logística completa'
        ],
        paquetes: [
          {
            nombre: 'Ejecutivo',
            precio: 'Desde $30.000',
            incluye: ['Coffee break básico', 'Servicio de meseros', 'Montaje básico']
          },
          {
            nombre: 'Profesional',
            precio: 'Desde $60.000',
            incluye: ['Catering completo', 'Servicio profesional', 'Montaje completo', 'Coordinación']
          },
          {
            nombre: 'Corporativo',
            precio: 'Desde $100.000',
            incluye: ['Catering premium', 'Servicio VIP', 'Montaje de lujo', 'Coordinación completa', 'Audiovisual']
          }
        ]
      }
    },
    {
      id: 'graduaciones',
      titulo: 'Graduaciones',
      descripcion: 'Experiencia culinaria de alta calidad',
      imagen: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      imagenSecundaria: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      contenido: {
        descripcion: 'Celebramos el logro académico con eventos memorables que combinan elegancia y diversión. Desde graduaciones de jardín hasta universidad, creamos experiencias únicas.',
        servicios: [
          'Catering adaptado a diferentes edades',
          'Servicio de meseros profesionales',
          'Decoración temática por nivel educativo',
          'Coordinación del evento',
          'Postres y dulces especiales',
          'Bebidas y refrescos',
          'Actividades y entretenimiento'
        ],
        caracteristicas: [
          'Menú adaptado por edades',
          'Decoración temática educativa',
          'Actividades y entretenimiento',
          'Celebración memorable'
        ],
        paquetes: [
          {
            nombre: 'Básico',
            precio: 'Desde $40.000',
            incluye: ['Catering básico', 'Servicio de meseros', 'Decoración simple']
          },
          {
            nombre: 'Completo',
            precio: 'Desde $70.000',
            incluye: ['Catering completo', 'Servicio profesional', 'Decoración temática', 'Coordinación']
          },
          {
            nombre: 'Premium',
            precio: 'Desde $110.000',
            incluye: ['Catering premium', 'Servicio VIP', 'Decoración de lujo', 'Coordinación completa', 'Entretenimiento']
          }
        ]
      }
    },
    {
      id: 'cumpleanos',
      titulo: 'Cumpleaños',
      descripcion: 'Celebraciones con estilo y elegancia',
      imagen: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      imagenSecundaria: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      contenido: {
        descripcion: 'Hacemos que cada cumpleaños sea especial con celebraciones personalizadas que reflejan la personalidad del homenajeado. Desde fiestas íntimas hasta grandes celebraciones.',
        servicios: [
          'Catering personalizado por edades',
          'Servicio de meseros profesionales',
          'Decoración temática personalizada',
          'Coordinación del evento',
          'Pasteles y postres especiales',
          'Bebidas y refrescos',
          'Actividades y juegos'
        ],
        caracteristicas: [
          'Personalización completa',
          'Decoración temática',
          'Actividades divertidas',
          'Celebración única'
        ],
        paquetes: [
          {
            nombre: 'Familiar',
            precio: 'Desde $35.000',
            incluye: ['Catering básico', 'Servicio de meseros', 'Decoración simple']
          },
          {
            nombre: 'Celebración',
            precio: 'Desde $65.000',
            incluye: ['Catering completo', 'Servicio profesional', 'Decoración temática', 'Coordinación']
          },
          {
            nombre: 'Fiesta',
            precio: 'Desde $95.000',
            incluye: ['Catering premium', 'Servicio VIP', 'Decoración de lujo', 'Coordinación completa', 'Entretenimiento']
          }
        ]
      }
    },
    {
      id: 'coffee-break',
      titulo: 'Coffee Break',
      descripcion: 'El intermedio ideal para las reuniones',
      imagen: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      imagenSecundaria: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      contenido: {
        descripcion: 'Perfectos para pausas en reuniones, conferencias y eventos corporativos. Ofrecemos opciones saludables y deliciosas que energizan y mantienen el enfoque.',
        servicios: [
          'Café de alta calidad y variedad de tés',
          'Snacks saludables y dulces',
          'Servicio de meseros profesionales',
          'Montaje rápido y eficiente',
          'Bebidas frías y calientes',
          'Presentación elegante',
          'Limpieza posterior'
        ],
        caracteristicas: [
          'Café gourmet de alta calidad',
          'Snacks saludables y variados',
          'Servicio rápido y eficiente',
          'Presentación profesional'
        ],
        paquetes: [
          {
            nombre: 'Básico',
            precio: 'Desde $15.000',
            incluye: ['Café y té', 'Snacks básicos', 'Servicio de meseros']
          },
          {
            nombre: 'Completo',
            precio: 'Desde $25.000',
            incluye: ['Café premium', 'Snacks variados', 'Servicio profesional', 'Montaje']
          },
          {
            nombre: 'Premium',
            precio: 'Desde $40.000',
            incluye: ['Café gourmet', 'Snacks gourmet', 'Servicio VIP', 'Montaje elegante', 'Presentación especial']
          }
        ]
      }
    }
  ];

  // Determinar qué tab mostrar basado en el parámetro de URL
  useEffect(() => {
    const servicioParam = searchParams.get('servicio');
    if (servicioParam) {
      const index = serviciosDetallados.findIndex(servicio => servicio.id === servicioParam);
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="">
        <section className="py-8">
          <h2 className="sm:text-6xl text-5xl font-medium italic text-amber-500 font-cormorant text-center mb-4">
            Nuestros Servicios
          </h2>
          <h3 className=" text-4xl sm:text-3xl font-medium text-amber-400 font-cormorant text-center mb-8">
            {serviciosDetallados[activeIndex].titulo}
          </h3>

          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Layout con tabs a la izquierda y contenido a la derecha */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Panel de tabs a la izquierda */}
              <div className="sm:w-2/12">
                <div className="space-y-2 pt-20">
                  {serviciosDetallados.map((servicio, index) => (
                    <TabCustom
                      key={servicio.id}
                      title={servicio.titulo}
                      isActive={activeIndex === index}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Divider vertical */}
              <div className="hidden sm:block w-px bg-slate-400 shadow-xl shadow-amber-300">
              </div>


              {/* Contenido a la derecha */}
              <div className="sm:w-10/12">
                <div className="flex flex-col">
                  {/* <h3 className="text-4xl font-semibold text-amber-500 mb-4 mx-auto">
                    {serviciosDetallados[activeIndex].titulo}
                  </h3> */}
                  <p className="text-gray-300 leading-relaxed text-lg max-w-screen-lg">
                    {serviciosDetallados[activeIndex].contenido.descripcion}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-10">
                    {/* Galería de Imágenes */}
                    <div className="">
                      <img
                        src={serviciosDetallados[activeIndex].imagen}
                        alt={serviciosDetallados[activeIndex].titulo}
                        className="rounded-lg shadow-lg size-4/5 mx-auto"
                      />
                    </div>
                    {/* <div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {serviciosDetallados[activeIndex].contenido.descripcion}
                      </p>
                    </div> */}
                    {/* <img
                        src={serviciosDetallados[activeIndex].imagenSecundaria}
                        alt={`${serviciosDetallados[activeIndex].titulo} - Detalle`}
                        className="rounded-lg shadow-lg"
                      /> */}


                    {/* Contenido */}
                    <div className="">
                      <div>
                        {/* <h3 className="text-3xl font-semibold text-amber-500 mb-4">
                          {serviciosDetallados[activeIndex].titulo}
                        </h3> */}
                        {/* <p className="text-gray-300 leading-relaxed text-lg">
                          {serviciosDetallados[activeIndex].contenido.descripcion}
                        </p> */}
                      </div>

                      {/* Características Destacadas */}
                      <div>
                        <h4 className="text-xl font-semibold text-amber-400 mb-3">
                          Características Destacadas
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {serviciosDetallados[activeIndex].contenido.caracteristicas.map((item, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 bg-gray-700 rounded-lg p-3 transition-all duration-300 hover:bg-gray-600">
                              <span className="text-amber-500 mr-2">★</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Servicios incluidos */}
                      <div>
                      <img
                        src={serviciosDetallados[activeIndex].imagenSecundaria}
                        alt={`${serviciosDetallados[activeIndex].titulo} - Detalle`}
                        className="rounded-lg shadow-lg"
                      />
                        <h4 className="text-xl font-semibold text-amber-400 mb-3">
                          Servicios Incluidos
                        </h4>
                        <ul className="space-y-2">
                          {serviciosDetallados[activeIndex].contenido.servicios.map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <span className="text-amber-500 mr-2">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Paquetes */}
                      <div>
                        <h4 className="text-xl font-semibold text-amber-400 mb-4">
                          Paquetes Disponibles
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {serviciosDetallados[activeIndex].contenido.paquetes.map((paquete, idx) => (
                            <div key={idx} className="bg-gray-700 rounded-lg p-4 border border-gray-600 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-amber-500/20">
                              <h5 className="text-lg font-semibold text-amber-500 mb-2">
                                {paquete.nombre}
                              </h5>
                              <p className="text-amber-400 font-semibold mb-3">
                                {paquete.precio}
                              </p>
                              <ul className="space-y-1">
                                {paquete.incluye.map((item, itemIdx) => (
                                  <li key={itemIdx} className="text-sm text-gray-300">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-6">
                        <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-amber-500/30">
                          Solicitar Cotización
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiciosDetallado; 