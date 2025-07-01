import React from 'react';

const ToolsIntegration = () => {
  const tools = [
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/00d9bfd4ca0e3c9095e33000fc94d45b1c0068f1?placeholderIfAbsent=true", aspect: "aspect-[0.75]", width: "w-12" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/2547f1de3963f584d83599a11dbd2842f4e401eb?placeholderIfAbsent=true", aspect: "aspect-[1.2]", width: "w-[77px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/f43fe53359b6c6dc4841933289add5a61187fa71?placeholderIfAbsent=true", aspect: "aspect-[1.34]", width: "w-[86px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/82e3ee184decdbe08e37cbf7770e1a73be90fcff?placeholderIfAbsent=true", aspect: "aspect-[0.75]", width: "w-12" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/b7aabfbbf4c007cc810a1a01ba42f10044a9b8f9?placeholderIfAbsent=true", aspect: "aspect-[0.75]", width: "w-12" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/5076b81506fd6831a0ba0de7b95cd717cb8e0f01?placeholderIfAbsent=true", aspect: "aspect-[0.75]", width: "w-12" },
    { src: "https://cdn.builder.io/api/v1/image/assets/a779a9e19efc4dadbbc0b4313fcda8ab/24392c9e148b3b8fe560adcd0167f37227c69e8c?placeholderIfAbsent=true", aspect: "aspect-[1.55]", width: "w-[99px]" }
  ];

  return (
    <section id="integrations" className="relative flex w-full max-w-[1240px] flex-col items-center mt-[130px] max-md:max-w-full max-md:mt-10" style={{ transform: 'translateY(-30%)' }}>
      <div className="flex w-[1056px] max-w-full flex-col items-center text-center">
        <h2 className="text-white text-[65px] font-normal leading-[75px] tracking-[-1.3px] max-md:max-w-full max-md:text-[32px] max-md:leading-tight">
          Connect to Your Favorite Tools, Platforms & APIs
        </h2>
        <p className="text-[rgba(206,206,207,1)] text-lg font-light leading-7 mt-[30px] max-md:max-w-full max-md:text-sm">
          No need to rebuild your infrastructure. Daily seamlessly integrates
          with your existing tech stack using flexible APIs and prebuilt
          connectors. Connect with platforms like Twilio, Stripe, and
          Webhooks, or plug into CRMs, analytics, and support tools to
          supercharge your real-time experiences.
        </p>
      </div>
      <div className="flex min-h-36 w-full flex-col items-center mt-[50px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-center gap-5 justify-center max-md:flex-wrap max-md:gap-2 max-md:justify-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`bg-[rgba(255,255,255,0.02)] border self-stretch flex min-h-36 flex-col items-center justify-center w-[200px] my-auto px-6 py-10 rounded-[20px] border-[rgba(255,255,255,0.1)] border-solid max-md:w-[120px] max-md:px-2 max-md:py-4`}
            >
              <img
                src={tool.src}
                className={`${tool.aspect} object-contain ${tool.width} max-md:w-[60px]`}
                alt={`Integration tool ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsIntegration;
