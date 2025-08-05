"use client"

import Button from "../Components/Button"
import { Wrench, ShieldCheck, MessageCircle, Smartphone, HardDrive, Zap, MapPin, Clock, Phone } from "lucide-react"

const softwareIssues = [
  { issue: "Phone stuck on boot logo" },
  { issue: "OS Reinstallation / Flashing" },
  { issue: "Lagging / Hanging Issues" },
  { issue: "App Crashes / Malware Removal" },
  { issue: "Network Signal Issues (Software)" },
  { issue: "Overheating (Software Calibration)" },
  { issue: "Google Account / FRP Unlock" },
  { issue: "Password / Pattern Unlock" },
  { issue: "Battery Drain (Software related)" },
  { issue: "Update Failures / Stuck Update" },
  { issue: "Data Recovery Services" },
  { issue: "Custom ROM Installation" },
]

 const Repairs=()=> {
  
  // Define image URLs here. You can easily paste your links.
  const precisionImage1 = "https://images.unsplash.com/photo-1605370215754-080c443b7159?w=500&h=500&fit=crop"; // Replace with your image link
  const precisionImage2 = "https://images.unsplash.com/photo-1593642702749-bf2f34c5af73?w=500&h=500&fit=crop"; // Replace with your image link
  const precisionImage3 = "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop"; // Replace with your image link
  const hardwareImage = "https://images.unsplash.com/photo-1627885732103-6f4e1f744e80?w=500&h=500&fit=crop"; // Replace with your image link
  const expertPhoto = "/Images/Malkit.png"; // Replace with your portrait photo link

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 leading-tight mb-4 animate-fade-in-down">
            Malkit Mobile Repairing
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-6 animate-fade-in-down delay-200">
            Your Device, Our Expertise: We Fix It All.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in-up">
            Professional mobile repair services with genuine parts and complete data protection. We handle all types of smartphones with fair pricing and expert care.
          </p>
          <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up delay-200">
            <Button className="flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" /> 
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-900 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg bg-transparent flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" /> 8006872002
            </Button>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-16">
          <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-emerald-300 mb-8">Visit Our Shop</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="text-emerald-400 w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-200 mb-2">Location</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Shop No. UG 4A Cell City Shop ke pass<br />
                  Jio Store ke samne Kailash Plaza<br />
                  Shah Market Agra 282002
                </p>
              </div>
              <div className="text-center">
                <Clock className="text-emerald-400 w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-200 mb-2">Shop Hours</h3>
                <p className="text-gray-300">
                  <span className="font-semibold text-emerald-300">11:00 AM - 9:00 PM</span><br />
                  Every Day
                </p>
              </div>
              <div className="text-center">
                <Phone className="text-emerald-400 w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-200 mb-2">Contact</h3>
                <p className="text-gray-300">
                  <span className="font-semibold text-emerald-300">8006872002</span><br />
                  Call or WhatsApp
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Why Choose Malkit Mobile Repairing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <Wrench className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Expert Technician</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  Years of hands-on experience with all major smartphone brands, ensuring precise and reliable repairs with genuine parts only.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <ShieldCheck className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Data Protection</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  आपके डेटा का पूरा ध्यान रखा जाता है। Your personal information and data remains completely safe and secure during repairs.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-emerald-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-6">
              <div className="pb-0">
                <Zap className="text-emerald-400 w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold text-emerald-200">Fair Pricing</h3>
              </div>
              <div className="pt-0">
                <p className="text-gray-300">
                  उचित कीमत पर quality repairs। Transparent pricing with no hidden costs and quick turnaround times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precision Work Images Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Precision at Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-4 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={precisionImage1} alt="Component Level Repair" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-200 text-center">Component Level Repair</h3>
            </div>
            <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-4 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={precisionImage2} alt="Microscopic Soldering" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-200 text-center">Microscopic Soldering</h3>
            </div>
            <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-4 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <img src={precisionImage3} alt="Quality Testing" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-200 text-center">Quality Testing</h3>
            </div>
          </div>
        </section>

        {/* Software Repair Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Software Issues We Fix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareIssues.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-emerald-800/50 shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 transform hover:scale-[1.02] rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="text-emerald-400 w-5 h-5 shrink-0" />
                  <h3 className="text-lg font-semibold text-emerald-100 leading-tight">{item.issue}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-lg">
            Don't see your issue listed? <span className="text-emerald-400 font-medium">Contact us</span> for a free diagnosis!
          </p>
        </section>

        {/* Hardware Repair Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-emerald-300 mb-6 animate-fade-in">Comprehensive Hardware Repairs</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Beyond software, our expert technician handles all hardware issues with precision and care. From screen replacements to complex motherboard repairs, we use only original parts.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400 w-6 h-6" />
                  <span className="text-gray-300">Screen & Display Repairs</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400 w-6 h-6" />
                  <span className="text-gray-300">Battery Replacement</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400 w-6 h-6" />
                  <span className="text-gray-300">Charging Port Repair</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400 w-6 h-6" />
                  <span className="text-gray-300">Camera & Speaker Issues</span>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                <HardDrive className="mr-2 w-5 h-5" /> Get Hardware Quote
              </Button>
            </div>
            <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <img src={hardwareImage} alt="Hardware Repair Process" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Expert Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-emerald-300 mb-12 animate-fade-in">
            Meet Our Repair Expert
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-900 border border-emerald-700/50 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
                <img src={expertPhoto} alt="Expert Technician" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center lg:text-left animate-fade-in-right">
              <h3 className="text-3xl font-bold text-emerald-200 mb-6">Expert Mobile Technician</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With years of dedicated experience in mobile phone repairs, our expert technician at Malkit Mobile Repairing brings precision and care to every device. Specializing in both software and hardware repairs across all major brands, we ensure your device receives the expert attention it deserves.
              </p>
              <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-6 mb-6">
                <p className="text-emerald-300 font-medium text-lg">
                  "हम आपकी किस प्रकार सहायता कर सकते है।"
                </p>
                <p className="text-gray-400 mt-2 text-base italic">
                  Every device tells a story, and we're here to ensure yours continues perfectly.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                </Button>
                <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-900 hover:text-white bg-transparent">
                  <Phone className="mr-2 w-5 h-5" /> Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="text-center pt-12 pb-8">
          <h2 className="text-4xl font-bold text-emerald-300 mb-6 animate-fade-in">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Visit Malkit Mobile Repairing for reliable, affordable, and expert repair services. Your device deserves the best care, and we're here to provide it.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl">
              <MessageCircle className="mr-3 w-6 h-6" /> WhatsApp: 8006872002
            </Button>
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-900 hover:text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl bg-transparent"
            >
              <MapPin className="mr-3 w-6 h-6" /> Visit Our Shop
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