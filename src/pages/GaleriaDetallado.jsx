import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GaleriaDetallado = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Datos de ejemplo expandidos para la galería detallada
  const galleryItems = [
    {
      id: 1,
      category: 'bodas',
      title: 'Boda Elegante en Jardín',
      description: 'Celebración de boda con servicio completo en jardín botánico',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      date: '2024',
      guests: '150 invitados'
    },
    {
      id: 2,
      category: 'corporativos',
      title: 'Conferencia Tech Summit',
      description: 'Catering para evento tecnológico de 3 días',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      date: '2024',
      guests: '300 asistentes'
    },
    {
      id: 3,
      category: 'postres',
      title: 'Pastel de Boda Art Deco',
      description: 'Diseño personalizado inspirado en la arquitectura Art Deco',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
      date: '2024',
      guests: 'Personalizado'
    },
    {
      id: 4,
      category: 'bodas',
      title: 'Recepción de Boda en Rooftop',
      description: 'Servicio de recepción elegante con vista panorámica',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
      date: '2024',
      guests: '200 invitados'
    },
    {
      id: 5,
      category: 'corporativos',
      title: 'Lunch Ejecutivo Premium',
      description: 'Servicio de almuerzo para junta directiva',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      date: '2024',
      guests: '25 ejecutivos'
    },
    {
      id: 6,
      category: 'postres',
      title: 'Cupcakes Gourmet Collection',
      description: 'Variedad de sabores únicos para evento corporativo',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
      date: '2024',
      guests: '100 porciones'
    },
    {
      id: 7,
      category: 'bodas',
      title: 'Cena Romántica Íntima',
      description: 'Ambiente íntimo y elegante para celebración privada',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      date: '2024',
      guests: '50 invitados'
    },
    {
      id: 8,
      category: 'corporativos',
      title: 'Evento de Networking',
      description: 'Catering para evento de networking empresarial',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
      date: '2024',
      guests: '150 profesionales'
    },
    {
      id: 9,
      category: 'postres',
      title: 'Macarons Artesanales',
      description: 'Colección de macarons con sabores exóticos',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
      date: '2024',
      guests: '200 unidades'
    },
    {
      id: 10,
      category: 'bodas',
      title: 'Boda en Playa',
      description: 'Celebración romántica frente al mar',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      date: '2024',
      guests: '80 invitados'
    },
    {
      id: 11,
      category: 'corporativos',
      title: 'Workshop Culinario',
      description: 'Evento interactivo de cocina para equipo',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      date: '2024',
      guests: '40 participantes'
    },
    {
      id: 12,
      category: 'postres',
      title: 'Tarta de Chocolate Premium',
      description: 'Diseño personalizado para aniversario corporativo',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
      date: '2024',
      guests: 'Personalizado'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Eventos', count: galleryItems.length },
    { id: 'bodas', name: 'Bodas', count: galleryItems.filter(item => item.category === 'bodas').length },
    { id: 'corporativos', name: 'Eventos Corporativos', count: galleryItems.filter(item => item.category === 'corporativos').length },
    { id: 'postres', name: 'Postres', count: galleryItems.filter(item => item.category === 'postres').length }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header con navegación */}
      {/* <header className="bg-black text-white shadow-lg fixed w-full top-0 z-50">
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
      </header> */}

      {/* Contenido principal */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold-400">
              Nuestra Galería
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Descubre algunos de nuestros eventos más memorables y la calidad de nuestro servicio
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gold-400 text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-end">
                    <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-gold-400 mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{item.date}</span>
                        <span>{item.guests}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gold-400">Nuestros Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-4xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-gray-400">Eventos Completados</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-4xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-gray-400">Años de Experiencia</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-4xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-gray-400">Clientes Satisfechos</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-4xl font-bold text-gold-400 mb-2">25</div>
                <div className="text-gray-400">Profesionales</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gold-400">¿Te gustó lo que viste?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos para crear tu evento perfecto y agregarlo a nuestra galería
            </p>
            <div className="space-x-6">
              <Link 
                to="/contactanos" 
                className="bg-gold-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-colors duration-300 inline-block"
              >
                Solicitar Cotización
              </Link>
              <Link 
                to="/nosotros" 
                className="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 inline-block"
              >
                Conoce Nuestro Equipo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GaleriaDetallado; 