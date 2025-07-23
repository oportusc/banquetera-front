import React from 'react';
import { Link } from 'react-router-dom';
import ejemplo from '../assets/images/ejemplo.webp'

const NosotrosDetallado = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="sm:pt-10">
        {/* <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold-400">
              Nuestra Historia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Más de 15 años creando experiencias gastronómicas inolvidables
            </p>
          </div>
        </section> */}

        <section className="py-8 sm:py-12">
          <h2 className="text-6xl font-medium text-amber-500 font-pinyon text-center">El Inicio de Nuestro Sueño</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div className='flex flex-col gap-6'>
                <p className="text-gray-300 leading-relaxed text-md text-justify">
                  <b>O&P Eventos</b> nace de una historia compartida: la de Oscar y Pachi, una pareja que se conoció trabajando en eventos y que, desde el primer momento, soñó con crear algo propio. Un proyecto que uniera lo que más nos apasiona: la hospitalidad, la gastronomía y ser parte de momentos inolvidables en la vida de otras personas.
                </p>
                <p className="text-gray-300 leading-relaxed text-md text-justify">
                  Después de la pandemia, nos conocimos en un evento y la conexión fue inmediata. Pachi, con amplia experiencia en cafeterías y restaurantes, siempre se ha destacado por su cercanía, amabilidad y una atención genuina que marca la diferencia. Oscar, con más de ocho años trabajando como cocinero, garzón, jefe de servicio y maître, conoce a fondo el ritmo y las exigencias de los eventos, siempre con un trato cálido, profesional y humano.
                </p>
                <p className="text-gray-300 leading-relaxed text-md text-justify">
                  Juntos descubrimos que nuestras fortalezas se complementaban naturalmente, y que podíamos ofrecer algo distinto: eventos con alma, donde cada detalle importa.
                </p>
                <p className="text-gray-300 leading-relaxed text-md text-justify">
                  <b>O&P Eventos</b> tiene como sello la amabilidad, la cordialidad y la responsabilidad. Sabemos que los eventos pueden ser masivos, rápidos y exigentes, pero eso nunca debe ser excusa para descuidar la calidad ni la atención personalizada. Nuestro compromiso es crear experiencias memorables, con disposición, cariño y excelencia, acompañados siempre por un equipo que comparte nuestros valores.
                </p>
              </div>
              <div className="">
                <img src={ejemplo} alt="ejemplo" className='rounded-md' />
              </div>
            </div>

            {/* Filosofía */}
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold mb-8 text-gold-400">Nuestra Filosofía</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg p-8">
                  <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Calidad Innegociable</h3>
                  <p className="text-gray-400">
                    Utilizamos solo los mejores ingredientes frescos y de temporada,
                    seleccionados personalmente por nuestro chef principal.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8">
                  <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovación Constante</h3>
                  <p className="text-gray-400">
                    Nos mantenemos al día con las últimas tendencias gastronómicas
                    y técnicas culinarias para ofrecer experiencias únicas.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8">
                  <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Atención Personalizada</h3>
                  <p className="text-gray-400">
                    Cada cliente es único y merece una atención especial.
                    Nos adaptamos a sus necesidades y preferencias específicas.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipo Detallado */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-gold-400">Nuestro Equipo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Chef María González</h3>
                  <p className="text-gold-400 mb-4">Chef Principal & Fundadora</p>
                  <p className="text-gray-400 text-sm">
                    Con más de 20 años de experiencia en la industria gastronómica,
                    María ha trabajado en algunos de los mejores restaurantes del país
                    antes de fundar nuestra empresa.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ana Rodríguez</h3>
                  <p className="text-gold-400 mb-4">Coordinadora de Eventos</p>
                  <p className="text-gray-400 text-sm">
                    Especialista en planificación y logística de eventos,
                    Ana asegura que cada detalle esté perfecto para que
                    nuestros clientes disfruten de una experiencia sin preocupaciones.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Carlos Mendoza</h3>
                  <p className="text-gold-400 mb-4">Pastelero Principal</p>
                  <p className="text-gray-400 text-sm">
                    Artista culinario especializado en pastelería francesa y
                    diseño de pasteles personalizados. Cada creación es una
                    obra de arte comestible.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gray-800 rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-6 text-gold-400">¿Listo para crear tu evento perfecto?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Permítenos ser parte de tu historia y crear momentos inolvidables
              </p>
              <div className="space-x-6">
                <Link
                  to="/contactanos"
                  className="bg-gold-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-colors duration-300 inline-block"
                >
                  Solicitar Cotización
                </Link>
                <Link
                  to="/galeria"
                  className="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 inline-block"
                >
                  Ver Nuestros Trabajos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NosotrosDetallado; 