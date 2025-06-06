
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const SpanishAbout = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Acerca de Temp Message",
    "description": "Conoce la misión de Temp Message de proporcionar servicios seguros de correo temporal",
    "inLanguage": "es"
  };

  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="Acerca de Nosotros - Servicio de Email Enfocado en Privacidad"
        description="Conoce la misión de Temp Message de proporcionar direcciones de correo electrónico temporales seguras y anónimas. Descubre nuestro compromiso con la protección de privacidad."
        keywords="acerca temp message, empresa correo temporal, misión privacidad, equipo seguridad email"
        canonicalUrl="https://tempmessage.com/es/about"
        structuredData={structuredData}
        lang="es"
      />
      
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6">Acerca de Nosotros</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Bienvenido a Temp Message, tu fuente confiable para direcciones de correo temporales y desechables. 
              Nuestra misión es proporcionar una solución simple y efectiva para proteger tu privacidad en línea.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nuestra Misión</h2>
            <p className="text-gray-300 mb-4">
              En Temp Message, creemos que la privacidad en internet es un derecho fundamental. En el panorama digital actual,
              tu información personal está constantemente en riesgo de ser recopilada, analizada y vendida. Nuestro servicio
              proporciona una barrera entre tu bandeja de entrada personal y los servicios con los que interactúas en línea.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cómo Comenzamos</h2>
            <p className="text-gray-300 mb-4">
              Temp Message fue fundado en 2025 por un equipo de defensores de la privacidad y profesionales de seguridad que
              reconocieron la necesidad de herramientas de privacidad accesibles. Lo que comenzó como un pequeño proyecto ha crecido
              hasta convertirse en un servicio confiable utilizado por miles de personas cada día.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nuestra Tecnología</h2>
            <p className="text-gray-300 mb-4">
              Nuestro servicio utiliza tecnología avanzada para crear direcciones de correo temporales que expiran automáticamente
              después de un período establecido. Esto asegura que tu bandeja temporal no se convierta en un objetivo permanente
              para spam o recopilación de datos. Hemos diseñado nuestro sistema para ser rápido, confiable y fácil de usar.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compromiso con la Privacidad</h2>
            <p className="text-gray-300 mb-4">
              No rastreamos tu uso, no almacenamos datos personales y no monetizamos tu información.
              Nuestro servicio está diseñado para ser lo más enfocado en la privacidad posible, alineándose con nuestra misión central.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpanishAbout;
