import React, { useState, useEffect } from 'react';

const SpaceHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    // Generate random stars
    const generateStars = (count) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            animationDelay: Math.random() * 3,
            animationDuration: Math.random() * 3 + 2
        }));
    };
    
    const stars = generateStars(150);
    const bigStars = generateStars(50);
    
    // Electronic device icons with positions and animations
    const devices = [
        { icon: '📱', left: '10%', top: '15%', delay: '0s', duration: '6s' },
        { icon: '💻', left: '85%', top: '20%', delay: '1s', duration: '8s' },
        { icon: '⌚', left: '15%', top: '70%', delay: '2s', duration: '7s' },
        { icon: '🎧', left: '80%', top: '75%', delay: '0.5s', duration: '9s' },
        { icon: '📺', left: '70%', top: '10%', delay: '1.5s', duration: '6.5s' },
        { icon: '⌨️', left: '90%', top: '45%', delay: '3s', duration: '8s' },
        { icon: '🖱️', left: '5%', top: '45%', delay: '0.8s', duration: '6.8s' },
        { icon: '📷', left: '60%', top: '85%', delay: '1.8s', duration: '7.2s' },
        { icon: '🔌', left: '35%', top: '80%', delay: '2.2s', duration: '8.5s' },
        { icon: '💾', left: '45%', top: '15%', delay: '3.2s', duration: '6.3s' },
        { icon: '🔋', left: '75%', top: '60%', delay: '1.2s', duration: '7.8s' }
    ];
    
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Space Background - Much darker and more realistic */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black"></div>
            
            {/* Nebula Effects - Darker and more subtle */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-900 rounded-full opacity-8 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-800 rounded-full opacity-6 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-800 rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
            
            {/* Stars */}
            <div className="absolute inset-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute bg-gray-200 rounded-full animate-twinkle"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration}s`
                        }}
                    ></div>
                ))}
                
                {bigStars.map((star) => (
                    <div
                        key={`big-${star.id}`}
                        className="absolute bg-slate-300 rounded-full animate-twinkle-slow"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size + 2}px`,
                            height: `${star.size + 2}px`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration + 1}s`
                        }}
                    ></div>
                ))}
            </div>
            
            {/* Floating Electronic Devices */}
            <div className="absolute inset-0">
                {devices.map((device, index) => (
                    <div
                        key={index}
                        className="absolute text-4xl animate-float-space"
                        style={{
                            left: device.left,
                            top: device.top,
                            animationDelay: device.delay,
                            animationDuration: device.duration,
                            filter: 'drop-shadow(0 0 8px rgba(200,200,200,0.4))'
                        }}
                    >
                        {device.icon}
                    </div>
                ))}
            </div>

            {/* Shooting Stars */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-px h-px bg-gray-200 animate-shooting-star"></div>
                <div className="absolute top-3/4 left-0 w-px h-px bg-slate-300 animate-shooting-star" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-1/2 left-0 w-px h-px bg-gray-300 animate-shooting-star" style={{animationDelay: '6s'}}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-16">
                <div className="text-center text-white max-w-4xl">
                    <h1 
                        className={`text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-gray-100 to-white transform transition-all duration-2000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Cell City
                    </h1>
                    
                    <div className="relative">
                        <h2 
                            className={`text-2xl md:text-4xl font-bold mb-8 text-gray-200 transform transition-all duration-2000 ease-out ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.8s' }}
                        >
                            A Universe of Technology
                        </h2>
                        
                        <p 
                            className={`text-lg md:text-xl text-gray-300 mb-12 leading-relaxed transform transition-all duration-2000 ease-out ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: '1.4s' }}
                        >
                            Explore the infinite possibilities of phones, accessories, and magical tech
                            <br />
                            in our cosmic digital marketplace
                        </p>
                        
                        <div 
                            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-2000 ease-out ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: '2s' }}
                        >
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25">
                                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    🚀 Explore Collection
                                </span>
                            </button>
                            
                            <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:bg-gray-400 hover:text-black hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Custom Styles */}
            <style>{`
                @keyframes twinkle {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0.3; }
                }
                
                @keyframes twinkle-slow {
                    0%, 60%, 100% { opacity: 1; }
                    30%, 90% { opacity: 0.2; }
                }
                
                @keyframes float-space {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(-3deg); }
                    75% { transform: translateY(-25px) rotate(7deg); }
                }
                
                @keyframes shooting-star {
                    0% { 
                        transform: translateX(-100px) translateY(0px);
                        opacity: 0;
                        box-shadow: 0 0 0 rgba(200,200,200,0);
                    }
                    10% { 
                        opacity: 1;
                        box-shadow: 0 0 20px rgba(200,200,200,0.8);
                    }
                    90% { 
                        opacity: 1;
                        box-shadow: 0 0 20px rgba(200,200,200,0.8);
                    }
                    100% { 
                        transform: translateX(100vw) translateY(-100px);
                        opacity: 0;
                        box-shadow: 0 0 0 rgba(200,200,200,0);
                    }
                }
                
                .animate-twinkle {
                    animation: twinkle 2s infinite;
                }
                
                .animate-twinkle-slow {
                    animation: twinkle-slow 3s infinite;
                }
                
                .animate-float-space {
                    animation: float-space 6s ease-in-out infinite;
                }
                
                .animate-shooting-star {
                    animation: shooting-star 8s linear infinite;
                    box-shadow: 0 0 10px 2px rgba(200,200,200,0.8);
                }
            `}</style>
        </div>
    );
};

export default SpaceHero;