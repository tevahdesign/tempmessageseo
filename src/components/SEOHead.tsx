
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
      <style>
[data-keyword-cloud]{display:none;}
</style>
      <!-- SEO Pro Kit — tailored for https://www.tempmessage.com/ -->
<style>
  /* Minimal: keep crawlable blocks unobtrusive. Remove display:none to surface to users. */
  [data-seo-faq],[data-seo-keycloud],[data-seo-links]{display:none;}
  .sr-only{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap}
</style>

<script>
(function(){
  // ========== CONFIG — customize if needed ==========
  const CONFIG = {
    siteName: "TempMessage",
    siteUrl: "https://www.tempmessage.com",
    shortDesc: "TempMessage — get temporary message addresses to receive messages and OTPs without using your real inbox. Fast, anonymous, and free.",
    contactEmail: "webmaster@tempmessage.com",
    logo: "https://www.tempmessage.com/assets/logo-512.png", // replace if different
    topKeywords: [
      "temporary message",
      "temporary email",
      "disposable inbox",
      "receive otp online",
      "anonymous messages",
      "temp message for verification",
      "burner message address",
      "temp inbox",
      "receive emails without signup",
      "disposable email address",
      "tempmessage"
    ],
    internalPages: {
      "Temporary Message":"https://www.tempmessage.com/temporary-message",
      "Receive OTP":"https://www.tempmessage.com/receive-otp",
      "How it Works":"https://www.tempmessage.com/how-it-works",
      "Privacy":"https://www.tempmessage.com/privacy",
      "FAQ":"https://www.tempmessage.com/faq"
    },
    faq: [
      {q:"What is TempMessage?", a:"TempMessage provides temporary message/inbox addresses that let you receive messages and verification codes without exposing your real email."},
      {q:"Can I get OTPs with TempMessage?", a:"Yes — most verification emails and OTPs will be received by a TempMessage address instantly."},
      {q:"Do messages expire?", a:"Yes — temporary addresses are short-lived. Check the specific page for expiry timeframes."}
    ],
    pingSitemap: false,
    sitemapUrl: "https://www.tempmessage.com/sitemap.xml",
    targetIndiaBoost: true
  };

  // ========== Helpers ==========
  const head = document.head || document.getElementsByTagName('head')[0];
  const body = document.body || document.getElementsByTagName('body')[0];

  function insertMeta(name, content, prop=false){
    if(!content) return;
    const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    const existing = document.querySelector(selector);
    if(existing){ existing.setAttribute('content', content); return; }
    const m = document.createElement('meta');
    if(prop) m.setAttribute('property', name); else m.setAttribute('name', name);
    m.setAttribute('content', content);
    head.appendChild(m);
  }

  // 1) Title & Description fallback
  (function setTitleAndDesc(){
    const defaultTitle = CONFIG.siteName + " — Temporary message addresses & disposable inboxes";
    if(!document.title) document.title = defaultTitle;
    const existingDesc = document.querySelector('meta[name="description"]')?.content || "";
    if(!existingDesc || existingDesc.length < 50){
      insertMeta("description", CONFIG.shortDesc);
    }
    // OpenGraph & Twitter
    insertMeta("og:title", document.title, true);
    insertMeta("og:description", CONFIG.shortDesc, true);
    insertMeta("og:type", "website", true);
    insertMeta("og:url", location.href, true);
    insertMeta("og:site_name", CONFIG.siteName, true);
    insertMeta("og:image", CONFIG.logo, true);
    insertMeta("twitter:card", "summary_large_image");
    insertMeta("twitter:title", document.title);
    insertMeta("twitter:description", CONFIG.shortDesc);
  })();

  // 2) Performance hints (preconnect + preload logo)
  (function addPerfHints(){
    const resources = [
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com", cross:true},
      {rel:"preload", href:CONFIG.logo, as:"image"}
    ];
    resources.forEach(r=>{
      if(!r.href) return;
      const tag = document.createElement('link');
      tag.rel = r.rel;
      tag.href = r.href;
      if(r.as) tag.as = r.as;
      if(r.cross) tag.crossOrigin = "anonymous";
      head.appendChild(tag);
    });
  })();

  // 3) JSON-LD: WebApplication + Organization + FAQPage
  (function addJsonLd(){
    const webapp = {
      "@context":"https://schema.org",
      "@type":"WebApplication",
      "name": CONFIG.siteName,
      "url": CONFIG.siteUrl,
      "logo": CONFIG.logo,
      "description": CONFIG.shortDesc,
      "applicationCategory":"Utility",
      "operatingSystem":"All",
      "author": {"@type":"Organization","name":CONFIG.siteName,"url":CONFIG.siteUrl}
    };

    const org = {
      "@context":"https://schema.org",
      "@type":"Organization",
      "name": CONFIG.siteName,
      "url": CONFIG.siteUrl,
      "logo": CONFIG.logo,
      "contactPoint":[{"@type":"ContactPoint","email":CONFIG.contactEmail,"contactType":"customer support"}]
    };

    const faqSchema = {
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity": CONFIG.faq.map(f=>({
        "@type":"Question",
        "name": f.q,
        "acceptedAnswer":{"@type":"Answer","text": f.a}
      }))
    };

    const put = (obj) => {
      const s = document.createElement('script');
      s.type = "application/ld+json";
      s.text = JSON.stringify(obj);
      head.appendChild(s);
    };
    put(webapp); put(org); put(faqSchema);
  })();

  // 4) Crawlable blocks: FAQ, keyword cloud, internal links (crawlable & accessible)
  (function addCrawlableBlocks(){
    const faqHtml = `<section aria-label="FAQ" data-seo-faq>
      <h2 class="sr-only">Frequently Asked Questions</h2>
      ${CONFIG.faq.map(f=>`<div><h3>${f.q}</h3><div>${f.a}</div></div>`).join("")}
    </section>`;
    body.insertAdjacentHTML('beforeend', faqHtml);

    const keyHtml = `<nav aria-label="Related searches" data-seo-keycloud>
      <h2 class="sr-only">Related searches</h2>
      <ul>${CONFIG.topKeywords.map(k=>`<li>${k}</li>`).join("")}</ul>
    </nav>`;
    body.insertAdjacentHTML('beforeend', keyHtml);

    const linksHtml = `<nav aria-label="Related pages" data-seo-links>
      <h2 class="sr-only">Related pages</h2>
      <ul>${Object.entries(CONFIG.internalPages).map(([t,u])=>`<li><a href="${u}">${t}</a></li>`).join("")}</ul>
    </nav>`;
    body.insertAdjacentHTML('beforeend', linksHtml);
  })();

  // 5) Optional sitemap ping (disabled by default) — server-side preferred
  (function pingSitemap(){
    if(!CONFIG.pingSitemap) return;
    try{
      const pingUrls = [
        `https://www.google.com/ping?sitemap=${encodeURIComponent(CONFIG.sitemapUrl)}`,
        `https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(CONFIG.sitemapUrl)}`
      ];
      pingUrls.forEach(url=>{
        if(navigator.sendBeacon) navigator.sendBeacon(url);
        else fetch(url, {method:"GET", mode:"no-cors"}).catch(()=>{});
      });
    }catch(e){}
  })();

  // 6) India-target boost: add hreflang link and small region hint if requested
  (function indiaBoost(){
    if(!CONFIG.targetIndiaBoost) return;
    // add hreflang pointing to en-IN (server-side hreflang is best)
    if(!document.querySelector('link[rel="alternate"][hreflang="en-IN"]')){
      const ln = document.createElement('link');
      ln.rel = "alternate";
      ln.hreflang = "en-IN";
      ln.href = CONFIG.siteUrl;
      head.appendChild(ln);
    }
    // small meta region hint
    insertMeta("geo.region", "IN");
  })();

  // 7) Expose hook for server migration or analytics
  window.__SEO_PRO__ = {
    config: CONFIG,
    title: document.title,
    loc: location.href
  };

})();
</script>

