import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 360,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className='text-white py-8 sm:py-10 px-4 sm:px-8 md:px-[10%] lg:px-[16%] font-sans'>
      <h1 className='text-2xl sm:text-3xl mb-6 sm:mb-8 font-medium text-center sm:text-left'>
        How it works?
      </h1>
      <div className='text-left space-y-4 sm:space-y-6'>
        {/* Step 1 - Light Card */}
        <div className='bg-white text-black p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[2%] mb-2 sm:mb-[18px] align-top h-auto min-h-[50px] sm:h-[280px] hover:scale-102'>
          <div className='text-base sm:text-lg font-semibold mb-8 sm:mb-8 border w-fit rounded-full px-2'>
            Step 1
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-3'>
            Initiate & Align
          </h2>
          <p className='text-base sm:text-lg font-light leading-6'>
            We analyze your systems, workflows, and AI infrastructure to
            identify inefficiencies, automation opportunities, and high-impact
            AI improvements.
          </p>
        </div>

        {/* Step 2 - Dark Card */}
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[12px] align-top h-auto min-h-[50px] sm:h-[280px] hover:scale-102'>
          <div className='text-base sm:text-lg font-semibold mb-8 sm:mb-8 border w-fit rounded-full px-2'>
            Step 2
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-3'>
            Define & Strategize
          </h2>
          <p className='text-base sm:text-lg font-light leading-6'>
            Based on our findings, we craft a tailored AI optimization
            plan—outlining how we’ll enhance speed, efficiency, and accuracy
            while reducing costs and increasing automation.
          </p>
        </div>

        {/* Step 3 - Light Card */}
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[2%] mb-2 sm:mb-[6px] align-top h-auto min-h-[50px] sm:h-[280px] hover:scale-102'>
          <div className='text-base sm:text-lg font-semibold mb-8 sm:mb-8 border w-fit rounded-full px-2'>
            Step 3
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-3'>
            Implement & Optimize
          </h2>
          <p className='text-base sm:text-lg font-light leading-6'>
            We optimize AI models, automate processes, and deploy scalable
            solutions—fine-tuning LLMs, enhancing RAG pipelines, and integrating
            advanced AI workflows with minimal disruption.
          </p>
        </div>

        {/* Step 4 - Dark Card with Three Animated Circles */}
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[6px] align-top flex flex-col h-auto min-h-[50px] sm:h-[280px] hover:scale-102'>
          <div className='text-base sm:text-lg font-semibold mb-8 sm:mb-8 border w-fit rounded-full px-2'>
            Step 4
          </div>

          {/* Animated Circles Container */}
        

          <h2 className='text-xl sm:text-2xl font-semibold mb-3'>
            Scale & Dominate
          </h2>
          <p className='text-base sm:text-lg font-light leading-6 mb-4'>
            AI isn’t a one-time fix. We ensure your AI solutions continue to
            evolve—fine-tuning, scaling, and optimizing to keep your business at
            the cutting edge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;