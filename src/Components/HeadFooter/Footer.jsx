// src/components/Footer.jsx
import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaTools,
  FaHome,
  FaAddressCard,
  FaMobileAlt,
  FaClock,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo with fallback */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="/Images/Logo.jpeg" 
                  alt="Cell City Logo"
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <FaMobileAlt className="text-white text-xl hidden" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Cell City
                </h3>
                <p className="text-sm text-gray-400">Telecom</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for all mobile device repairs and communication solutions. 
              Quality service with genuine care.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FaHome className="mr-2 text-emerald-400" size={16} />
              Quick Links
            </h4>
            <div className="space-y-3">
              <a href="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </a>
              <a href="/repairs" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <FaTools className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                Repairs
              </a>
              <a href="/services" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Services
              </a>
              <a href="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <FaAddressCard className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FaAddressCard className="mr-2 text-emerald-400" size={16} />
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-emerald-600 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                  <FaPhone size={12} />
                </div>
                <a href="tel:+911234567890" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  +91 12345 67890
                </a>
              </div>
              
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-emerald-600 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                  <FaEnvelope size={12} />
                </div>
                <a href="mailto:info@cellcity.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  info@cellcity.com
                </a>
              </div>
              
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-1 transition-colors duration-300">
                  <FaMapMarkerAlt size={12} />
                </div>
                <a
                  href="https://maps.google.com/?q=Cell City Communications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  123 Tech Street, Digital Plaza<br />
                  Agra, Uttar Pradesh
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FaClock className="mr-2 text-emerald-400" size={16} />
              Business Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon - Fri:</span>
                <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span className="text-white font-medium">11:00 AM - 4:00 PM</span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-lg border border-emerald-500/20">
              <p className="text-sm text-gray-300 mb-2">Need urgent repair?</p>
              <a href="tel:+911234567890" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">
                <FaPhone className="mr-2" size={12} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Cell City Communications. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            <div className="flex items-center text-gray-500">
              Made with <FaHeart className="text-red-500 mx-1" size={12} /> in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;