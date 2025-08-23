import React from 'react';

// --- Arrow Icon ---
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

function Hero() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col font-sans relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-24 relative">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6 max-w-xl z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Meet Optimus, Your <br /> AI Word Navigator
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Optimus makes reading smarter, faster, and personalized.
          </p>
          <button className="group bg-blue-400 hover:bg-blue-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center">
            Get Started
            <ArrowRightIcon />
          </button>
        </div>

        {/* Right Side AI Illustration */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="./public/aihead.jpg"
            alt="AI Illustration"
            className="w-full max-w-md lg:max-w-xl object-contain"
          />
          
          {/* Stats Overlay */}
          <div className="absolute bottom-8 right-4 lg:right-12 text-right space-y-6">
            <div>
              <span className="text-4xl font-bold text-blue-400">85%</span>
              <p className="text-gray-300 text-sm">Voice Narration</p>
            </div>
            <div>
              <div className="flex justify-end -space-x-3 mb-2">
                <img className="h-10 w-10 rounded-full border-2 border-gray-900" src="https://placehold.co/40x40/5c6370/ffffff?text=U1" alt="User 1" />
                <img className="h-10 w-10 rounded-full border-2 border-gray-900" src="https://placehold.co/40x40/737e8c/ffffff?text=U2" alt="User 2" />
                <img className="h-10 w-10 rounded-full border-2 border-gray-900" src="https://placehold.co/40x40/8e9baa/ffffff?text=U3" alt="User 3" />
              </div>
              <span className="text-2xl font-bold text-white">12k+</span>
              <p className="text-gray-300 text-sm">Smart Listeners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