<script>
(function(){
  const tags = [
    "temp mail", "temporary email", "fake email", "receive otp", "burner email",
    "anonymous inbox", "disposable email address", "secure temp mail", 
    "temporary gmail alternative", "receive otp online", "no signup email",
    "temporary mailbox", "temporary email for testing", "email privacy tool",
    "temp mail for instagram", "temp mail for whatsapp", "receive otp instantly",
    "temporary inbox", "fake email generator", "temp mail free service"
  ];
  document.body.insertAdjacentHTML("beforeend",
    `<div data-keyword-cloud><h2>Popular Searches:</h2><ul>${
      tags.map(t=>`<li>${t}</li>`).join("")
    }</ul></div>`
  );
})();
</script>

      <script>
(function(){
  const title = document.title.toLowerCase();
  const map = {
    "temp mail": [
      "temporary email",
      "disposable email address",
      "anonymous inbox",
      "receive email without signup",
      "free temp mail service",
      "instant temporary mailbox",
      "temporary email without registration",
      "throwaway email generator",
      "temp mail for otp verification",
      "temporary email for signup",
      "online temp mail for instagram",
      "get temp email instantly",
      "best temp mail site 2025",
      "one time email address",
      "temporary email id generator",
      "fake inbox for verification",
      "short-lived email service",
      "receive messages without real email",
      "secure disposable mail",
      "temporary gmail alternative"
    ],
    "email": [
      "temporary inbox online",
      "fake email generator",
      "receive otp online",
      "burner email for verification",
      "secure temp mail service",
      "receive emails anonymously",
      "temporary mailbox without login",
      "fake mail generator 2025",
      "disposable mail for testing",
      "receive otp for free",
      "no signup email service",
      "anonymous mail inbox",
      "private temp mail service",
      "temporary email for developers",
      "receive activation link online",
      "temporary mailbox for websites",
      "spam-free disposable email",
      "fast temp mail service",
      "temporary inbox with attachments",
      "temporary email with custom domain"
    ],
    "otp": [
      "receive otp instantly",
      "temporary email for otp",
      "get otp online for whatsapp",
      "receive verification code online",
      "email otp receiver",
      "otp inbox without phone number",
      "verify account without real email",
      "disposable otp mail service",
      "receive google otp mail",
      "temporary otp mailbox",
      "receive instagram otp",
      "facebook otp email service",
      "get temp mail for otp login",
      "otp verification email generator",
      "email for temporary otp",
      "fast otp receiver online"
    ],
    "privacy": [
      "anonymous email address",
      "hide real email online",
      "protect your inbox",
      "secure temp mail generator",
      "stay private online",
      "email privacy tools",
      "avoid spam emails",
      "private burner inbox",
      "temporary private email service",
      "email privacy protection service"
    ]
  };

  let topic = Object.keys(map).find(k => title.includes(k));
  if(topic){
    const list = map[topic].map(k => `<li>${k}</li>`).join("");
    document.body.insertAdjacentHTML('beforeend', `<ul data-seo-keywords>${list}</ul>`);
  }
})();
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
