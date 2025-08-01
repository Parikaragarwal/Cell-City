import { Smartphone, Headphones, Tv } from 'lucide-react';
import { useState } from 'react';

// Mock Button component for demo
const Button = ({ children, variant = "primary", className = "", onClick }) => (
  <button 
    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
      variant === "primary" 
        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-105" 
        : "bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600"
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const WhatWeOffer = () => {
const [hoveredCard, setHoveredCard] = useState(null);
const [touchedCard, setTouchedCard] = useState(null);

const categories = [
    {
      id: 'accessories',
      title: 'Smart Accessories',
      description: 'Premium earbuds, wireless chargers, cases, and cutting-edge tech accessories for modern lifestyles',
      stats: '200+ Products',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=600&fit=crop',
      icon: Headphones,
      position: 'left',
      link: '/accessories',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'mobiles',
      title: 'Mobile Phones',
      description: 'Latest flagship smartphones with revolutionary features, 5G connectivity, and premium build quality from top global brands',
      stats: '500+ Models',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=600&fit=crop',
      icon: Smartphone,
      position: 'center',
      isPrimary: true,
      link: '/mobiles',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'electronics',
      title: 'Home Electronics',
      description: 'Smart TVs with 4K/8K resolution, energy-efficient ACs, and intelligent home appliances for modern living',
      stats: '100+ Items',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=600&fit=crop',
      icon: Tv,
      position: 'right',
      link: '/electronics',
      gradient: 'from-orange-600 to-red-600'
    }
];

const handleCardClick = (link) => {
    console.log(`Navigate to: ${link}`);
};

// Mobile touch handlers - simplified approach
const handleMobileCardTap = (cardId, link) => {
    if (touchedCard === cardId) {
        // Second tap - navigate
        handleCardClick(link);
        setTouchedCard(null);
    } else {
        // First tap - show expand effect
        setTouchedCard(cardId);
        // Auto-collapse after 4 seconds
        setTimeout(() => {
            setTouchedCard(prev => prev === cardId ? null : prev);
        }, 4000);
    }
};

return (
    <div className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
    <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Offer</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of cutting-edge technology and premium accessories designed for the modern digital lifestyle
        </p>
        </div>

        {/* Desktop 3D Card Stack */}
        <div className="hidden lg:block relative h-[600px]" style={{ perspective: '2000px' }}>
        <div className="relative w-full h-full flex items-center justify-center">
            {categories.map((category) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCard === category.id;
            const isOtherHovered = hoveredCard && hoveredCard !== category.id;
            
            let baseTransform = '';
            let hoverTransform = '';
            let zIndex = 10;
            
            if (category.position === 'left') {
                baseTransform = 'translateX(-200px) translateZ(-100px) rotateY(25deg) rotateZ(-2deg)';
                hoverTransform = 'translateX(-150px) translateZ(50px) rotateY(15deg) rotateZ(0deg) scale(1.05)';
                zIndex = 20;
            } else if (category.position === 'center') {
                baseTransform = 'translateX(0px) translateZ(0px) rotateY(0deg) rotateZ(0deg) scale(1.1)';
                hoverTransform = 'translateX(0px) translateZ(100px) rotateY(0deg) rotateZ(0deg) scale(1.2)';
                zIndex = 30;
            } else {
                baseTransform = 'translateX(200px) translateZ(-100px) rotateY(-25deg) rotateZ(2deg)';
                hoverTransform = 'translateX(150px) translateZ(50px) rotateY(-15deg) rotateZ(0deg) scale(1.05)';
                zIndex = 20;
            }

            return (
                <div
                key={category.id}
                  className="absolute transition-all duration-700 cursor-pointer"
                style={{ 
                    zIndex: isHovered ? 40 : zIndex,
                    transform: isHovered ? hoverTransform : baseTransform,
                    filter: isOtherHovered ? 'blur(2px) brightness(0.7)' : 'blur(0px) brightness(1)'
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(category.link)}
                >
                <div className={`w-96 h-[580px] rounded-3xl overflow-hidden bg-white border-2 transition-all duration-700 ${
                    category.isPrimary 
                      ? 'border-emerald-500 shadow-2xl shadow-emerald-200/50' 
                      : 'border-gray-200 shadow-2xl'
                  } ${isHovered ? 'shadow-3xl' : ''}`}>
                    
                    {/* Image Section */}
                    <div className="relative h-72 overflow-hidden">
                    <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                      {/* Icon */}
                    <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border-2 ${
                          category.isPrimary ? 'border-emerald-200' : 'border-gray-200'
                        }`}>
                        <IconComponent className={`w-8 h-8 ${
                            category.isPrimary ? 'text-emerald-600' : 'text-gray-700'
                          }`} />
                        </div>
                    </div>
                    
                      {/* Stats Badge */}
                    <div className="absolute top-6 right-6">
                        <div className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white text-sm font-bold rounded-full shadow-lg`}>
                        {category.stats}
                        </div>
                    </div>

                      {/* Primary Badge */}
                    {category.isPrimary && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                            ⭐ FEATURED
                        </div>
                        </div>
                    )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 h-60 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {category.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                        {category.description}
                        </p>
                    </div>
                    
                    <div className="mt-6">
                        <Button 
                        variant={category.isPrimary ? "primary" : "ghost"}
                          className="w-full text-lg py-4"
                        onClick={(e) => {
                            e.stopPropagation();
                            
                                handleCardClick(category.link);
                            
                        }}
                        >
                        Explore Collection →
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
        <div className="flex justify-center items-center space-x-12" style={{ perspective: '1500px' }}>
            {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
                <div
                key={category.id}
                  className={`relative cursor-pointer transition-all duration-500 hover:scale-105 ${
                    index === 1 ? 'z-30 scale-110' : 'z-20'
                  }`}
                style={{
                    transform: index === 0 
                    ? 'rotateY(-15deg) translateX(30px)'
                    : index === 2
                    ? 'rotateY(15deg) translateX(-30px)'
                    : 'rotateY(0deg)'
                }}
                onClick={() => handleCardClick(category.link)}
                >
                <div className={`w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-white border-2 ${
                    category.isPrimary ? 'border-emerald-500' : 'border-gray-200'
                }`}>
                    
                    <div className="relative h-52 overflow-hidden">
                    <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                        </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold rounded-full`}>
                        {category.stats}
                        </div>
                    </div>
                    </div>

                    <div className="p-6 h-44 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description.substring(0, 80)}...
                        </p>
                    </div>
                    
                    <Button 
                        variant={category.isPrimary ? "primary" : "ghost"}
                        className="w-full text-sm"
                        onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(category.link);
                        }}
                    >
                        Shop Now
                    </Button>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        </div>

        {/* Mobile 3D Card Stack - Fixed Touch Interaction */}
        <div className="block md:hidden relative h-[500px] overflow-hidden" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-full flex items-center justify-center">
            {categories.map((category) => {
            const IconComponent = category.icon;
            const isExpanded = touchedCard === category.id;
            const isOtherExpanded = touchedCard && touchedCard !== category.id;
            
            let baseTransform = '';
            let hoverTransform = '';
            let zIndex = 10;
            
            if (category.position === 'left') {
                baseTransform = 'translateX(-80px) translateZ(-80px) rotateY(20deg) rotateZ(-1deg) scale(0.85)';
                hoverTransform = 'translateX(-40px) translateZ(80px) rotateY(8deg) rotateZ(0deg) scale(1.05)';
                zIndex = 20;
            } else if (category.position === 'center') {
                baseTransform = 'translateX(0px) translateZ(0px) rotateY(0deg) rotateZ(0deg) scale(1)';
                hoverTransform = 'translateX(0px) translateZ(100px) rotateY(0deg) rotateZ(0deg) scale(1.15)';
                zIndex = 30;
            } else {
                baseTransform = 'translateX(80px) translateZ(-80px) rotateY(-20deg) rotateZ(1deg) scale(0.85)';
                hoverTransform = 'translateX(40px) translateZ(80px) rotateY(-8deg) rotateZ(0deg) scale(1.05)';
                zIndex = 20;
            }

            return (
                <div
                key={category.id}
                className="absolute transition-all duration-700 cursor-pointer select-none"
                style={{ 
                    zIndex: isExpanded ? 40 : zIndex,
                    transform: isExpanded ? hoverTransform : baseTransform,
                    filter: isOtherExpanded ? 'blur(1px) brightness(0.8)' : 'blur(0px) brightness(1)'
                }}
                onClick={() => handleMobileCardTap(category.id, category.link)}
                >
                <div className={`w-72 h-[450px] rounded-2xl overflow-hidden bg-white border-2 transition-all duration-700 ${
                    category.isPrimary 
                      ? 'border-emerald-500 shadow-2xl shadow-emerald-200/50' 
                      : 'border-gray-200 shadow-2xl'
                  } ${isExpanded ? 'shadow-3xl' : ''}`}>
                    
                    {/* Touch Indicator for Non-Center Cards */}
                    {!category.isPrimary && (
                        <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                            isExpanded ? 'opacity-0' : 'opacity-60'
                        }`}>
                            <div className="px-2 py-1 bg-gray-900 text-white text-xs rounded-full">
                                Tap to expand
                            </div>
                        </div>
                    )}

                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                    <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ transform: isExpanded ? 'scale(1.1)' : 'scale(1)' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                      {/* Icon */}
                    <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border-2 transition-all duration-300 ${
                          category.isPrimary ? 'border-emerald-200' : 'border-gray-200'
                        } ${isExpanded ? 'scale-110' : 'scale-100'}`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                            category.isPrimary ? 'text-emerald-600' : isExpanded ? 'text-emerald-600' : 'text-gray-700'
                          }`} />
                        </div>
                    </div>
                    
                      {/* Stats Badge */}
                    <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-sm font-bold rounded-full shadow-lg transition-all duration-300 ${
                            isExpanded ? 'scale-110' : 'scale-100'
                        }`}>
                        {category.stats}
                        </div>
                    </div>

                      {/* Primary Badge */}
                    {category.isPrimary && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                            ⭐ FEATURED
                        </div>
                        </div>
                    )}

                    {/* Expanded State Indicator */}
                    {isExpanded && !category.isPrimary && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg animate-bounce">
                            Tap again to explore →
                        </div>
                        </div>
                    )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5 h-48 flex flex-col justify-between">
                    <div>
                        <h3 className={`text-lg font-bold text-gray-900 mb-3 leading-tight transition-all duration-300 ${
                            isExpanded ? 'text-emerald-800' : 'text-gray-900'
                        }`}>
                        {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description.length > 100 ? category.description.substring(0, 100) + '...' : category.description}
                        </p>
                    </div>
                    
                    <div className="mt-4">
                        <Button 
                        variant={category.isPrimary || isExpanded ? "primary" : "ghost"}
                          className={`w-full text-sm py-3 transition-all duration-300 ${
                            isExpanded ? 'animate-pulse' : ''
                          }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(category.link);
                        }}
                        >
                        {isExpanded ? 'Explore Now →' : 'Explore Collection →'}
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        </div>
    </div>
    </div>
);
};

export default WhatWeOffer;