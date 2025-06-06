
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  lang?: string;
  alternates?: Array<{ hreflang: string; href: string }>;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "temporary email, disposable email, fake email, temp mail, anonymous email, 10minutemail alternative, guerrillamail alternative, mailinator alternative, throwaway email, privacy protection, spam prevention, free email generator",
  canonicalUrl,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  structuredData,
  lang = "en",
  alternates = []
}: SEOHeadProps) => {
  const fullTitle = title.includes('Temp Message') ? title : `${title} | Temp Message - Free Temporary Email`;
  
  // Enhanced keywords with semantic variations
  const enhancedKeywords = `${keywords}, disposable email addresses, temporary inbox, anonymous email service, email privacy protection, spam blocker email, free fake email generator, instant temporary email, secure disposable email, private email addresses, email anonymizer, temporary email API, disposable email service, throw away email addresses, burner email addresses, temporary email client, disposable gmail alternative, temporary outlook alternative, anonymous yahoo mail alternative, secure temporary email, encrypted disposable email, instant email addresses, quick temporary email, fast disposable email, reliable temp mail, trustworthy temporary email, professional disposable email, business temporary email, developer temp mail, testing email addresses, verification email service, signup email protection, registration email safety, online privacy email, digital privacy protection, email security service, anti-spam email solution, email protection service, temporary email 2025, best disposable email 2025, top temporary email service, leading temp mail provider, premium temporary email free, enterprise temporary email, unlimited disposable email, custom temporary email, branded disposable email, white label temp mail`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Temp Message Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="generator" content="Temp Message SEO Engine" />
      <meta name="classification" content="Business" />
      <meta name="category" content="Internet Services" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 day" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Temp Message - Free Temporary Email Service" />
      <meta property="og:site_name" content="Temp Message" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`} />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Temp Message - Best Free Temporary Email Service" />
      <meta name="twitter:site" content="@tempmessage" />
      <meta name="twitter:creator" content="@tempmessage" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-TileImage" content="/favicon-144.png" />
      <meta name="application-name" content="Temp Message" />
      <meta name="apple-mobile-web-app-title" content="Temp Message" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geo targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="39.7392, -104.9903" />
      
      {/* Language alternates */}
      {alternates.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Enhanced Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Temp Message",
          "url": "https://tempmessage.com",
          "logo": "https://tempmessage.com/logo.png",
          "sameAs": [
            "https://twitter.com/tempmessage",
            "https://facebook.com/tempmessage",
            "https://linkedin.com/company/tempmessage"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "French", "German", "Chinese"]
          }
        })}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Additional performance hints */}
      <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Helmet>
  );
};
