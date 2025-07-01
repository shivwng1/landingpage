import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Q: How quickly can we go live?",
      answer: "A: Full deployment in 21 days with our guided implementation. We handle integration, training, and optimization so you can focus on your business.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/ec629d02d68cd2784cf9d67bbbbe2d736e835580?placeholderIfAbsent=true"
    },
    {
      question: "Q: Will this disrupt our current operations?",
      answer: "A: Our phased rollout approach ensures zero disruption. We start with a pilot program and gradually scale, allowing your team to adapt smoothly while maintaining current service levels.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/08bb481f9721f41fa0a2e5e74e6c25ca5022bcf0?placeholderIfAbsent=true"
    },
    {
      question: "Q: What if our team isn't technical?",
      answer: "A: No technical expertise required. Our platform is designed for business users with drag-and-drop interfaces, pre-built templates, and comprehensive training programs for your staff.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/e5330a0557d5038c782f8f7624f67da490231b9c?placeholderIfAbsent=true"
    },
    {
      question: "Q: How do you ensure call quality?",
      answer: "A: Enterprise-grade infrastructure with 99.9% uptime SLA, redundant systems, real-time monitoring, and automatic failover ensure consistent, high-quality voice experiences for every interaction.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/38bc87fc8c9d2bd9c894644f136d64ddf6d2ae8e?placeholderIfAbsent=true"
    },
    {
      question: "Q: Can we white-label this for clients?",
      answer: "A: Absolutely. Complete white-label solution with your branding, custom domains, and client-specific configurations. Perfect for agencies and service providers offering AI solutions to their clients.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6ad2874588a464283dc42630b0b3266ec5b89664?placeholderIfAbsent=true"
    },
    {
      question: "Q: What about data security and compliance?",
      answer: "A: Enterprise-grade security with SOC 2 compliance, end-to-end encryption, data residency options, and industry-specific compliance features. Your data security is our top priority.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/23f3e3383898433cb230fd38b05c68361d14336a?placeholderIfAbsent=true"
    },
    {
      question: "Q: How does pricing work as we scale?",
      answer: "A: Transparent, usage-based pricing that scales with your success. No hidden fees, with volume discounts and flexible billing options to match your business growth patterns.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/47f939700b4d3553333c40bd5a4e9c4ca1abf75b?placeholderIfAbsent=true"
    },
    {
      question: "Q: What integrations do you support?",
      answer: "A: 500+ pre-built integrations including major CRMs (Salesforce, HubSpot), telephony providers (RingCentral, Twilio), and business tools. Custom integrations available via our API platform.",
      icon: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/6f153722f760a6ce099cb249d711b1bfaa760ec5?placeholderIfAbsent=true"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative flex w-full max-w-[1056px] flex-col items-center mt-[130px] px-4 max-md:max-w-full max-md:mt-10" style={{ transform: 'translateY(-30%)' }}>
      <div className="flex w-full flex-col items-center text-center mb-[50px]">
        <h2 className="text-white text-[65px] font-normal leading-none tracking-[-1.3px] max-md:max-w-full max-md:text-[32px] max-md:leading-tight">
          Frequently Asked Questions.
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-md:max-w-full max-md:text-sm">
          Got questions about building with Avishkar AI? We've gathered the most
          common ones to help you get started faster. From integration to
          pricing and compliance, find the answers you need right here.
        </p>
      </div>
      <div className="w-full max-w-[860px] max-md:max-w-full">
        {faqItems.map((item, index) => (
          <div key={index} className={`mb-5 pb-2 ${index !== 0 ? 'mt-5' : ''}`}>
            {expandedIndex === index ? (
              <div className="bg-[rgba(255,255,255,0.02)] border flex w-full flex-col justify-center pt-4 pb-6 px-6 rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid max-md:px-4">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-between text-2xl text-[rgba(240,240,240,1)] font-normal leading-none w-full text-left mb-4"
                >
                  <div className="flex-1 pr-4">
                    {item.question}
                  </div>
                  <span className="ml-4 text-3xl font-bold select-none">-</span>
                </button>
                <div className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 pl-0">
                  {item.answer}
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpanded(index)}
                className="bg-[rgba(255,255,255,0.02)] border flex min-h-[70px] w-full text-2xl text-[rgba(240,240,240,1)] font-normal leading-none justify-between items-center px-6 py-4 rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:px-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex-1 text-left pr-4">
                  {item.question}
                </div>
                <span className="ml-4 text-3xl font-bold select-none">+</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

