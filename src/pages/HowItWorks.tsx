
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ArrowRight, Mail, Shield, Clock, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Temporary Email Service",
    "description": "Step-by-step guide on how to use Temp Message temporary email service",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Generate Email",
        "text": "Click the generate button to instantly create a new temporary email address"
      },
      {
        "@type": "HowToStep", 
        "name": "Use Email",
        "text": "Copy the email address and use it for registrations or one-time communications"
      },
      {
        "@type": "HowToStep",
        "name": "Receive Messages",
        "text": "Check your temporary inbox to view received emails in real-time"
      },
      {
        "@type": "HowToStep",
        "name": "Auto-Delete",
        "text": "Emails automatically delete after the expiry period with no action required"
      }
    ]
  };

  const steps = [
    {
      number: "01",
      title: "Generate Your Temporary Email",
      description: "Click the 'Generate Email' button to instantly create a new disposable email address. No registration or personal information required.",
      icon: Mail,
      details: [
        "Instant generation in seconds",
        "No personal data required", 
        "Multiple email formats available",
        "Works with all major services"
      ]
    },
    {
      number: "02", 
      title: "Copy and Use Anywhere",
      description: "Copy your temporary email address and use it for website registrations, newsletter subscriptions, or any service requiring an email.",
      icon: Shield,
      details: [
        "One-click copy to clipboard",
        "Works with any website or service",
        "Perfect for trials and signups",
        "Protects your real email address"
      ]
    },
    {
      number: "03",
      title: "Receive Emails Instantly", 
      description: "Check your temporary inbox to view all received emails in real-time. Messages appear instantly without any delays.",
      icon: CheckCircle,
      details: [
        "Real-time email delivery",
        "No refresh needed",
        "Clean, organized inbox view",
        "Read emails immediately"
      ]
    },
    {
      number: "04",
      title: "Automatic Cleanup",
      description: "Your temporary emails automatically delete after the expiry period. No manual cleanup required - everything happens automatically.",
      icon: Clock,
      details: [
        "Automatic expiry system",
        "No manual deletion needed",
        "Zero digital footprint",
        "Complete privacy protection"
      ]
    }
  ];

  const useCases = [
    {
      title: "Website Registrations",
      description: "Sign up for websites without exposing your real email to potential spam.",
      scenarios: ["Trial accounts", "One-time purchases", "Contest entries", "Beta testing"]
    },
    {
      title: "Newsletter Subscriptions",
      description: "Subscribe to newsletters and promotional content without cluttering your inbox.",
      scenarios: ["Promotional offers", "Industry updates", "Event notifications", "Content downloads"]
    },
    {
      title: "Online Shopping",
      description: "Create accounts for online stores while keeping your personal email private.",
      scenarios: ["Guest checkouts", "Price comparisons", "Coupon hunting", "Product notifications"]
    },
    {
      title: "Social Media",
      description: "Join social platforms or forums without linking to your permanent email address.",
      scenarios: ["Platform testing", "Anonymous participation", "Community joining", "Content sharing"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="How It Works - Complete Guide to Temporary Email"
        description="Learn how to use Temp Message step-by-step. Complete guide to generating, using, and managing temporary email addresses for maximum privacy protection."
        keywords="how to use temporary email, disposable email guide, temp mail tutorial, email privacy guide"
        canonicalUrl="https://tempmessage.com/how-it-works"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-6">
              How Our Temporary Email Service Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protecting your privacy online is simple with our temporary email service. 
              Follow these easy steps to start using disposable email addresses today.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-app-blue mr-4">{step.number}</span>
                    <step.icon className="h-8 w-8 text-app-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-app-blue rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-app-darker rounded-lg p-8 border border-app-border">
                    <div className="aspect-video bg-gradient-to-br from-app-blue/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                      <step.icon className="h-16 w-16 text-app-blue" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Common Use Cases</h2>
              <p className="text-xl text-gray-300">
                Discover the many ways temporary email addresses can protect your privacy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-app-dark rounded-lg p-6 border border-app-border">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.scenarios.map((scenario, scenarioIndex) => (
                      <div key={scenarioIndex} className="flex items-center text-sm text-gray-400">
                        <ArrowRight size={14} className="mr-2 text-app-blue" />
                        {scenario}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <h3 className="text-lg font-bold text-white mb-2">How long do temporary emails last?</h3>
              <p className="text-gray-300">Temporary emails typically last for 1-24 hours depending on the service configuration. All emails are automatically deleted after the expiry period.</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <h3 className="text-lg font-bold text-white mb-2">Can I reply to emails from my temporary address?</h3>
              <p className="text-gray-300">Our service is designed for receiving emails only. For security and privacy reasons, sending emails from temporary addresses is not supported.</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <h3 className="text-lg font-bold text-white mb-2">Is my data stored or tracked?</h3>
              <p className="text-gray-300">No, we don't store personal data or track your usage. All emails are automatically deleted, and we don't maintain logs of your activity.</p>
            </div>
            
            <div className="bg-app-darker rounded-lg p-6 border border-app-border">
              <h3 className="text-lg font-bold text-white mb-2">Can I use temporary emails for important accounts?</h3>
              <p className="text-gray-300">Temporary emails are best for one-time use and non-critical registrations. For important accounts, we recommend using a permanent email address.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-app-darker py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Protecting Your Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust our temporary email service to keep their real inbox clean and private.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-app-blue hover:bg-blue-600 transition-colors"
            >
              Generate Your First Temporary Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
