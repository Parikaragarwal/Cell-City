// FestivalHero.tsx
"use client"

import { useEffect, useState } from "react"

const FestivalHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const floatingBadges = [
    { text: "🔥 UPTO 70% OFF", top: "8%", left: "12%", delay: "0s", color: "bg-red-600 text-white" },
    { text: "🚚 FREE DELIVERY", top: "75%", left: "8%", delay: "1s", color: "bg-green-600 text-white" },
    { text: "💥 EXCHANGE BONUS", top: "15%", left: "78%", delay: "0.5s", color: "bg-purple-600 text-white" },
    { text: "⚡ FLASH SALE", top: "65%", left: "82%", delay: "1.5s", color: "bg-yellow-500 text-black" },
    { text: "🎁 FESTIVE COMBOS", top: "45%", left: "5%", delay: "2s", color: "bg-blue-600 text-white" },
    { text: "💳 EASY EMI PLANS", top: "35%", left: "85%", delay: "2.5s", color: "bg-indigo-600 text-white" },
  ]

  const rotatingDeals = [
    "INSTANT CASHBACK UPTO ₹5000",
    "ZERO DOWN PAYMENT",
    "BANK OFFER 15% OFF",
    "TRADE-IN BONUS ₹8000"
  ]

  const confetti = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    emoji: ['🎊', '💥', '⚡', '🔥', '💸', '🎉'][Math.floor(Math.random() * 6)]
  }))

  const [currentDeal, setCurrentDeal] = useState(0)

  useEffect(() => {
    const dealInterval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % rotatingDeals.length)
    }, 2500)
    return () => clearInterval(dealInterval)
  }, [])

  return (
    <div className="relative w-full h-[100vh] sm:h-screen overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute text-xl sm:text-2xl animate-confetti z-10"
          style={{ left: `${c.left}%`, animationDelay: `${c.delay}s` }}
        >
          {c.emoji}
        </div>
      ))}

      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-700 text-white text-center py-2 z-20">
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-semibold">
          <span>⚡ SALE LIVE NOW</span>
          <span className="bg-yellow-400 text-black px-2 py-1 rounded animate-bounce-sm">
            {rotatingDeals[currentDeal]}
          </span>
          <span>LIMITED PERIOD OFFER ⚠️</span>
        </div>
      </div>

      {/* Floating Badges */}
      {floatingBadges.map((badge, index) => (
        <div
          key={index}
          className={`absolute ${badge.color} font-semibold px-3 py-2 rounded-lg text-xs sm:text-sm shadow-lg animate-float border border-white`}
          style={{
            top: badge.top,
            left: badge.left,
            animationDelay: badge.delay
          }}
        >
          {badge.text}
        </div>
      ))}

      {/* Side Labels */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-6 rotate-[-90deg] text-xs sm:text-sm font-bold animate-pulse">
        FLASH DEALS
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-2 py-6 rotate-90 text-xs sm:text-sm font-bold animate-pulse">
        TOP BRANDS
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-12 pt-16 sm:pt-20">
        <div className="text-center text-white max-w-4xl">
          {/* Shop Name */}
          <h3
            className={`text-2xl sm:text-3xl font-extrabold tracking-wide mb-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: "0.2s",
              textShadow: '2px 2px #000'
            }}
          >
            <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
              ⭐ CELL CITY — Trusted by Thousands ⭐
            </span>
          </h3>

          {/* Sub-brand */}
          <div className={`text-base sm:text-lg font-semibold text-yellow-100 mb-4 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            Your one-stop shop for mobiles, deals, and delivery 💼📱
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: "0.4s",
              textShadow: '3px 3px #000'
            }}
          >
            MOBILE DHAMAKA 2025 🎉
          </h1>

          {/* Slogan */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-yellow-50 mb-8 font-medium transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            Great phones. Great prices. Delivered fast. No drama.  
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
              🔥 Shop Now
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
              📱 View All Phones
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-yellow-400 py-1 sm:py-2 overflow-hidden z-30">
        <div className="animate-scroll whitespace-nowrap text-xs sm:text-sm font-semibold">
          🔥 iPhone 15 ₹45,999 • Samsung S24 ₹39,999 • OnePlus 12 ₹32,999 • Vivo V30 ₹28,999 • Oppo F25 ₹22,999 • Realme GT ₹18,999 • No Cost EMI 🔥
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes bounce-sm {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-sm {
          animation: bounce-sm 2s ease-in-out infinite;
        }

        @keyframes confetti {
          0% { transform: translateY(-100px) rotate(0deg) scale(0); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          100% { transform: translateY(100vh) rotate(720deg) scale(0.5); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 8s linear infinite;
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
      `}</style>
    </div>
  )
}

export default FestivalHero
