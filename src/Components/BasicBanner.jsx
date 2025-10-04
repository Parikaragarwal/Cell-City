import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const BasicBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const rotatingDeals = [
    "INSTANT DISCOUNT ON ALL PHONES",
    "ZERO DOWN PAYMENT OPTIONS", 
    "ADDITIONAL BANK OFFERS AVAILABLE",
    "TRADE-IN BONUS UPTO ₹8000",
  ]

  const [currentDeal, setCurrentDeal] = useState(0)

  useEffect(() => {
    const dealInterval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % rotatingDeals.length)
    }, 3000)
    return () => clearInterval(dealInterval)
  }, [rotatingDeals.length])

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center py-2 z-20 shadow-md">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold px-2">
          <span>🔥 LIMITED OFFER</span>
          <span className="bg-yellow-400 text-blue-900 px-2 py-1 rounded-full font-black text-xs">
            {rotatingDeals[currentDeal]}
          </span>
          <span>⏰ GRAB NOW</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8 pt-12 sm:pt-16">
        <div className="text-center max-w-3xl">
          {/* Shop Name */}
          <h3
            className={`text-xl sm:text-3xl font-black tracking-wide mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ 
              transitionDelay: "0.2s", 
              textShadow: "0 0 15px rgba(99, 102, 241, 0.3)"
            }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ⭐ CELL CITY ⭐
            </span>
            <br />
            <span className="text-base sm:text-lg text-gray-700 font-semibold">
              Your Trusted Mobile Partner
            </span>
          </h3>

          {/* Main Headline */}
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-black mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: "0.4s",
              textShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
            }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              THE MOBILE
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
              SHOWCASE 🎉
            </span>
          </h1>

          {/* Slogan */}
          <p
            className={`text-base sm:text-xl md:text-2xl text-gray-700 mb-6 font-bold transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ 
              transitionDelay: "0.6s"
            }}
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Unbeatable prices. Top brands. Discover your next device.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button
                onClick={() => navigate("/accessories")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 text-sm sm:text-base border border-white/20"
            >
              🔥 Explore Devices
            </button>
            <button
                onClick={() => navigate("/mobiles")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 text-sm sm:text-base border border-white/20"
            >
              📱 View All Phones
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-2 overflow-hidden z-20 border-t border-white/20">
        <div className="animate-scroll whitespace-nowrap text-xs sm:text-sm font-semibold">
          🔥 iPhone 15 starting at ₹45,999 • Samsung S24 from ₹39,999 • OnePlus 12 at ₹32,999 • Vivo V30 with No Cost
          EMI • Oppo F25 with Free Accessories • Realme GT at Best Price 🔥
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  )
}

export default BasicBanner