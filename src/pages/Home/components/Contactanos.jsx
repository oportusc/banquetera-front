import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  telefono: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Número de teléfono inválido')
    .required('El telefono es requerido'),
  tipoEvento: Yup.string()
    .required('Debes seleccionar un tipo de evento'),
  fecha: Yup.date()
    .min(new Date(Date.now() + 24 * 60 * 60 * 1000), 'La fecha debe ser al menos mañana')
    .required('La fecha es requerida'),
  invitados: Yup.number()
    .min(1, 'Debe ser al menos 1 invitado')
    .max(1000, 'Máximo 1000 invitados')
    .required('Debes ingresar el número de invitados'),
  mensaje: Yup.string()
    .max(500, 'El mensaje no puede exceder 500 caracteres')
});

const Contactanos = ({detallado}) => {
  const toast = useRef(null);

  const initialValues = {
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    invitados: '',
    mensaje: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...values
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
        resetForm();
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contactanos" className={`bg-black text-white ${detallado ? 'sm:py-8':'py-10 sm:py-12'} `}>
      <Toast ref={toast} />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="text-center">
          <h2 className={`${detallado ? 'italic text-5xl sm:text-6xl': 'text-6xl sm:text-7xl'} text-center font-cormorant text-amber-500 font-medium leading-none`}>Solicita tu Cotización</h2>
        </div>
        <div className="pt-10 sm:pt-20">
          {/* Formulario con Formik */}
          <div className="bg-slate-600 rounded-lg p-4 sm:p-8 sm:w-[120vh]">
            {/* <div className='flex'>
              <h3 className="text-4xl font-semibold mb-8 text-gold-400 font-cormorant text-amber-500 mx-auto">Solicita tu Cotización</h3>
            </div> */}

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                // className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className='flex flex-col gap-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-lg font-medium mb-2">
                          Nombre y Apellido <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          type="text"
                          id="nombre"
                          name="nombre"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.nombre && touched.nombre
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                          placeholder="Nombre y Apellido"
                        />
                        <ErrorMessage
                          name="nombre"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                          Email <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.email && touched.email
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                          placeholder="eventosoyp@gmail.com"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telefono" className="block text-lg font-medium mb-2">
                          Teléfono <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          type="tel"
                          id="telefono"
                          name="telefono"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.telefono && touched.telefono
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                          placeholder="9 8729 7888"
                        />
                        <ErrorMessage
                          name="telefono"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label htmlFor="tipoEvento" className="block text-lg font-medium mb-2">
                          Tipo de Evento <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          as="select"
                          id="tipoEvento"
                          name="tipoEvento"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.tipoEvento && touched.tipoEvento
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                        >
                          <option value="">Selecciona el Tipo de Evento</option>
                          <option value="boda">Matrimonio</option>
                          <option value="corporativo">Evento Empresa</option>
                          <option value="graduacion">Graduacion</option>
                          <option value="cumpleanos">Cumpleaños</option>
                          <option value="coffeeBreak">Coffee Break</option>
                          <option value="otro">Otro</option>
                        </Field>
                        <ErrorMessage
                          name="tipoEvento"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fecha" className="block text-lg font-medium mb-2">
                          Fecha del Evento <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          type="date"
                          id="fecha"
                          name="fecha"
                          min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.fecha && touched.fecha
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                        />
                        <ErrorMessage
                          name="fecha"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label htmlFor="invitados" className="block text-lg font-medium mb-2">
                          Número de Invitados <b className='text-red-500 font-normal'>*</b>
                        </label>
                        <Field
                          type="number"
                          id="invitados"
                          name="invitados"
                          min="1"
                          max="1000"
                          className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.invitados && touched.invitados
                            ? 'border-red-500'
                            : 'border-gray-600 focus:border-gold-400'
                            }`}
                          placeholder="Ej: 150"
                        />
                        <ErrorMessage
                          name="invitados"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-lg font-medium mb-2">
                        Descripcion
                      </label>
                      <Field
                        as="textarea"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none text-white ${errors.mensaje && touched.mensaje
                          ? 'border-red-500'
                          : 'border-gray-600 focus:border-gold-400'
                          }`}
                        placeholder="Cuéntanos más sobre tu evento"
                      />
                      <ErrorMessage
                        name="mensaje"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                    <div className='flex'>
                      <Button
                        type="submit"
                        className="border border-1 border-amber-400 hover:bg-amber-600 hover:border-amber-600 text-white font-semibold px-8 py-3 rounded-md mx-auto"
                        severity='success'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos; 