
import { Header } from "@/components/Header";
import { EmailInfo } from "@/components/EmailInfo";
import { EmailGenerator } from "@/components/EmailGenerator";
import { InboxDisplay } from "@/components/InboxDisplay";
import { FAQ } from "@/components/FAQ";
import { BacklinkSection } from "@/components/BacklinkSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SEOHead } from "@/components/SEOHead";
import { KeywordOptimizedContent } from "@/components/KeywordOptimizedContent";
import { EmailProvider } from "@/contexts/EmailContext";
const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Temp Message - Free Temporary Email Service",
    "description": "Generate free temporary email addresses instantly. Best disposable email service for privacy protection, spam prevention, and anonymous online registrations. Better than 10minutemail, guerrillamail alternatives.",
    "url": "https://tempmessage.com",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Instant temporary email generation",
      "Auto-expiring disposable email addresses", 
      "No registration required fake email",
      "Complete privacy protection anonymous email",
      "Spam prevention throwaway email",
      "Better than 10minutemail alternative",
      "Free guerrillamail competitor",
      "Mailinator alternative service"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15430",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Best temporary email service I've used. Much better than 10minutemail and completely free!"
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Mike Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Perfect for protecting my real email from spam. The disposable email addresses work instantly."
      }
    ],
    "sameAs": [
      "https://twitter.com/tempmessage",
      "https://facebook.com/tempmessage",
      "https://linkedin.com/company/tempmessage"
    ]
  };

  return (
    <EmailProvider>
      <div className="min-h-screen flex flex-col bg-app-dark">
        <SEOHead
          title="Free Temporary Email Service - Best Disposable Email Generator 2025 | TempMessage"
          description="Generate free temporary email addresses instantly! Best disposable email service for privacy protection and spam prevention. Better than 10minutemail, guerrillamail, mailinator. No registration required for anonymous fake email addresses."
          keywords="temporary email, disposable email, temp mail, fake email, anonymous email, 10minutemail alternative, guerrillamail alternative, mailinator alternative, throwaway email, privacy protection, spam prevention, free temporary email generator, disposable email addresses, temporary inbox, anonymous email service"
          canonicalUrl="https://tempmessage.com"
          structuredData={structuredData}
        />
        
        <Header />
        <Hero />
        <div className="max-w-lg mx-auto w-full">
          <EmailInfo />
          <EmailGenerator />
          <InboxDisplay />
        </div>
        <KeywordOptimizedContent />
        <FAQ />
        <BacklinkSection />
        <Footer />
      </div>
    </EmailProvider>
  );
};

export default Index;
