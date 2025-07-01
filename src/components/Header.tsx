import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full bg-transparent">
      <nav className="mx-auto max-w-[1240px] w-full flex items-center justify-between py-4 px-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-[130px] relative z-20
        max-md:flex-col max-md:items-center max-md:rounded-[40px] max-md:py-2 max-md:px-2 max-md:gap-2">
        <div className="flex items-center gap-4 relative max-md:flex-col max-md:gap-1 max-md:justify-center max-md:mb-2">
          <img
            src="/lovable-uploads/d8ef68e3-b2a4-4110-91f1-2272d58e4004.png"
            className="w-[65px] h-[63px] object-contain relative -top-[10%] left-[10%] max-md:static max-md:mx-auto max-md:w-12 max-md:h-12"
            alt="Avishkar AI Logo"
          />
          <div className="text-white text-2xl font-medium ml-2 max-md:ml-0 max-md:text-center max-md:text-lg">Avishkar AI</div>
        </div>
        <div className="flex gap-6 text-base text-white font-normal whitespace-nowrap leading-loose flex-wrap items-center max-md:hidden">
          <button onClick={() => scrollToSection('ai-agents')} className="p-2 hover:opacity-80 transition-opacity">AI Agents</button>
          <button onClick={() => scrollToSection('voice-os')} className="p-2 hover:opacity-80 transition-opacity">Voice OS</button>
          <button onClick={() => scrollToSection('integrations')} className="p-2 hover:opacity-80 transition-opacity">Integrations</button>
          <button onClick={() => scrollToSection('faq')} className="p-2 hover:opacity-80 transition-opacity">FAQ</button>
        </div>
        <div className="max-md:hidden">
          <button className="bg-white flex items-center gap-3 text-base font-normal capitalize leading-loose justify-center px-6 py-2 rounded-[55px] hover:opacity-90 transition-opacity"
            onClick={() => window.open('https://form.typeform.com/to/xz8hSQfk', '_blank')}
          >
            <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] font-medium">
              contact today
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center absolute right-4 top-4 z-30">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-nav');
              if (menu) menu.classList.toggle('hidden');
            }}
            aria-label="Open navigation menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile nav */}
        <div id="mobile-nav" className="hidden absolute top-full left-0 w-full bg-[rgba(20,20,20,0.98)] border-t border-[rgba(255,255,255,0.1)] rounded-b-[40px] flex flex-col items-center gap-4 py-4 z-10 md:hidden">
          <button onClick={() => scrollToSection('ai-agents')} className="p-2 text-white w-full text-center hover:opacity-80 transition-opacity">AI Agents</button>
          <button onClick={() => scrollToSection('voice-os')} className="p-2 text-white w-full text-center hover:opacity-80 transition-opacity">Voice OS</button>
          <button onClick={() => scrollToSection('integrations')} className="p-2 text-white w-full text-center hover:opacity-80 transition-opacity">Integrations</button>
          <button onClick={() => scrollToSection('faq')} className="p-2 text-white w-full text-center hover:opacity-80 transition-opacity">FAQ</button>
          <button className="bg-white flex items-center gap-3 text-base font-normal capitalize leading-loose justify-center px-6 py-2 rounded-[55px] hover:opacity-90 transition-opacity mt-2"
            onClick={() => window.open('https://form.typeform.com/to/xz8hSQfk', '_blank')}
          >
            <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)] font-medium">
              contact today
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

