
import React from 'react';
import { Link } from 'react-router-dom';

export const InternalLinkingStrategy = () => {
  const keywordLinks = [
    {
      anchor: "temporary email service",
      url: "/features",
      title: "Learn about our temporary email features"
    },
    {
      anchor: "disposable email generator",
      url: "/how-it-works", 
      title: "How our disposable email generator works"
    },
    {
      anchor: "fake email alternatives",
      url: "/alternatives",
      title: "Compare fake email service alternatives"
    },
    {
      anchor: "anonymous email FAQ",
      url: "/faq",
      title: "Frequently asked questions about anonymous email"
    },
    {
      anchor: "privacy protection guide",
      url: "/blog",
      title: "Read our privacy protection blog"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-app-darker rounded-lg p-6 border border-app-border">
        <h3 className="text-lg font-semibold text-white mb-4">
          Related Resources for Email Privacy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keywordLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              title={link.title}
              className="text-app-blue hover:text-blue-400 text-sm transition-colors underline"
            >
              {link.anchor}
            </Link>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-app-border">
          <p className="text-gray-300 text-sm">
            Explore our comprehensive guides on <Link to="/features" className="text-app-blue hover:text-blue-400">temporary email features</Link>, 
            learn <Link to="/how-it-works" className="text-app-blue hover:text-blue-400">how disposable email works</Link>, 
            compare <Link to="/alternatives" className="text-app-blue hover:text-blue-400">email service alternatives</Link>, 
            and read our <Link to="/blog" className="text-app-blue hover:text-blue-400">privacy protection blog</Link> for expert insights.
          </p>
        </div>
      </div>
    </div>
  );
};
