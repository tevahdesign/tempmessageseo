
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Get current language from URL
  const getCurrentLanguage = () => {
    const pathParts = location.pathname.split('/');
    return pathParts[1] === 'es' || pathParts[1] === 'fr' || pathParts[1] === 'de' || pathParts[1] === 'zh' ? pathParts[1] : 'en';
  };
  
  const currentLang = getCurrentLanguage();
  const basePath = currentLang === 'en' ? '' : `/${currentLang}`;
  
  const navLinks = [
    { name: 'Home', path: basePath || '/' },
    { name: 'Features', path: `${basePath}/features` },
    { name: 'How It Works', path: `${basePath}/how-it-works` },
    { name: 'Alternatives', path: `${basePath}/alternatives` },
    { name: 'Blog', path: `${basePath}/blog` },
    { name: 'About', path: `${basePath}/about` },
    { name: 'FAQ', path: `${basePath}/faq` },
    { name: 'Contact', path: `${basePath}/contact` },
  ];

  return (
    <header className="bg-app-dark border-b border-app-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={basePath || '/'} className="flex items-center">
              <img 
                src="/lovable-uploads/3aae0e4e-4b58-4bc6-8b0e-569c6e0e2b58.png" 
                alt="Temp Message Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-2xl font-bold text-white">Temp Message</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`transition-colors duration-200 text-sm ${
                    location.pathname === link.path 
                      ? 'text-app-blue font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <LanguageSelector />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <LanguageSelector />
            <button
              className="text-white p-2 ml-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-app-darker border-t border-app-border">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  location.pathname === link.path
                    ? 'text-app-blue bg-app-dark'
                    : 'text-gray-300 hover:text-white hover:bg-app-darker'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
