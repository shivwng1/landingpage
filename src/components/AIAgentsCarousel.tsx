import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AIAgentsCarousel = () => {
  const agents = [
    {
      title: "Telehealth AI Agent",
      description: "Compassionate healthcare AI that handles appointment scheduling, patient triage, and care coordination with medical accuracy and compliance.",
      features: [
        "Secure patient conversations",
        "Symptom assessment protocols", 
        "Appointment management",
        "Care follow-up automation"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/90dde32f73505cec78c6ac3634a3d2d912695788?placeholderIfAbsent=true"
    },
    {
      title: "Customer Support AI Agent",
      description: "Intelligent customer service AI that resolves queries, handles complaints, and provides 24/7 support with human-like empathy.",
      features: [
        "Multi-language support",
        "Sentiment analysis",
        "Issue escalation",
        "Knowledge base integration"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/fbf12fae90ed6cba55bba555e16bf2fe6f1a6b76?placeholderIfAbsent=true"
    },
    {
      title: "Debt Collection AI Agent",
      description: "Professional debt recovery AI that handles collection calls with compliance, negotiates payment plans, and maintains customer relationships.",
      features: [
        "Regulatory compliance",
        "Payment plan negotiation",
        "Customer retention focus",
        "Automated documentation"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/50c30923087ed6be993e7caa3d29188550e6ec7f?placeholderIfAbsent=true"
    },
    {
      title: "Partner Onboarding AI Agent",
      description: "Streamlined partner integration AI that guides new partners through setup, training, and activation processes efficiently.",
      features: [
        "Automated onboarding flows",
        "Training module delivery",
        "Progress tracking",
        "Support escalation"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/2e76ff5f87d02eca20167c0719250cb1fa3af40c?placeholderIfAbsent=true"
    },
    {
      title: "Process Optimization AI Agent",
      description: "Intelligent process improvement AI that analyzes workflows, identifies bottlenecks, and recommends optimization strategies.",
      features: [
        "Workflow analysis",
        "Performance metrics",
        "Optimization recommendations",
        "ROI tracking"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/d8cec3d1bdb805b099a4c37f673bf6f19389e9f9?placeholderIfAbsent=true"
    }
  ];

  return (
    <section id="ai-agents" className="relative z-10 flex pt-8 w-full max-w-[1240px] flex-col items-stretch mx-auto max-md:pt-4" style={{ transform: 'translateY(-35%)' }}>
      <div className="self-center flex w-[1056px] max-w-full flex-col items-stretch text-center">
        <h2 className="text-white text-[65px] font-normal leading-none tracking-[-1.3px] max-md:max-w-full max-md:text-[32px] max-md:leading-tight">
          AI Agent Specialists
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 self-center w-[618px] mt-[30px] max-md:max-w-full max-md:text-sm max-md:w-full">
          Deploy specialized AI agents designed for your specific BPO needs.
          Each agent is optimized for industry-leading performance.
        </p>
      </div>
      <div className="mt-[50px] max-md:mt-6">
        <Carousel className="w-full max-w-[1200px] mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4 max-md:flex-col max-md:gap-4">
            {agents.map((agent, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 max-md:w-full max-md:pl-0">
                <div className="bg-[rgba(255,255,255,0.02)] border rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid overflow-hidden h-full max-md:p-2">
                  <div className="relative aspect-[4/3] overflow-hidden max-md:aspect-auto max-md:h-[180px]">
                    <img
                      src={agent.image}
                      className="w-full h-full object-cover object-center max-md:object-contain max-md:h-full"
                      alt={agent.title}
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  <div className="p-6 max-md:p-2">
                    <h3 className="text-[rgba(240,240,240,1)] text-xl font-medium leading-tight mb-3 max-md:text-base">
                      {agent.title}
                    </h3>
                    <p className="text-[rgba(206,206,207,1)] text-sm font-light leading-6 mb-4 max-md:text-xs">
                      {agent.description}
                    </p>
                    <ul className="text-[rgba(206,206,207,1)] text-sm font-light leading-6 mb-6 space-y-1 max-md:text-xs">
                      {agent.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="bg-[rgba(255,255,255,0.02)] border flex min-h-[45px] items-center gap-3 text-sm text-white leading-loose w-full justify-center px-4 py-2 rounded-[25px] border-[rgba(255,255,255,0.1)] border-solid hover:opacity-80 transition-opacity max-md:text-xs max-md:px-2 max-md:py-1"
                      onClick={() => window.open('https://form.typeform.com/to/xz8hSQfk', '_blank')}
                    >
                      <span>Learn More</span>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default AIAgentsCarousel;

