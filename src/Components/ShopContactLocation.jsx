import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Store } from 'lucide-react';

const ShopContactLocation = () => {
return (
    <div className="w-full py-16 px-6 sm:px-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-gray-100">
    <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            📍 Visit Our Store
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted mobile partner with premium service and genuine products. 
            Come visit us or get in touch today!
        </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
            {/* Card Header with Image */}
            <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-700">
            <div className="absolute inset-0 bg-black/20"></div>
            <img 
        
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Store Location" 
                className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Store className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-1">Our Location</h3>
                <p className="text-emerald-100">Easy to find, easy to reach</p>
            </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
            <div className="space-y-4">
                <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-1">MobileZone Pro</h4>
                    <p className="text-gray-600 leading-relaxed">
                    Shop No. 15, Tech Plaza<br />
                    Sector 18, Noida - 201301<br />
                    Near Metro Station Gate 2
                    </p>
                </div>
                </div>

                <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                    <p className="font-medium text-gray-800">Store Hours</p>
                    <p className="text-gray-600">Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
                </div>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
            </button>
            </div>
        </div>

          {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
            {/* Card Header with Pattern */}
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-black">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full border-2 border-white animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-emerald-400 animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full border-2 border-white animate-pulse delay-1000"></div>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Contact Us" 
                className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute top-4 left-4 bg-emerald-500/20 backdrop-blur-sm rounded-full p-3">
                <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-1">Contact Us</h3>
                <p className="text-gray-200">We're here to help you</p>
            </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <p className="text-xl font-semibold text-emerald-600">+91 98765 43210</p>
                </div>
                </div>

                <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <p className="text-lg text-gray-600">Quick replies guaranteed!</p>
                </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <p className="text-sm text-emerald-800">
                    <span className="font-semibold">⚡ Fast Response:</span> We reply within 5 minutes during business hours
                </p>
                </div>
            </div>

            <div className="flex space-x-3 mt-6">
                <a 
                href="tel:+919876543210" 
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                <Phone className="w-4 h-4" />
                <span>Call</span>
                </a>
                <a 
                href="https://wa.me/919876543210" 
                  className="flex-1 bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
                </a>
            </div>
            </div>
        </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">Authorized Dealer</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">15+</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Years Experience</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">10K+</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">Same Day Service</span>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default ShopContactLocation;