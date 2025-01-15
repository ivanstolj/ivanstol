import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formData: { name: string; email: string; message: string }) => {
    console.log('Mensaje enviado:', formData); // Aquí puedes integrar con un servicio real como EmailJS o una API.
    setSubmitted(true);
  };

  return (
    <main className="p-4">
      <h2 className="text-2xl mb-4">Contáctame</h2>
      {submitted ? (
        <p className="text-green-600">¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</p>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </main>
  );
};

export default Contact;
