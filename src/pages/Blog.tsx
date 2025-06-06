
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Email Privacy: Why You Need Temporary Email Addresses",
    excerpt: "Discover how temporary email addresses can protect your privacy online and prevent spam from cluttering your inbox.",
    author: "Privacy Expert",
    date: "2025-06-01",
    slug: "ultimate-guide-email-privacy",
    readTime: "8 min read",
    category: "Privacy"
  },
  {
    id: 2,
    title: "10 Best Practices for Online Privacy in 2025",
    excerpt: "Learn the latest techniques to maintain your digital privacy and security in an increasingly connected world.",
    author: "Security Analyst",
    date: "2025-05-28",
    slug: "online-privacy-best-practices-2025",
    readTime: "12 min read",
    category: "Security"
  },
  {
    id: 3,
    title: "How Disposable Emails Prevent Data Breaches",
    excerpt: "Understanding how temporary email services can minimize your exposure to data breaches and identity theft.",
    author: "Tech Writer",
    date: "2025-05-25",
    slug: "disposable-emails-prevent-data-breaches",
    readTime: "6 min read",
    category: "Technology"
  },
  {
    id: 4,
    title: "The Complete Guide to Anonymous Online Registration",
    excerpt: "Step-by-step instructions for signing up to services while maintaining complete anonymity.",
    author: "Privacy Advocate",
    date: "2025-05-22",
    slug: "anonymous-online-registration-guide",
    readTime: "10 min read",
    category: "Guides"
  }
];

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Temp Message Blog",
    "description": "Latest insights on email privacy, digital security, and temporary email best practices",
    "url": "https://tempmessage.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Temp Message",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tempmessage.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-app-dark">
      <SEOHead
        title="Privacy & Security Blog"
        description="Expert insights on email privacy, digital security, and temporary email best practices. Stay informed about the latest privacy protection techniques."
        keywords="email privacy blog, digital security, temporary email tips, online anonymity, privacy protection"
        canonicalUrl="https://tempmessage.com/blog"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Privacy & Security Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest insights on email privacy, digital security, 
              and best practices for protecting your online identity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-app-darker rounded-lg border border-app-border overflow-hidden hover:border-app-blue transition-colors">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="bg-app-blue text-white px-2 py-1 rounded text-xs mr-3">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-app-blue hover:text-blue-400 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want to Stay Updated?</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest privacy tips and security insights.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-app-darker border border-app-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-app-blue"
              />
              <button className="px-6 py-2 bg-app-blue hover:bg-blue-600 text-white rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
