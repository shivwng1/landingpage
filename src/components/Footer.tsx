import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[rgba(255,255,255,0.02)] border w-full flex flex-col items-center mt-20 pt-[76px] pb-[30px] px-4 border-[rgba(255,255,255,0.1)] border-solid max-md:pt-8 max-md:pb-6">
      <div className="mx-auto max-w-[1240px] w-full flex flex-col items-center max-md:px-2">
        <div className="flex items-center gap-5 max-md:flex-col max-md:gap-2">
          <img
            src="/lovable-uploads/d8ef68e3-b2a4-4110-91f1-2272d58e4004.png"
            className="w-[79px] h-[76px] object-contain max-md:w-12 max-md:h-12"
            alt="Avishkar AI Logo"
          />
          <div className="text-white text-3xl font-medium max-md:text-lg max-md:mt-1">Avishkar AI</div>
        </div>
        <nav className="flex gap-[22px] text-base text-white font-normal whitespace-nowrap leading-loose flex-wrap mt-10 max-md:flex-col max-md:gap-2 max-md:mt-4 max-md:text-sm">
          <button onClick={() => scrollToSection('ai-agents')} className="p-4 hover:opacity-80 transition-opacity">AI Agents</button>
          <button onClick={() => scrollToSection('voice-os')} className="p-4 hover:opacity-80 transition-opacity">Voice OS</button>
          <button onClick={() => scrollToSection('integrations')} className="p-4 hover:opacity-80 transition-opacity">Integrations</button>
          <button onClick={() => scrollToSection('faq')} className="p-4 hover:opacity-80 transition-opacity">FAQ</button>
        </nav>
        <div className="flex items-center gap-4 mt-[30px] max-md:mt-4 max-md:gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/76ba181240597b9efe08272f0ed49f5c7f3fe0d7?placeholderIfAbsent=true"
            className="aspect-[3.65] object-contain w-[164px] max-w-full max-md:w-[80px]"
            alt="Social media icons"
          />
          <a
            href="https://www.linkedin.com/company/anjaneya-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full hover:bg-[rgba(255,255,255,0.2)] transition-colors max-md:p-2"
          >
            <Linkedin className="w-6 h-6 text-white max-md:w-4 max-md:h-4" />
          </a>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e20f6521ec416524de9ee5c3a7818aa3156f236c?placeholderIfAbsent=true"
          className="aspect-[1000] object-contain w-full max-w-[1240px] mt-[75px] max-md:mt-6"
          alt="Footer divider"
        />
        <div className="flex w-full max-w-[1240px] items-center gap-x-8 text-base text-white font-normal leading-loose justify-between flex-wrap mt-[29px] max-md:flex-col max-md:gap-2 max-md:text-xs max-md:mt-4">
          <div className="self-stretch my-auto max-md:text-center">
            Copyright 2025 | All rights reserved
          </div>
          <div className="self-stretch my-auto max-md:text-center">
            <a href="/terms.html" className="underline hover:text-blue-300 transition-colors">Terms & Condition</a> |
            <a href="/privacy.html" className="underline hover:text-blue-300 transition-colors ml-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

