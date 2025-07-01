import React, { useState } from 'react';

const RealTimeOS = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Telephony via SIP Trunking",
      description: "Connect to providers like RingCentral, NICE, and others using elastic SIP. Flexible, carrier-agnostic setup for fast deployment.",
      image: "/Group 1000005082.png"
    },
    {
      title: "Custom Actions",
      description: "Voice agents can send SMS, track orders, and create tickets — automating tasks so your team can focus on what matters.",
      image: "/custom actions.png"
    },
    {
      title: "Custom Workflows",
      description: "Automate full call flows with actions like booking, transfers, and escalation — all fully configurable to match your logic.",
      image: "/image 2 (2).png"
    },
    {
      title: "Ready-Made AI Agent Templates",
      description: "Choose from prebuilt agents for sales, support, and scheduling. Launch fast and start seeing results right away.",
      image: "/image 4 (2).png"
    },
    {
      title: "Multilingual Agents",
      description: "Deploy voice agents in 15+ languages. Manage global conversations without duplicating flows or content.",
      image: "/Group 1 (2).png"
    }
  ];

  return (
    <section id="voice-os" className="relative flex flex-row items-center gap-x-12 justify-center mt-20 max-w-[1240px] mx-auto px-4 max-md:flex-col max-md:gap-x-0 max-md:gap-y-8 max-md:items-stretch">
      <div className="flex flex-col justify-center w-[38%] min-w-[340px] max-w-[480px] max-md:w-full max-md:min-w-0 max-md:max-w-full">
        <h2 className="text-white text-[65px] font-normal leading-[75px] tracking-[-1.3px] max-md:max-w-full max-md:text-[32px] max-md:leading-tight">
          Complete Voice OS
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-8 max-md:text-sm max-md:mt-4">
          One platform to automate, manage, and scale every phone conversation — from routing to resolution. Everything you need to build, launch, and run voice AI agents in one unified tool.
        </p>
        <div className="w-full mt-8 max-md:mt-4">
          <div className="w-full">
            {features.map((feature, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left transition-all duration-300 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <h3 className="text-[rgba(240,240,240,1)] text-[26px] font-medium leading-none mb-2 max-md:text-base">
                    {feature.title}
                  </h3>
                  {activeFeature === index && (
                    <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 max-md:text-xs">
                      {feature.description}
                    </p>
                  )}
                </button>
                {index < features.length - 1 && (
                  <div className="border min-h-px w-full mt-5 border-[rgba(255,255,255,0.2)] border-solid" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="bg-white flex min-h-[44px] items-center gap-[18px] text-base font-normal capitalize leading-loose justify-center mt-8 pl-[18px] pr-[7px] py-[7px] rounded-[55px] hover:opacity-90 transition-opacity max-md:text-xs max-md:mt-4 max-md:pl-4 max-md:pr-2 max-md:py-2"
          onClick={() => window.open('https://form.typeform.com/to/xz8hSQfk', '_blank')}
        >
          <div className="bg-clip-text bg-[linear-gradient(45deg,#0B0C0D_0%,#1C1E21_100%)]">
            contact today
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-center w-[62%] min-w-[425px] max-w-[750px] max-md:w-full max-md:min-w-0 max-md:max-w-full">
        <div className="flex items-center justify-center w-full h-[525px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-[50px] overflow-hidden max-md:h-[220px]">
          <img
            src={features[activeFeature].image}
            className="object-contain w-full h-full max-h-[500px] rounded-[40px] transition-all duration-500 max-md:max-h-[200px]"
            alt="Voice OS illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default RealTimeOS;

