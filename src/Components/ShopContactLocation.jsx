import { MapPin, Phone, Clock, MessageCircle, Navigation, Store, Award, CalendarCheck, Users, Zap } from "lucide-react"

const ShopContactLocation = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-16 bg-gradient-to-br from-emerald-50 via-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">📍 Visit Our Store</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted mobile partner with premium service and genuine products. Come visit us or get in touch today!
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
            {/* Card Header with Image */}
            <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-emerald-700">
              <img
                src="/Images/Shop.png"
                alt="Store Location"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-4 left-4 bg-white/30 rounded-full p-3 flex items-center justify-center">
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
                    <h4 className="font-semibold text-gray-800 mb-1">Cell City Telecom</h4>
                    <p className="text-gray-600 leading-relaxed">
                      UG-4A, Kailash Plaza, Shah Market
                      <br />
                      Mahatma Gandhi Road
                      <br />
                      Agra, Uttar Pradesh 282002
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Store Hours</p>
                    <p className="text-gray-600">
                      Tuesday: Closed
                      <br />
                      Wed-Mon: 11:00 AM - 9:00 PM
                    </p>
                    <p className="text-sm text-gray-500 mt-1">*Hours might differ on festivals for certain days.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//UG-4A+,Kailash+Plaza,+Shah+Market,+Mahatma+Gandhi+Road,+Agra,+Uttar+Pradesh+282002/@27.2046413,77.9229555,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3974774452ec7f59:0x9c63dc4155176411!2m2!1d78.005357!2d27.2046654?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
            {/* Card Header with Pattern */}
            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-black">
              <img
                src="/Images/Service.png"
                alt="Contact Us"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-4 left-4 bg-emerald-500/30 rounded-full p-3 flex items-center justify-center">
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
                    <a href="tel:+917895431497" className="text-xl font-semibold text-emerald-600 hover:underline">
                      +91 78954 31497
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <a
                      href="https://wa.me/917895431497"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-600 hover:underline"
                    >
                      Quick replies guaranteed!
                    </a>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                  <p className="text-sm text-emerald-800">
                    <span className="font-semibold">⚡ Fast Response:</span> We reply within 5 minutes during business
                    hours
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <a
                  href="tel:+917895431497"
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/917895431497"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Authorized Dealer</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">10K+ Happy Customers</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Same Day Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopContactLocation
