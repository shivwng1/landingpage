import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-0 z-10 hero-section-overlap">
      {/* Animated dots/stars layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(60)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const size = Math.random() * 2 + 1;
          const duration = (Math.random() * 2 + 1.5).toFixed(2);
          const delay = (Math.random() * 2).toFixed(2);
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 1.0,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 8px 2px #fff',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-x-8 max-md:flex-col max-md:items-stretch relative z-10">
        <div className="w-6/12 max-md:w-full">
          <div className="flex w-full flex-col items-center text-center justify-center my-auto max-md:mt-6 max-md:px-2">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-8 mb-6 max-md:text-2xl max-md:leading-tight max-md:mb-3">
              3X Your Capacity While Cutting Costs by 40%
            </h1>
            <div className="flex justify-center w-full mb-8 max-md:mb-4">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#fff] via-[#b3e5fc] to-[#fff] bg-clip-text text-transparent px-4 py-2 rounded-lg shadow-md max-md:text-base max-md:px-2 max-md:py-1">
                Deploy specialized AI agents across voice, chat, and WhatsApp. Enterprise-grade.
              </span>
            </div>
            <button className="bg-white flex min-h-[44px] md:min-h-[57px] items-center gap-3 md:gap-[25px] capitalize leading-loose justify-center mt-6 px-4 md:pl-[25px] md:pr-[9px] py-2 md:py-[9px] rounded-[55px] hover:opacity-90 transition-opacity text-sm md:text-base"
              onClick={() => window.open('https://form.typeform.com/to/xz8hSQfk', '_blank')}
            >
              <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] font-medium">
                Talk to us
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="w-6/12 max-md:w-full max-md:mt-4 flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/b5d424ac7631220a96ee98f3b273bd7d854084ee?placeholderIfAbsent=true"
            className="aspect-[0.97] object-contain w-full max-w-[350px] max-md:max-w-[220px] max-md:h-auto max-md:mt-4 max-md:mb-2"
            alt="Hero illustration"
          />
        </div>
      </div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
