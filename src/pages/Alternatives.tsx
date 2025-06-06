
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ExternalLink, Star, Shield, Clock, Mail, Zap } from 'lucide-react';

const Alternatives = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Temporary Email Alternatives 2025",
    "description": "Compare the best temporary email services and disposable email alternatives"
  };

  const alternatives = [
    {
      name: "Temp Message",
      url: "#",
      description: "Our own service - fast, secure, and completely anonymous temporary email solution.",
      rating: 5,
      features: ["No registration", "Auto-delete", "Instant setup", "Global access"],
      pros: ["Fastest generation", "Best privacy", "Clean interface", "No ads"],
      cons: ["Newer service"],
      recommended: true
    },
    {
      name: "10MinuteMail",
      url: "https://10minutemail.com",
      description: "Popular temporary email service with 10-minute email addresses that can be extended.",
      rating: 4.2,
      features: ["10-minute duration", "Extendable time", "Simple interface", "Mobile friendly"],
      pros: ["Well established", "Reliable", "Easy to use"],
      cons: ["Ads present", "Limited customization", "Short default time"]
    },
    {
      name: "Guerrilla Mail",
      url: "https://guerrillamail.com",
      description: "One of the oldest temporary email services with both disposable and scrambled email options.",
      rating: 4.0,
      features: ["Multiple domains", "Email sending", "Long retention", "API access"],
      pros: ["Multiple features", "Long history", "API available"],
      cons: ["Complex interface", "Slower loading", "Outdated design"]
    },
    {
      name: "Mailinator",
      url: "https://mailinator.com",
      description: "Public email system where all emails are automatically public and deleted after a few hours.",
      rating: 3.8,
      features: ["Public inboxes", "No registration", "API access", "Webhook support"],
      pros: ["Instant access", "Developer features", "No setup"],
      cons: ["Public emails", "Privacy concerns", "Limited time"]
    },
    {
      name: "TempMail",
      url: "https://temp-mail.org",
      description: "Simple temporary email service with automatic email generation and inbox viewing.",
      rating: 4.1,
      features: ["Auto generation", "Multiple domains", "Copy to clipboard", "Email forwarding"],
      pros: ["User friendly", "Multiple domains", "Good performance"],
      cons: ["Limited features", "Ads", "Basic interface"]
    },
    {
      name: "ThrowAwayMail",
      url: "https://throwaway.email",
      description: "Disposable email service focused on simplicity and quick email address generation.",
      rating: 3.9,
      features: ["Quick generation", "Clean design", "No registration", "Mobile optimized"],
      pros: ["Fast", "Clean design", "Simple"],
      cons: ["Limited retention", "Few features", "Basic functionality"]
    }
  ];

  const comparisonFeatures = [
    { name: "No Registration Required", key: "noReg" },
    { name: "Instant Generation", key: "instant" },
    { name: "Auto-Delete Emails", key: "autoDelete" },
    { name: "Custom Duration", key: "customTime" },
    { name: "Multiple Domains", key: "domains" },
    { name: "API Access", key: "api" },
    { name: "Mobile Friendly", key: "mobile" },
    { name: "Ad-Free Experience", key: "noAds" }
  ];

  const featureData: Record<string, Record<string, boolean>> = {
    "Temp Message": { noReg: true, instant: true, autoDelete: true, customTime: true, domains: true, api: false, mobile: true, noAds: true },
    "10MinuteMail": { noReg: true, instant: true, autoDelete: true, customTime: true, domains: false, api: false, mobile: true, noAds: false },
    "Guerrilla Mail": { noReg: true, instant: true, autoDelete: true, customTime: false, domains: true, api: true, mobile: true, noAds: false },
    "Mailinator": { noReg: true, instant: true, autoDelete: true, customTime: false, domains: false, api: true, mobile: true, noAds: false },
    "TempMail": { noReg: true, instant: true, autoDelete: true, customTime: false, domains: true, api: false, mobile: true, noAds: false },
    "ThrowAwayMail": { noReg: true, instant: true, autoDelete: true, customTime: false, domains: false, api: false, mobile: true, noAds: true }
  };

  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="Best Temporary Email Alternatives 2025 - Complete Comparison"
        description="Compare the best temporary email services and disposable email alternatives. Find the perfect temporary email solution for your privacy needs with our comprehensive guide."
        keywords="temporary email alternatives, disposable email comparison, best temp mail services, email privacy tools"
        canonicalUrl="https://tempmessage.com/alternatives"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-6">
              Best Temporary Email Alternatives 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare the top temporary email services and find the perfect disposable email 
              solution for your privacy needs. We've tested them all so you don't have to.
            </p>
          </div>
        </div>

        {/* Alternatives Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {alternatives.map((service, index) => (
              <div key={index} className={`bg-app-darker rounded-lg p-6 border ${service.recommended ? 'border-app-blue' : 'border-app-border'} relative`}>
                {service.recommended && (
                  <div className="absolute -top-3 left-6 bg-app-blue text-white px-3 py-1 rounded text-sm font-medium">
                    Recommended
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                      />
                    ))}
                    <span className="ml-2 text-gray-400 text-sm">{service.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-app-dark text-gray-300 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-400 mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {service.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-xs text-gray-400 flex items-center">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-red-400 mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {service.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-xs text-gray-400 flex items-center">
                          <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {service.url !== "#" ? (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-app-blue hover:text-blue-400 transition-colors"
                  >
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                ) : (
                  <a
                    href="/"
                    className="inline-flex items-center text-app-blue hover:text-blue-400 transition-colors"
                  >
                    Try Now <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-app-darker py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Feature Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-left py-4 px-4 text-white font-medium">Service</th>
                    {comparisonFeatures.map((feature, index) => (
                      <th key={index} className="text-center py-4 px-2 text-white font-medium text-sm">
                        {feature.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {alternatives.map((service, serviceIndex) => (
                    <tr key={serviceIndex} className="border-b border-app-border">
                      <td className="py-4 px-4 text-gray-300 font-medium">{service.name}</td>
                      {comparisonFeatures.map((feature, featureIndex) => (
                        <td key={featureIndex} className="py-4 px-2 text-center">
                          {featureData[service.name]?.[feature.key] ? (
                            <span className="text-green-400">✓</span>
                          ) : (
                            <span className="text-red-400">✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Selection Guide */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How to Choose the Right Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <Shield className="h-8 w-8 text-app-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Maximum Privacy</h3>
              <p className="text-gray-300 mb-4">
                Choose services that don't require registration and have strong privacy policies.
              </p>
              <p className="text-sm text-app-blue">Recommended: Temp Message, ThrowAwayMail</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <Zap className="h-8 w-8 text-app-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Quick Tasks</h3>
              <p className="text-gray-300 mb-4">
                Services with instant generation and clean interfaces work best for one-off uses.
              </p>
              <p className="text-sm text-app-blue">Recommended: 10MinuteMail, Temp Message</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <Clock className="h-8 w-8 text-app-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Longer Retention</h3>
              <p className="text-gray-300 mb-4">
                Some services offer longer email retention or the ability to extend email lifetime.
              </p>
              <p className="text-sm text-app-blue">Recommended: Guerrilla Mail, 10MinuteMail</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <Mail className="h-8 w-8 text-app-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Developers</h3>
              <p className="text-gray-300 mb-4">
                API access and webhook support make integration into applications easier.
              </p>
              <p className="text-sm text-app-blue">Recommended: Mailinator, Guerrilla Mail</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Try the Best Alternative?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience our fast, secure, and ad-free temporary email service today.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-app-blue hover:bg-blue-600 transition-colors"
            >
              Try Temp Message Now
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Alternatives;
