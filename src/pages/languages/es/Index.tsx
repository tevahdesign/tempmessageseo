
import { Header } from "@/components/Header";
import { EmailInfo } from "@/components/EmailInfo";
import { EmailGenerator } from "@/components/EmailGenerator";
import { InboxDisplay } from "@/components/InboxDisplay";
import { FAQ } from "@/components/FAQ";
import { BacklinkSection } from "@/components/BacklinkSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SEOHead } from "@/components/SEOHead";
import { EmailProvider } from "@/contexts/EmailContext";

const SpanishHome = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Temp Message - Correo Temporal",
    "description": "Servicio gratuito de correo electrónico temporal para protección de privacidad y prevención de spam",
    "url": "https://tempmessage.com/es",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Navegador Web",
    "inLanguage": "es",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Generación instantánea de correo temporal",
      "Direcciones de correo que expiran automáticamente", 
      "Sin registro requerido",
      "Protección completa de privacidad",
      "Prevención de spam"
    ]
  };

  return (
    <EmailProvider>
      <div className="min-h-screen flex flex-col bg-app-dark">
        <SEOHead
          title="Temp Message - Servicio Gratuito de Correo Electrónico Temporal"
          description="Obtén direcciones de correo electrónico temporales instantáneas para proteger tu privacidad en línea. Sin registro requerido. Servicio gratuito de correo desechable con mensajes que expiran automáticamente."
          keywords="correo temporal, correo desechable, temp mail, email falso, correo anónimo, protección privacidad, prevención spam, dirección email temporal"
          canonicalUrl="https://tempmessage.com/es"
          structuredData={structuredData}
          lang="es"
        />
        
        <Header />
        <Hero />
        
        <div className="max-w-lg mx-auto w-full">
          <div className="p-6 bg-app-darker rounded-lg mt-8 shadow-lg border border-app-border">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">
              Correo Electrónico Temporal Gratuito
            </h1>
            <p className="text-gray-300 mb-4 text-center">
              Protege tu privacidad con nuestras direcciones de correo temporales. 
              Perfecto para registros, verificaciones y protección contra spam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-app-dark rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">🚀 Instantáneo</h3>
                <p className="text-gray-300 text-sm">Genera correos temporales al instante</p>
              </div>
              <div className="text-center p-4 bg-app-dark rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">🔒 Seguro</h3>
                <p className="text-gray-300 text-sm">Protección completa de privacidad</p>
              </div>
              <div className="text-center p-4 bg-app-dark rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">💰 Gratis</h3>
                <p className="text-gray-300 text-sm">100% gratuito, sin registro</p>
              </div>
            </div>
          </div>
          
          <EmailInfo />
          <EmailGenerator />
          <InboxDisplay />
          
          <div className="mt-8 p-6 bg-app-darker rounded-lg border border-app-border">
            <h2 className="text-2xl font-bold text-white mb-4">¿Por qué usar correo temporal?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-app-blue mr-2">✓</span>
                <span>Evita el spam en tu correo personal</span>
              </li>
              <li className="flex items-start">
                <span className="text-app-blue mr-2">✓</span>
                <span>Protege tu identidad online</span>
              </li>
              <li className="flex items-start">
                <span className="text-app-blue mr-2">✓</span>
                <span>Registros temporales en sitios web</span>
              </li>
              <li className="flex items-start">
                <span className="text-app-blue mr-2">✓</span>
                <span>Verificación de cuentas sin compromiso</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 py-8 bg-app-darker">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              La Mejor Solución de Correo Temporal en España
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-app-blue mb-2">10K+</div>
                <div className="text-gray-300">Usuarios Diarios</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-app-blue mb-2">99.9%</div>
                <div className="text-gray-300">Tiempo Activo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-app-blue mb-2">0€</div>
                <div className="text-gray-300">Coste Total</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-app-blue mb-2">24/7</div>
                <div className="text-gray-300">Disponibilidad</div>
              </div>
            </div>
          </div>
        </div>
        
        <FAQ />
        <BacklinkSection />
        <Footer />
      </div>
    </EmailProvider>
  );
};

export default SpanishHome;
