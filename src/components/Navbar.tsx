import { useState } from 'react';
import { Menu, X, Utensils, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle smooth scroll for hash links on same page
  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    setShowProducts(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const products = [
    { name: 'Table Management', path: '/features?tab=dashboard', description: 'Visual layout & occupancy' },
    { name: 'Order Management', path: '/features?tab=dashboard', description: 'Streamlined order flow' },
    { name: 'QR Menu', path: '/features?tab=dashboard', description: 'Contactless ordering' },
    { name: 'Inventory', path: '/features?tab=admin', description: 'Stock tracking & recipes' },
    { name: 'Analytics', path: '/features?tab=admin', description: 'Business insights' },
    { name: 'Billing', path: '/features?tab=dashboard', description: 'GST ready billing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              TechDine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive('/') ? 'text-primary-600' : 'text-gray-700'}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-600 ${location.pathname === '/features' ? 'text-primary-600' : 'text-gray-700'
                  }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${showProducts ? 'rotate-180' : ''}`} />
              </button>

              {showProducts && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.path}
                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => handleLinkClick(product.path)}
                      >
                        <div className="font-semibold text-gray-900 mb-0.5">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive(link.path) ? 'text-primary-600' : 'text-gray-700'
                  }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/jaipur"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/demo"
              className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg shadow-primary-600/30"
            >
              Book Free Demo
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>

            <div className="px-4 py-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Products</div>
              <div className="space-y-1 pl-2 border-l-2 border-gray-100">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(product.path.split('?')[0]) ? 'text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => handleLinkClick(product.path)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/jaipur"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/demo"
              className="block px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
