import { Link } from 'react-router-dom';
import { Utensils, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TechDine</span>
            </div>
            <p className="text-sm mb-4">Empowering restaurants with cutting-edge technology for seamless operations and enhanced customer experiences.</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582975683965"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                title="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Tech_Dine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (formerly Twitter) profile"
                title="X"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1227"
                  className="w-4 h-4 fill-white"
                >
                  <path d="M714.163 519.284L1160.89 0H1052.33L661.152 450.887L355.19 0H0L468.909 682.305L0 1226.37H108.566L521.015 743.559L844.81 1226.37H1200L714.137 519.284H714.163ZM568.601 678.522L526.85 617.17L148.036 79.6953H304.617L608.815 514.551L650.566 575.903L1052.36 1146.67H895.783L568.601 678.548V678.522Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/tech.dine/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                title="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#products" className="hover:text-white transition-colors">QR Ordering</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Digital Menu</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">WhatsApp Bot</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Coming Soon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:techdine360@gmail.com" className="hover:text-white transition-colors">
                  techdine360@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+916203653946" className="hover:text-white transition-colors">
                  +91-6203653946
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Kukas, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 TechDine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
