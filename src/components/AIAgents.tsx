import React from 'react';

const AIAgents = () => {
  const agents = [
    {
      title: "Telehealth",
      description: "Compassionate healthcare AI that handles appointment scheduling, patient triage, and care coordination with medicale accuracy.",
      features: [
        "HIPAA-compliant conversations",
        "Symptom assessment protocols",
        "Appointment management",
        "Care follow-up automation"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/90dde32f73505cec78c6ac3634a3d2d912695788?placeholderIfAbsent=true",
      isExpanded: true
    },
    {
      title: "Telehealth",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/fbf12fae90ed6cba55bba555e16bf2fe6f1a6b76?placeholderIfAbsent=true",
      isExpanded: false
    },
    {
      title: "Debt Collection",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/50c30923087ed6be993e7caa3d29188550e6ec7f?placeholderIfAbsent=true",
      isExpanded: false
    },
    {
      title: "Partner Onboarding",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/2e76ff5f87d02eca20167c0719250cb1fa3af40c?placeholderIfAbsent=true",
      isExpanded: false
    },
    {
      title: "Process Optimization",
      image: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/d8cec3d1bdb805b099a4c37f673bf6f19389e9f9?placeholderIfAbsent=true",
      isExpanded: false
    }
  ];

  return (
    <section className="relative z-10 flex mt-[-259px] w-full max-w-[1240px] flex-col items-stretch max-md:max-w-full max-md:mt-[-200px]">
      <div className="self-center flex w-[1056px] max-w-full flex-col items-stretch text-center">
        <h2 className="text-white text-[65px] font-normal leading-none tracking-[-1.3px] max-md:max-w-full max-md:text-[40px]">
          AI Agent Specialists
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 self-center w-[618px] mt-[30px] max-md:max-w-full">
          Deploy specialized AI agents designed for your specific BPO needs.
          Each agent is optimized for industry-leading performance.
        </p>
      </div>
      <div className="flex w-full gap-5 text-[26px] text-[rgba(240,240,240,1)] font-medium flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
        {agents.map((agent, index) => (
          <article
            key={index}
            className="rotate-[1.224648970167536e-16rad] bg-[rgba(255,255,255,0.02)] border flex min-w-60 flex-col overflow-hidden items-center aspect-[1] grow shrink w-80 rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid"
          >
            <div className="flex flex-col relative aspect-[0.962] w-full">
              <img
                src={agent.image}
                className="absolute h-full w-full object-cover inset-0"
                alt={agent.title}
              />
              {agent.isExpanded ? (
                <div className="relative flex flex-col items-stretch justify-center p-5 rounded-[20px]">
                  <div className="flex min-h-[376px] w-full flex-col items-stretch justify-between">
                    <h3 className="rotate-[-1.224648970167536e-16rad] text-[rgba(240,240,240,1)] text-[26px] font-medium leading-none">
                      {agent.title}
                    </h3>
                    <p className="rotate-[-1.224648970167536e-16rad] text-lg text-[rgba(206,206,207,1)] font-light leading-7 mt-[21px]">
                      {agent.description}
                    </p>
                    <div className="rotate-[-1.224648970167536e-16rad] text-lg text-[rgba(206,206,207,1)] font-light leading-9 mt-[21px]">
                      {agent.features?.map((feature, idx) => (
                        <div key={idx}>{feature}</div>
                      ))}
                    </div>
                    <button className="rotate-[-1.224648970167536e-16rad] bg-[rgba(255,255,255,0.02)] border flex min-h-[57px] items-center gap-[25px] text-base text-white leading-loose mt-[21px] pl-[25px] pr-[9px] py-[9px] rounded-[130px] border-[rgba(255,255,255,0.1)] border-solid max-md:pl-5 hover:opacity-80 transition-opacity">
                      <span className="self-stretch my-auto">Learn More</span>
                      <div className="bg-white self-stretch flex w-10 shrink-0 h-10 my-auto rounded-[20px]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative rotate-[-1.224648970167536e-16rad] pt-[270px] max-md:pt-[100px]">
                  <div className="pt-[98px] pb-5 px-5 rounded-[0px_0px_20px_20px] text-[26px] font-medium leading-none whitespace-nowrap">
                    {agent.title}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AIAgents;
