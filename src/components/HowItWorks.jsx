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
    <div className='text-white py-6 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans max-w-5xl mx-auto'>
      <h1 className='text-2xl sm:text-3xl md:text-3xl mb-8 sm:mb-8 font-medium'>
        How it works?
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
        {/* Step 1 - Light Card */}
        <div className='bg-white text-black p-6 md:p-8 rounded-3xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300'>
          <div className='text-sm md:text-base font-semibold mb-6 border w-fit rounded-full px-2 py-1'>
            Step 1
          </div>
          <h2 className='text-xl md:text-2xl font-semibold mb-3'>
            Initiate & Align
          </h2>
          <p className='text-sm md:text-base font-light leading-relaxed'>
            We analyze your systems, workflows, and AI infrastructure to
            identify inefficiencies, automation opportunities, and high-impact
            AI improvements.
          </p>
        </div>

        {/* Step 2 - Dark Card */}
        <div className='bg-[#19181b] text-white p-6 md:p-8 rounded-3xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300'>
          <div className='text-sm md:text-base font-semibold mb-6 border w-fit rounded-full px-2 py-1'>
            Step 2
          </div>
          <h2 className='text-xl md:text-2xl font-semibold mb-3'>
            Define & Strategize
          </h2>
          <p className='text-sm md:text-base font-light leading-relaxed'>
            Based on our findings, we craft a tailored AI optimization
            plan—outlining how we’ll enhance speed, efficiency, and accuracy
            while reducing costs and increasing automation.
          </p>
        </div>

        {/* Step 3 - Dark Card */}
        <div className='bg-[#19181b] text-white p-6 md:p-8 rounded-3xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300'>
          <div className='text-sm md:text-base font-semibold mb-6 border w-fit rounded-full px-2 py-1'>
            Step 3
          </div>
          <h2 className='text-xl md:text-2xl font-semibold mb-3'>
            Implement & Optimize
          </h2>
          <p className='text-sm md:text-base font-light leading-relaxed'>
            We optimize AI models, automate processes, and deploy scalable
            solutions—fine-tuning LLMs, enhancing RAG pipelines, and integrating
            advanced AI workflows with minimal disruption.
          </p>
        </div>

        {/* Step 4 - Dark Card */}
        <div className='bg-[#19181b] text-white p-6 md:p-8 rounded-3xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300'>
          <div className='text-sm md:text-base font-semibold mb-6 border w-fit rounded-full px-2 py-1'>
            Step 4
          </div>
          <h2 className='text-xl md:text-2xl font-semibold mb-3'>
            Scale & Dominate
          </h2>
          <p className='text-sm md:text-base font-light leading-relaxed'>
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