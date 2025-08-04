import React, { useState, useEffect } from 'react';
import {FaMobileAlt,FaHeadphones,FaTv,FaTools,FaMapMarkerAlt,FaPhone,FaBars,FaTimes,FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../Store/authSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

const handleLogout = async () => {
  const result = await dispatch(logoutThunk());

  if (logoutThunk.fulfilled.match(result)) {
    window.location.href = "/admin/login";
  } else {
    alert("Logout failed.");
  }
};



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: FaMobileAlt, label: 'Mobiles', path: '/mobiles', description: 'Latest smartphones & repairs' },
    { icon: FaHeadphones, label: 'Accessories', path: '/accessories', description: 'Premium mobile accessories' },
    { icon: FaTv, label: 'Electronics', path: '/electronics', description: 'Consumer electronics' },
    { icon: FaTools, label: 'Repairs', path: '/repairs', description: 'Expert repair services' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-emerald-500/10' 
          : 'bg-black shadow-lg'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">

            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-400/40 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img 
                      src="/Images/Logo.jpeg"
                      alt="Cell City Logo" 
                      className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center">
                      <FaMobileAlt className="text-emerald-400 text-lg" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping group-hover:animate-none"></div>
              </div>
              <div className="transition-all duration-300 group-hover:transform group-hover:translate-x-1">
                <Link to="/" className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:via-white group-hover:to-emerald-400 transition-all duration-300">
                  Cell City
                </Link>
                <p className="text-xs text-gray-400 -mt-1 group-hover:text-emerald-300 transition-colors duration-300">
                  Telecom
                </p>
              </div>
            </div>

            {/* Desktop Services */}
            <div className="hidden lg:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="group relative">
                  <div className="flex flex-col items-center cursor-pointer p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-2 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                      <service.icon size={18} className="group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-emerald-400 transition-colors duration-300">
                      {service.label}
                    </span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-emerald-500/20">
                    {service.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-t border-l border-emerald-500/20"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium hover:text-emerald-400 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                <span className="hidden sm:inline">
                  {isMobileMenuOpen ? 'Close' : 'Explore'}
                </span>
              </button>
            </div>

            {/* Right Contact Links */}
            <div className="flex items-center gap-2">
              {isAdmin && (
  <button
    onClick={handleLogout}
    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 border border-red-400/30 rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
  >
    Logout
  </button>
)}

              <Link
                to="/repairs"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400/30 rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/25 hover:transform hover:scale-105"
              >
                <FaTools size={14} />
                Repair Services
              </Link>
              <div className="flex items-center gap-1">
                <a href="https://www.google.com/maps/place/Cell+City+Communications" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:transform hover:scale-110 group">
                  <FaMapMarkerAlt size={16} className="group-hover:text-white transition-colors" />
                </a>
                <a href="tel:+911234567890" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:transform hover:scale-110 group">
                  <FaPhone size={16} className="group-hover:text-white transition-colors" />
                </a>
                <Link to="/contact" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:transform hover:scale-110 group">
                  <FaEnvelope size={16} className="group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-20 left-0 right-0 bg-black border-t border-gray-800 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {services.map((service, index) => (
                  <Link key={index} to={service.path} className="flex items-center gap-3 p-4 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300">
                      <service.icon size={16} className="group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium group-hover:text-emerald-400 transition-colors">{service.label}</h3>
                      <p className="text-xs text-gray-400">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <Link to="/repairs" className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                  <FaTools size={16} />
                  Book Repair Service
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+911234567890" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-500">
                    <FaPhone size={14} />
                    Call Now
                  </a>
                  <a href="https://www.google.com/maps/place/Cell+City+Communications" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-500">
                    <FaMapMarkerAlt size={14} />
                    Visit Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
