
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanyLogos from '@/components/CompanyLogos';
import AIAgentsCarousel from '@/components/AIAgentsCarousel';
import RealTimeOS from '@/components/RealTimeOS';
import ToolsIntegration from '@/components/ToolsIntegration';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col relative min-h-[5296px] overflow-hidden items-center font-sans">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e8ef77f3adae2482ac4e5f3b3ca7a33d33ab6ba6?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      
      <div className="flex flex-col relative self-stretch min-h-[1440px] w-full pt-[30px] pb-[389px] max-md:max-w-full max-md:pb-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/db5476361fd0d2726473459dc9f113201a7adc80?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
        />
        
        <Header />
        <Hero />
        <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <CompanyLogos />
        </div>
      </div>
      
      <main className="relative z-10 flex w-full max-w-[1240px] flex-col items-center px-4 sm:px-6 lg:px-8">
        <AIAgentsCarousel />
        <RealTimeOS />
        <ToolsIntegration />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
