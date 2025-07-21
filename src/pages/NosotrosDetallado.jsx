import React from 'react';
import { Link } from 'react-router-dom';

const NosotrosDetallado = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header con navegación */}
      <header className="bg-black text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-gold-400">
              Banquetera Elegante
            </Link>
            <Link 
              to="/" 
              className="text-white hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold-400">
              Nuestra Historia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Más de 15 años creando experiencias gastronómicas inolvidables
            </p>
          </div>
        </section>

        {/* Historia Detallada */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gold-400">El Inicio de Nuestro Sueño</h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Todo comenzó en 2008, cuando nuestra fundadora, María González, decidió convertir su pasión 
                  por la cocina en un negocio que transformaría la industria del catering en nuestra región.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Con solo una pequeña cocina y un equipo de 3 personas, comenzamos a servir eventos íntimos, 
                  siempre con la premisa de que cada plato debía contar una historia y cada evento debía ser único.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hoy, después de más de 15 años, hemos servido más de 500 eventos exitosos y contamos con 
                  un equipo de 25 profesionales apasionados por la excelencia culinaria.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gold-400">Nuestros Logros</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Premio a la Excelencia Gastronómica 2023</h4>
                      <p className="text-gray-400">Reconocimiento por la innovación en catering</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Certificación ISO 9001</h4>
                      <p className="text-gray-400">Gestión de calidad en todos nuestros procesos</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Membresía ACF</h4>
                      <p className="text-gray-400">American Culinary Federation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filosofía */}
            <div className="text-center mb-20">
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