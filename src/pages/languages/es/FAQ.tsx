
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { SEOHead } from '@/components/SEOHead';
import { useEffect } from 'react';

const SpanishFAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": "es",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es una dirección de correo temporal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una dirección de correo temporal es un email desechable que puedes usar para recibir correos sin revelar tu dirección de correo real. Expira automáticamente después de un período establecido."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Cuánto duran los correos temporales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los correos temporales duran típicamente entre 1-24 horas dependiendo del servicio. Todos los emails se eliminan automáticamente después de la expiración."
        }
      }
    ]
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="FAQ - Preguntas Frecuentes sobre Correo Electrónico Temporal"
        description="Encuentra respuestas a preguntas comunes sobre servicios de correo temporal, direcciones de email desechables, protección de privacidad y cómo usar nuestro servicio de forma segura."
        keywords="FAQ correo temporal, preguntas email desechable, ayuda temp mail, respuestas privacidad email"
        canonicalUrl="https://tempmessage.com/es/faq"
        structuredData={structuredData}
        lang="es"
      />
      
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Encuentra respuestas a preguntas comunes sobre nuestro servicio de correo temporal
          </p>
          
          <FAQ />
          
          <div className="mt-12 pt-8 border-t border-app-border">
            <h2 className="text-2xl font-bold text-white mb-4">¿Aún tienes preguntas?</h2>
            <p className="text-gray-300 mb-6">
              Si no encuentras la respuesta que buscas en nuestras preguntas frecuentes, no dudes en contactarnos.
              Estamos aquí para ayudarte y responderemos a tu consulta lo antes posible.
            </p>
            <a 
              href="/es/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-app-blue hover:bg-blue-600"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpanishFAQPage;
