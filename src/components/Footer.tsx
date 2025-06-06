
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-app-darker border-t border-app-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Keywords */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/3aae0e4e-4b58-4bc6-8b0e-569c6e0e2b58.png" 
                alt="TempMessage - Best Free Temporary Email Service" 
                className="h-8 w-auto mr-3" 
              />
              <span className="text-xl font-bold text-white">Temp Message</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              The world's best <strong>free temporary email service</strong> for privacy protection. 
              Generate unlimited <em>disposable email addresses</em> instantly without registration. 
              Better than 10minutemail, guerrillamail, and mailinator alternatives. Protect your 
              real email from spam with our <strong>anonymous email generator</strong>.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
              <span className="bg-app-dark px-2 py-1 rounded">Free Temporary Email</span>
              <span className="bg-app-dark px-2 py-1 rounded">Disposable Email Generator</span>
              <span className="bg-app-dark px-2 py-1 rounded">Anonymous Email Service</span>
              <span className="bg-app-dark px-2 py-1 rounded">Spam Protection</span>
            </div>
          </div>

          {/* Quick Links with Keyword Anchors */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Temporary Email Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Free Temporary Email Generator
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Disposable Email Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm transition-colors">
                  How Temp Mail Works
                </Link>
              </li>
              <li>
                <Link to="/alternatives" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Email Service Alternatives
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Protection Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links with SEO Value */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Help & Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Temporary Email FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Our Email Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Keyword-Rich Bottom Section */}
        <div className="mt-8 pt-8 border-t border-app-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Popular Keywords & Searches</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">temporary email</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">disposable email</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">fake email</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">10minutemail alternative</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">guerrillamail alternative</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">temp mail</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">throwaway email</span>
                <span className="text-gray-400 bg-app-dark px-2 py-1 rounded">anonymous email</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Service Coverage</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Available worldwide: USA, UK, Canada, Australia, Germany, France, Spain, India, 
                Brazil, Japan, and 180+ countries. 24/7 temporary email service with instant delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright with Schema */}
        <div className="mt-8 pt-6 border-t border-app-border flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs">
            <p>&copy; 2025 <span itemProp="name">Temp Message</span>. All rights reserved.</p>
            <p className="mt-1">
              Best free temporary email service for privacy protection and spam prevention.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-4 text-xs">
            <a href="https://x.com/Tempmessage2024" 
               className="text-gray-400 hover:text-white"
               rel="noopener noreferrer" 
               target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com/tempmessageonline" 
               className="text-gray-400 hover:text-white"
               rel="noopener noreferrer" 
               target="_blank">
              instagram
            </a>
            <a href="https://www.linkedin.com/in/temp-message-b65229368" 
               className="text-gray-400 hover:text-white"
               rel="noopener noreferrer" 
               target="_blank">
              LinkedIn
            </a>
             <a href="https://www.youtube.com/channel/UCQXeZZYq8nwHxRGWkVOq-Sg" 
               className="text-gray-400 hover:text-white"
               rel="noopener noreferrer" 
               target="_blank">
              Youtube
            </a>
          </div>
        </div>
      </div>
      
      {/* Hidden SEO Content */}
      <div className="hidden" itemScope itemType="https://schema.org/WebApplication">
        <span itemProp="name">Temp Message - Free Temporary Email Service</span>
        <span itemProp="description">Best free disposable email generator for privacy protection</span>
        <span itemProp="url">https://tempmessage.com</span>
        <span itemProp="applicationCategory">UtilitiesApplication</span>
      </div>
    </footer>
  );
};
