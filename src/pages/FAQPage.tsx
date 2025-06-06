
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { SEOHead } from '@/components/SEOHead';
import { useEffect } from 'react';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a temporary email address?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A temporary email address is a disposable email that you can use to receive emails without revealing your real email address. It automatically expires after a set time period."
        }
      },
      {
        "@type": "Question", 
        "name": "How long do temporary emails last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temporary emails typically last between 1-24 hours depending on the service. All emails are automatically deleted after expiry."
        }
      }
    ]
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="FAQ - Frequently Asked Questions About Temporary Email"
        description="Find answers to common questions about temporary email services, disposable email addresses, privacy protection, and how to use our temporary email service safely."
        keywords="temporary email FAQ, disposable email questions, temp mail help, email privacy answers"
        canonicalUrl="https://tempmessage.com/faq"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Find answers to common questions about our temporary email service
          </p>
          
          <FAQ />
          
          <div className="mt-12 pt-8 border-t border-app-border">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              If you can't find the answer you're looking for in our FAQ, please don't hesitate to contact us.
              We're here to help and will respond to your inquiry as soon as possible.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-app-blue hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
