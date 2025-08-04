"use client"

import Button from "../Components/Button"
import { Wrench, ShieldCheck, MessageCircle, Smartphone, HardDrive, Zap } from "lucide-react"

const softwareIssues = [
  { issue: "Phone stuck on boot logo", price: "₹300" },
  { issue: "OS Reinstallation / Flashing", price: "₹400" },
  { issue: "Lagging / Hanging Issues", price: "₹250" },
  { issue: "App Crashes / Malware Removal", price: "₹200" },
  { issue: "Network Signal Issues (Software)", price: "₹350" },
  { issue: "Overheating (Software Calibration)", price: "₹300" },
  { issue: "Google Account / FRP Unlock", price: "₹500" },
  { issue: "Password / Pattern Unlock", price: "₹350" },
  { issue: "Battery Drain (Software related)", price: "₹250" },
  { issue: "Update Failures / Stuck Update", price: "₹300" },
]

 const Repairs=()=> {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 to-black text-white px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-lime-600/10 to-green-600/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 leading-tight mb-4 animate-fade-in-down">
            Your Device, Our Expertise: We Fix It All.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            From complex software glitches to critical hardware failures, our in-house expert and direct access to
            official service centers ensure your device is in the safest hands.
          </p>
          <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up delay-200">
            <Button>
              <MessageCircle className="mr-2 w-5 h-5" /> 
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-900 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg bg-transparent"
            >
              <Smartphone className="mr-2 w-5 h-5" /> Call Now
            </Button>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Why Choose Our Repair Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Card 1 */}
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <Wrench className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Expert In-House Technician</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  Our dedicated technician has years of hands-on experience with all major smartphone brands, ensuring
                  precise and reliable repairs.
                </p>
              </div>
            </div>
            {/* Custom Card 2 */}
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <ShieldCheck className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Official Service Center Access</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  Unique access to official brand service centers in the same plaza for genuine parts and specialized
                  repairs.
                </p>
              </div>
            </div>
            {/* Custom Card 3 */}
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <Zap className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Fast & Affordable Solutions</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  We prioritize quick turnaround times without compromising on quality, all at transparent and
                  competitive prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Repair Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Common Software Issues We Fix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareIssues.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-emerald-800/50 shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 transform hover:scale-[1.02] rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Wrench className="text-emerald-400 w-6 h-6 shrink-0" />
                  <h3 className="text-xl font-semibold text-emerald-100">{item.issue}</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Estimated Cost: <span className="text-emerald-300 font-bold">{item.price}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-lg">
            Don't see your issue listed? <span className="text-emerald-400 font-medium">Contact us</span> for a free
            diagnosis!
          </p>
        </section>

        {/* Hardware Repair Mention */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-emerald-300 mb-6 animate-fade-in">Comprehensive Hardware Repairs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Beyond software, our technician is fully equipped to handle a wide range of hardware issues, from screen
            replacements and battery issues to complex component-level repairs.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            <HardDrive className="mr-2 w-5 h-5" /> Get a Hardware Repair Quote
          </Button>
        </section>

        {/* Meet Our Expert Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Meet Our Repair Expert
          </h2>
          <div className="flex flex-col md:flex-row items-center bg-zinc-900 border border-emerald-700/50 rounded-2xl p-8 shadow-2xl gap-8">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Repair Technician"
              className="w-64 h-64 rounded-full object-cover border-4 border-emerald-500 shadow-lg flex-shrink-0 animate-fade-in-left"
            />
            <div className="text-center md:text-left animate-fade-in-right">
              <h3 className="text-3xl font-bold text-emerald-200 mb-3">Mr. [Technician's Name]</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over <span className="font-semibold text-emerald-400">7 years of dedicated experience</span> in
                mobile phone and accessory repairs, Mr. [Technician's Name] is the trusted expert at our shop. He
                possesses a deep understanding of both software and hardware intricacies across all major brands. Your
                device is not just a gadget; it's a valuable asset, and he treats it with the utmost precision, care,
                and respect. Rest assured, your phone is in the most capable hands.
              </p>
              <p className="text-gray-400 mt-4 text-base">
                "Every device tells a story, and I'm here to ensure yours has a happy ending."
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="text-center pt-12 pb-8">
          <h2 className="text-4xl font-bold text-emerald-300 mb-6 animate-fade-in">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Don't let a broken phone slow you down. Contact us today for a reliable, affordable, and fast repair
            service.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl">
              <MessageCircle className="mr-3 w-6 h-6" /> Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-900 hover:text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl bg-transparent"
            >
              <Smartphone className="mr-3 w-6 h-6" /> Call Us Directly
            </Button>
          </div>
        </section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }

        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  )
}

export default Repairs;