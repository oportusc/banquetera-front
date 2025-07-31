import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


const Contactanos = () => {
  const toast = useRef(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    invitados: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación de envío exitoso para demostrar el toast
    // En producción, descomenta el código de fetch abajo
    // toast.current.show({
    //   severity: 'success',
    //   summary: '¡Éxito!',
    //   detail: '¡Gracias por contactarnos! Te responderemos pronto.',
    //   life: 5000,
    //   className: 'bg-green-500 text-white border-green-600',
    // });

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoEvento: '',
      fecha: '',
      invitados: '',
      mensaje: ''
    });


    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        })
      });

      if (response.ok) {
        toast.current.show({
          severity: 'success',
          summary: '¡Éxito!',
          detail: '¡Gracias por contactarnos! Te responderemos pronto.',
          life: 5000,
          className: 'bg-green-500 text-white border-green-600'
        });
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoEvento: '',
          fecha: '',
          invitados: '',
          mensaje: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.',
        life: 5000,
        className: 'bg-red-500 text-white border-red-600'
      });
    }

  };

  return (
    <section id="contactanos" className="bg-black text-white py-12 sm:py-10">
      <Toast ref={toast} />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-6xl sm:text-7xl text-center font-cormorant text-amber-500 font-medium leading-none">Contáctanos</h2>
        </div>
        <div className="flex justify-center pt-10 sm:pt-12">
          {/* <div>
            <h3 className="text-2xl font-bold mb-8 text-gold-400">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dirección</h4>
                  <p className="text-gray-400">Av. Principal 123, Ciudad<br />Código Postal 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Teléfono</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-400">info@banqueteraelegante.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Horarios</h4>
                  <p className="text-gray-400">
                    Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                    Sábados: 10:00 AM - 4:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-gold-400">Nuestros Servicios</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Bodas y Eventos Sociales</h5>
                  <p className="text-gray-400 text-sm">Catering completo para bodas, quinceañeras, cumpleaños</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Eventos Corporativos</h5>
                  <p className="text-gray-400 text-sm">Conferencias, reuniones, lanzamientos de producto</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Postres y Pastelería</h5>
                  <p className="text-gray-400 text-sm">Pasteles personalizados y postres gourmet</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Formulario */}
          <div className="bg-slate-600 rounded-lg p-4 sm:p-8 w-[100vh]">
            <h3 className="text-2xl font-bold mb-8 text-gold-400">Solicita tu Cotización</h3>
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-medium mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="boda">Matrimonio</option>
                    <option value="corporativo">Evento Empresa</option>
                    <option value="cumpleanos">Graduacion</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium mb-2">
                    Fecha Tentativa del Evento *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="invitados" className="block text-sm font-medium mb-2">
                    Número de Invitados *
                  </label>
                  <select
                    id="invitados"
                    name="invitados"
                    value={formData.invitados}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                  >
                    <option value="">Selecciona el N° de personas</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="mas">250 o más</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-gold-400 text-white"
                  placeholder="Cuéntanos más sobre tu evento, ideas especiales, requisitos dietéticos, etc."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black rounded py-2 px-2"
                severity='success'
                onClick={handleSubmit}
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos; 