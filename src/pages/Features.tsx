
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Shield, Clock, Mail, Lock, Trash2, Globe, Zap, Eye } from 'lucide-react';

const Features = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Temporary Email Features",
    "description": "Comprehensive list of features offered by Temp Message temporary email service",
    "url": "https://tempmessage.com/features"
  };

  const features = [
    {
      icon: Shield,
      title: "Complete Privacy Protection",
      description: "No personal information required. Your identity remains completely anonymous while using our service.",
      benefits: ["Zero data collection", "Anonymous usage", "No IP logging", "GDPR compliant"]
    },
    {
      icon: Clock,
      title: "Auto-Expiring Emails",
      description: "Emails automatically delete after a set time period, ensuring no permanent digital footprint.",
      benefits: ["Configurable expiry", "Automatic cleanup", "No storage worries", "Zero maintenance"]
    },
    {
      icon: Mail,
      title: "Instant Email Generation",
      description: "Get a new temporary email address instantly without any registration or sign-up process.",
      benefits: ["No registration", "Instant setup", "Multiple addresses", "Quick generation"]
    },
    {
      icon: Lock,
      title: "Secure Inbox Access",
      description: "Your temporary inbox is secured and only accessible through our encrypted connection.",
      benefits: ["SSL encryption", "Secure access", "Private viewing", "Protected content"]
    },
    {
      icon: Trash2,
      title: "Spam Protection",
      description: "Keep your real inbox clean by using disposable addresses for one-time registrations.",
      benefits: ["Spam isolation", "Clean main inbox", "Disposable use", "Easy disposal"]
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your temporary email from anywhere in the world with our globally distributed service.",
      benefits: ["Worldwide access", "Fast delivery", "Multiple regions", "24/7 availability"]
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Receive emails instantly in your temporary inbox with our high-speed email processing.",
      benefits: ["Instant delivery", "Real-time updates", "Fast processing", "Quick refresh"]
    },
    {
      icon: Eye,
      title: "No Tracking",
      description: "We don't track your usage, store personal data, or monitor your email content.",
      benefits: ["No analytics", "Zero tracking", "Private usage", "Anonymous browsing"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="Features - Advanced Temporary Email Service"
        description="Discover all the powerful features of Temp Message: instant email generation, auto-expiring messages, complete privacy protection, and spam prevention."
        keywords="temporary email features, disposable email benefits, anonymous email service, email privacy features"
        canonicalUrl="https://tempmessage.com/features"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-6">
              Powerful Features for Ultimate Email Privacy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our temporary email service is packed with advanced features designed to protect 
              your privacy and keep your real inbox clean from spam and unwanted emails.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-app-darker rounded-lg p-6 border border-app-border hover:border-app-blue transition-colors">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-app-blue mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-app-blue rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Temporary Email Service?
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-left py-4 px-6 text-white font-medium">Feature</th>
                    <th className="text-center py-4 px-6 text-white font-medium">Temp Message</th>
                    <th className="text-center py-4 px-6 text-white font-medium">Regular Email</th>
                    <th className="text-center py-4 px-6 text-white font-medium">Other Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-app-border">
                    <td className="py-4 px-6 text-gray-300">Privacy Protection</td>
                    <td className="py-4 px-6 text-center text-green-400">✓ Complete</td>
                    <td className="py-4 px-6 text-center text-red-400">✗ Limited</td>
                    <td className="py-4 px-6 text-center text-yellow-400">~ Partial</td>
                  </tr>
                  <tr className="border-b border-app-border">
                    <td className="py-4 px-6 text-gray-300">No Registration</td>
                    <td className="py-4 px-6 text-center text-green-400">✓ Yes</td>
                    <td className="py-4 px-6 text-center text-red-400">✗ Required</td>
                    <td className="py-4 px-6 text-center text-yellow-400">~ Sometimes</td>
                  </tr>
                  <tr className="border-b border-app-border">
                    <td className="py-4 px-6 text-gray-300">Auto-Delete</td>
                    <td className="py-4 px-6 text-center text-green-400">✓ Automatic</td>
                    <td className="py-4 px-6 text-center text-red-400">✗ Manual</td>
                    <td className="py-4 px-6 text-center text-yellow-400">~ Limited</td>
                  </tr>
                  <tr className="border-b border-app-border">
                    <td className="py-4 px-6 text-gray-300">Spam Protection</td>
                    <td className="py-4 px-6 text-center text-green-400">✓ Built-in</td>
                    <td className="py-4 px-6 text-center text-yellow-400">~ Basic</td>
                    <td className="py-4 px-6 text-center text-yellow-400">~ Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using our temporary email service today and experience the ultimate in email privacy protection.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-app-blue hover:bg-blue-600 transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
