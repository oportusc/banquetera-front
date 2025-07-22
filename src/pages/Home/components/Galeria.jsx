import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Datos de ejemplo para la galería
  const galleryItems = [
    {
      id: 1,
      category: 'bodas',
      title: 'Boda Elegante',
      description: 'Celebración de boda con servicio completo',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'corporativos',
      title: 'Evento Corporativo',
      description: 'Catering para empresa tecnológica',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      category: 'postres',
      title: 'Postres Artesanales',
      description: 'Selección de postres gourmet',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      category: 'bodas',
      title: 'Recepción de Boda',
      description: 'Servicio de recepción elegante',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      category: 'corporativos',
      title: 'Conferencia Empresarial',
      description: 'Catering para evento de networking',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      category: 'postres',
      title: 'Pasteles de Boda',
      description: 'Diseños únicos y personalizados',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'bodas', name: 'Bodas' },
    { id: 'corporativos', name: 'Eventos Corporativos' },
    { id: 'postres', name: 'Postres' }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="min-h-[90vh] bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-pinyon text-amber-500 font-medium leading-none">Nuestra Galería</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros eventos más memorables y la calidad de nuestro servicio
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              {category.name}
            </button>
          ))}
        </div>

        {/* Galería */}
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gold-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-gold-400 mb-2">200+</div>
            <div className="text-gray-400">Bodas Celebradas</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-gold-400 mb-2">150+</div>
            <div className="text-gray-400">Eventos Corporativos</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-gold-400 mb-2">1000+</div>
            <div className="text-gray-400">Postres Creados</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
            <div className="text-gray-400">Clientes Satisfechos</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-gold-400">¿Te gustó lo que viste?</h3>
          <p className="text-gray-300 mb-8">Contáctanos para crear tu evento perfecto</p>
          <div className="space-x-6">
            <Link 
              to="/galeria" 
              className="bg-gold-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-300 transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              Ver Galería Completa
            </Link>
            <Link 
              to="/contactanos" 
              className="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria; 