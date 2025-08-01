import BestSellerCard from '../Components/BestSellerCard';
import { useEffect,useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SpaceHero from '../Components/SpaceHero';
import WhatWeOffer from '../Components/WhatWeOffer';
import ShopContactLocation from '../Components/ShopContactLocation';
import { useSelector } from 'react-redux';
import appwriteService from '../Appwrite/service';
import config from '../config';
import dummyBestsellers from '../Demos/DemoBestsellers';
import dummyCarousel from '../Demos/DemoCarousel';
import { CgProductHunt } from 'react-icons/cg';

const Home = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const [carouselSlides, setCarouselSlides] = useState(dummyCarousel);
  const [bestsellers, setBestsellers] = useState(dummyBestsellers);

useEffect(() => {
  const cached = localStorage.getItem('carouselSlides');
  if (cached) {
    setCarouselSlides(JSON.parse(cached));
  }

  const fetchFresh = async () => {
    try {
      const result = await appwriteService.listDocuments(config.carouselCollectionId);
      if (result && result.documents.length > 0) {
        const cachedData = JSON.parse(localStorage.getItem('carouselSlides') || '[]');
        if (JSON.stringify(cachedData) !== JSON.stringify(result.documents)) {
          setCarouselSlides(result.documents);
          localStorage.setItem('carouselSlides', JSON.stringify(result.documents));
        }
      }
    } catch (err) {
      console.error("Background fetch failed.", err);
    }
  };

  fetchFresh();
}, []);
useEffect(() => {
  const cached = localStorage.getItem('bestsellers');
  if (cached) {
    setBestsellers(JSON.parse(cached));
  }

  const fetchFresh = async () => {
    try {
      const result = await appwriteService.listDocuments(config.bestsellersCollectionId);
      if (result && result.documents.length > 0) {
        const cachedData = JSON.parse(localStorage.getItem('bestsellers') || '[]');
        if (JSON.stringify(cachedData) !== JSON.stringify(result.documents)) {
          setBestsellers(result.documents);
          localStorage.setItem('bestsellers', JSON.stringify(result.documents));
        }
      }
    } catch (err) {
      console.error("Background fetch failed.", err);
    }
  };

  fetchFresh();
}, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-gray-200 text-gray-800">
      <SpaceHero />

      <WhatWeOffer />

<div className="relative w-full py-16 px-6 sm:px-16 text-black overflow-hidden">
  {/* Background Animation Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/25 to-green-400/25 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-lime-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
  </div>


  <div className="relative z-10 text-center mb-12">
    <div className="inline-block">
      <h3 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
        🔥 Bestsellers
      </h3>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mx-auto animate-pulse"></div>
    </div>
    <p className="text-gray-600 mt-6 text-lg font-medium opacity-80">
      Most loved smartphones by our customers
    </p>
    {isAdmin && (
  <div className="relative z-10 text-center mt-10 mb-10">
    <button
      onClick={() => window.location.href = "/admin/add/bestseller"}
      className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      + Add Bestseller
    </button>
  </div>
)}
  </div>
  {/* Cards Grid with Staggered Animation */}
  <div className="relative z-10 w-full px-4">
    

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {bestsellers.map((product, index) => (
        <div 
          key={product.$id || index}
          className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          style={{ 
            animationDelay: `${index * 200}ms`,
            opacity: 0,
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-green-500/0 to-teal-500/0 group-hover:from-emerald-500/25 group-hover:via-green-500/25 group-hover:to-teal-500/25 rounded-xl blur-xl transition-all duration-300 -m-2"></div>
          
          {/* Ranking Badge - Only for top 3 */}
          {index < 3 && (
            <div className={`absolute -top-2 -right-2 z-20 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform transition-all duration-300 ${
              index === 0 ? 'bg-gradient-to-r from-yellow-400 to-amber-500 animate-bounce shadow-yellow-400/50' :
              index === 1 ? 'bg-gradient-to-r from-gray-400 to-slate-500 shadow-gray-400/50' :
              'bg-gradient-to-r from-orange-400 to-red-500 shadow-orange-400/50'
            }`}>
              #{index + 1}
            </div>
          )}
          
          <BestSellerCard product={product} />
        </div>
      ))}
    </div>
  </div>

  {/* Bottom Section */}
  <div className="relative z-10 text-center mt-14">
    <div className="flex items-center justify-center space-x-4">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-400"></div>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-400"></div>
    </div>
  </div>

  {/* CSS Animations */}
  <style>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</div>

{/* Enhanced Product Showcase Carousel */}
<div className="relative w-full py-16 px-6 sm:px-16 bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 overflow-hidden">
  {/* Background Animation Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-400/25 to-cyan-400/25 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-lime-400/15 to-emerald-400/15 rounded-full blur-xl animate-pulse delay-700"></div>
  </div>

  {/* Header Section */}
  <div className="relative z-10 text-center mb-12">
    <div className="inline-block">
      <h3 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
        📱 Featured Collection
      </h3>
      <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mx-auto animate-pulse"></div>
    </div>
    <p className="text-gray-600 mt-6 text-lg font-medium opacity-80">
      Discover our latest smartphones and exclusive deals
    </p>
    {isAdmin && (
  <div className="flex justify-center gap-4 my-6">
    <button
      onClick={() => window.location.href = "/admin/add/carousel"}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-transform hover:scale-105"
    >
      ➕ Add Carousel Slide
    </button> 
  </div>
)}
  </div>

  {/* Main Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Left Side Content */}
      <div className="lg:col-span-3 space-y-6">
        <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200/50 transition-all duration-300">
          <div className="text-3xl mb-3">🎯</div>
          <h4 className="font-bold text-gray-800 mb-2">Latest Launches</h4>
          <p className="text-gray-600 text-sm">Stay ahead with cutting-edge technology</p>
        </div>
        
        <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200/50 transition-all duration-300">
          <div className="text-3xl mb-3">💎</div>
          <h4 className="font-bold text-gray-800 mb-2">Premium Quality</h4>
          <p className="text-gray-600 text-sm">Handpicked devices for excellence</p>
        </div>
      </div>
      {/* Central Carousel */}
      <div className="lg:col-span-6 relative">
        <div className="relative w-full h-[35vh] sm:h-[45vh] rounded-2xl overflow-hidden shadow-2xl">
          {/* Carousel Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/20 rounded-2xl blur-xl -m-4 animate-pulse"></div>
          
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={5000}
            transitionTime={1000}
            swipeable
            emulateTouch
            className="h-full rounded-2xl"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-gray-700 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`inline-block w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  isSelected 
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-400/50 scale-125' 
                    : 'bg-white/70 hover:bg-white/90 hover:scale-110'
                }`}
              />
            )}
          >
            {carouselSlides.map((slide, idx) => (
              <div key={idx} className="relative h-[35vh] sm:h-[45vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Slide Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-2xl sm:text-3xl font-bold mb-2 animate-fade-in-up" style={{animationDelay: `${idx * 0.2}s`}}>
                    {slide.title}
                  </h4>
                  <p className="text-sm sm:text-base opacity-90 animate-fade-in-up" style={{animationDelay: `${idx * 0.2 + 0.1}s`}}>
                    {slide.subtitle}
                  </p>
                </div>
                {isAdmin && (
  <div className="absolute top-2 right-2 flex gap-2">
    <button
      onClick={async () => {
        const confirmDelete = window.confirm("Delete this slide?");
        if (confirmDelete) {
          const success = await appwriteService.deleteDocument(config.carouselCollectionId, slide.$id);
          if (success) {
            alert("Slide deleted.");
            window.location.reload(); // ideally re-fetch
          }
        }
      }}
      className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded shadow"
    >
      Delete
    </button>
    <button
      onClick={() => {
        window.location.href = `/admin/edit/carousel/${slide.$id}`;
      }}
      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded shadow"
    >
      Edit
    </button>
  </div>
)}

              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="lg:col-span-3 space-y-6">
        <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200/50 transition-all duration-300">
          <div className="text-3xl mb-3">🚀</div>
          <h4 className="font-bold text-gray-800 mb-2">Fast Delivery</h4>
          <p className="text-gray-600 text-sm">Quick shipping across India</p>
        </div>
        
        <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200/50 transition-all duration-300">
          <div className="text-3xl mb-3">🛡️</div>
          <h4 className="font-bold text-gray-800 mb-2">Warranty</h4>
          <p className="text-gray-600 text-sm">Comprehensive protection plans</p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom CTA Section */}
  <div className="relative z-10 text-center mt-16">
    <div className="flex items-center justify-center space-x-4">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-400"></div>
      <button className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg shadow-emerald-400/30 hover:shadow-xl hover:shadow-emerald-400/40 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
        <span className="relative z-10 flex items-center space-x-2">
          <span>Explore All Products</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-400"></div>
    </div>
  </div>

  {/* CSS Animations */}
  <style>{`
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    /* Custom carousel indicator positioning */
    .carousel .control-dots {
      bottom: 20px !important;
    }
    
    .carousel .control-dots .dot {
      box-shadow: none !important;
      background: transparent !important;
    }
  `}</style>
</div>

      <ShopContactLocation />
    </div>
  );
};

export default Home;