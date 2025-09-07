import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home">
      <div className="min-h-screen bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="flex flex-col items-center justify-center min-h-screen relative">
            
            {/* Robot Image with Enhanced Effects */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-20 transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              {/* Holographic Ring */}
              <div className="absolute inset-0 rounded-full border border-teal-400/20 animate-spin-slow" style={{ borderStyle: 'dashed' }} />
              <div className="absolute inset-4 rounded-full border border-blue-400/15 animate-spin-reverse" style={{ borderStyle: 'dotted' }} />
              
              {/* Enhanced CTA Button */}
              <div className="absolute bottom-0 left-0 transform translate-y-1/2 z-30 ml-8">
                <button className="relative -left-[16rem] -top-[7rem] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-slate-900 font-bold px-12 py-4 rounded-full text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-teal-500/30 overflow-hidden">
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-left">
                    Get Started
                    <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300">
                      <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>→</span>
                    </span>
                  </span>
                </button>
              </div>

              {/* Robot Image Container */}
              <div className="relative group mt-16">
                <img
                  src="/aihead.jpg"
                  alt="Optimus AI Robot"
                  className="w-full h-auto -translate-x-[70px] transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.3))',
                    transform: `translateX(-70px) translateY(${scrollY * 0.1 + 40}px)` // Added 40px to move down
                  }}
                />
              </div>
            </div>

            {/* Enhanced Feature Description */}
            <div className={`absolute right-0 bottom-0 transform translate-y-[-50%] z-30 max-w-md transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="group bg-gradient-to-br from-teal-500/10 via-slate-800/40 to-blue-500/10 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-2000 animate-pulse" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="flex items-center justify-between mt-10 pt-4 border-t border-teal-500/20 space-x-4">
                    <div className="text-center ">
                      <div className="text-lg font-bold text-teal-400">3x</div>
                      <div className="text-xs text-slate-400">Faster</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">99%</div>
                      <div className="text-xs text-slate-400">Accurate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">24/7</div>
                      <div className="text-xs text-slate-400">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Centered Text Content */}
            <div className={`space-y-8 text-center relative z-10 max-w-5xl transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="-mt-[100px]">
                <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold text-white leading-tight">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                      Elevate Your Digital Orbit
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;