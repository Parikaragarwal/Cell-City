import { useEffect, useState } from "react"

const FestivalHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const floatingBadges = [
    { text: "✨ BEST PRICE GUARANTEE", top: "18%", left: "8%", delay: "0s", color: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white" },
    { text: "🎁 COMPLIMENTARY GOODIES", top: "75%", left: "6%", delay: "1s", color: "bg-gradient-to-r from-teal-600 to-teal-700 text-white" },
    { text: "💳 NO COST EMI", top: "22%", left: "75%", delay: "0.5s", color: "bg-gradient-to-r from-green-600 to-green-700 text-white" },
    { text: "⚡ BANK OFFERS", top: "70%", left: "78%", delay: "1.5s", color: "bg-gradient-to-r from-emerald-700 to-teal-700 text-white" },
    // Removed some badges for mobile to reduce clutter
  ]

  const rotatingDeals = [
    "INSTANT DISCOUNT ON ALL PHONES",
    "ZERO DOWN PAYMENT OPTIONS", 
    "ADDITIONAL BANK OFFERS AVAILABLE",
    "TRADE-IN BONUS UPTO ₹8000",
  ]

  // Balanced confetti for energy
  const confetti = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: Math.random() * 80 + 10, // Keep within boundaries
    delay: Math.random() * 8,
    emoji: ["✨", "⭐", "💎", "🚀", "📱", "💰", "🎉", "⚡"][Math.floor(Math.random() * 8)],
    size: Math.random() * 0.4 + 0.8,
  }))

  const [currentDeal, setCurrentDeal] = useState(0)

  useEffect(() => {
    const dealInterval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % rotatingDeals.length)
    }, 3000)
    return () => clearInterval(dealInterval)
  }, [rotatingDeals.length])

  return (
    <div className="relative w-full h-[100vh] sm:h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60"></div>

      {/* Enhanced Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute text-xl sm:text-2xl animate-confetti z-10 opacity-80"
          style={{ 
            left: `${c.left}%`, 
            animationDelay: `${c.delay}s`,
            fontSize: `${c.size}rem`,
            filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))'
          }}
        >
          {c.emoji}
        </div>
      ))}

      {/* Top Banner - Vibrant but positioned well */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-800 via-blue-700 to-green-800 text-white text-center py-2.5 z-20 shadow-lg">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base font-bold px-2">
          <span className="animate-pulse">🔥 LIMITED PERIOD OFFER</span>
          <span className="bg-yellow-300 text-red-600 px-3 py-1 rounded-full animate-bounce-sm font-black shadow-lg text-xs sm:text-sm">
            {rotatingDeals[currentDeal]}
          </span>
          <span className="animate-pulse">⏰ GRAB NOW ⏰</span>
        </div>
      </div>

      {/* Floating Badges - Vibrant but well positioned */}
      {floatingBadges.map((badge, index) => (
        <div
          key={index}
          className={`absolute ${badge.color} font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xl animate-float border border-white/30 backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer ${index >= 2 ? 'hidden sm:block' : ''}`}
          style={{
            top: badge.top,
            left: badge.left,
            animationDelay: badge.delay,
            boxShadow: '0 8px 25px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.1)',
          }}
        >
          {badge.text}
        </div>
      ))}

      {/* Side Labels - Moved to corners */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white px-3 py-6 rounded-full rotate-[-90deg] text-xs font-bold shadow-lg border border-white/20 hidden sm:block">
        BEST PRICES
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-teal-600 to-teal-700 text-white px-3 py-6 rounded-full rotate-90 text-xs font-bold shadow-lg border border-white/20 hidden sm:block">
        FREE GOODIES
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-12 pt-16 sm:pt-20">
        <div className="text-center text-white max-w-4xl">
          {/* Shop Name - Balanced glow */}
          <h3
            className={`text-2xl sm:text-4xl font-black tracking-wide mb-3 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ 
              transitionDelay: "0.2s", 
              textShadow: "0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)"
            }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              ⭐ CELL CITY ⭐
            </span>
            <br />
            <span className="text-lg sm:text-xl text-gray-300 font-semibold">
              Your Trusted Mobile Partner
            </span>
          </h3>

          {/* Sub-brand - More vibrant */}
          <div
            className={`text-base sm:text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            Your one-stop shop for mobiles, deals, and reliable devices 💼📱
          </div>

          {/* Main Headline - Bigger and more impactful */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: "0.6s",
              textShadow: "0 0 20px rgba(16, 185, 129, 0.4), 3px 3px 0px rgba(0,0,0,0.7)",
            }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent animate-text-shimmer">
              THE MOBILE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-text-shimmer">
              SHOWCASE 🎉
            </span>
          </h1>

          {/* Slogan - More vibrant */}
          <p
            className={`text-lg sm:text-2xl md:text-3xl text-gray-300 mb-8 font-bold transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ 
              transitionDelay: "0.8s",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
            }}
          >
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Unbeatable prices. Top brands. Discover your next device.
            </span>
          </p>

          {/* CTA Buttons - Enhanced but balanced */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "1s" }}
          >
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black py-4 px-8 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-emerald-500/50 text-base sm:text-lg border-2 border-white/20 animate-glow">
              🔥 Explore Devices
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-4 px-8 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-blue-500/50 text-base sm:text-lg border-2 border-white/20 animate-glow">
              📱 View All Phones
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker - Darker */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-emerald-400 py-2 overflow-hidden z-30 border-t border-emerald-600/30">
        <div className="animate-scroll whitespace-nowrap text-xs sm:text-sm font-semibold">
          🔥 iPhone 15 starting at ₹45,999 • Samsung S24 from ₹39,999 • OnePlus 12 at ₹32,999 • Vivo V30 with No Cost
          EMI • Oppo F25 with Free Accessories • Realme GT at Best Price 🔥
        </div>
      </div>

      {/* Refined Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes bounce-sm {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.05); }
        }
        .animate-bounce-sm {
          animation: bounce-sm 2s ease-in-out infinite;
        }
        @keyframes confetti {
          0% { transform: translateY(-100px) rotate(0deg) scale(0); opacity: 0; }
          10% { opacity: 0.7; transform: scale(1); }
          100% { transform: translateY(100vh) rotate(360deg) scale(0.5); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 10s linear infinite;
          position: absolute;
          top: 0;
        }
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 50%, transparent 100%);
        }
      `}</style>
    </div>
  )
}

export default FestivalHero