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
        <div className='bg-white text-black p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[1%] mb-2 sm:mb-[6px] align-top h-auto min-h-[350px] sm:h-[400px]'>
          <div className='text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2'>
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
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[12px] align-top h-auto min-h-[350px] sm:h-[400px]'>
          <div className='text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2'>
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
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block sm:mr-[1%] mb-2 sm:mb-[6px] align-top h-auto min-h-[350px] sm:h-[400px]'>
          <div className='text-base sm:text-lg font-semibold mb-28 sm:mb-40 border w-fit rounded-full px-2'>
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
        <div className='bg-[#19181b] text-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-4xl shadow-lg w-full sm:w-[48%] sm:inline-block mb-2 sm:mb-[6px] align-top flex flex-col h-auto min-h-[550px] sm:h-[600px]'>
          <div className='text-base sm:text-lg font-semibold mb-14 sm:mb-14 border w-fit rounded-full px-2'>
            Step 4
          </div>

          {/* Animated Circles Container */}
          <motion.div
            ref={ref}
            variants={circleVariants}
            initial='hidden'
            animate={controls}
            className='w-32 sm:w-44 h-32 sm:h-44 rounded-full border-2 
                      flex items-center justify-center shadow-lg mx-auto self-center mb-8 sm:mb-16 relative'
          >
            {/* Circle 1 - Original diagonal movement */}
            <motion.div
              className='w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 absolute'
              animate={{
                scale: [1, 1, 1],
                rotate: [0, 180, 360],
                x: [-40, 40, -40],
                y: [-40, 40, -40],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            />

            {/* Circle 2 - Horizontal movement */}
            <motion.div
              className='w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 absolute'
              animate={{
                scale: [1, 1, 1],
                rotate: [0, 90, 0],
                x: [-50, 50, -50],
                y: 0,
              }}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            />

            {/* Circle 3 - Vertical movement */}
            <motion.div
              className='w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 absolute'
              animate={{
                scale: [1, 1, 1],
                rotate: [0, -90, 0],
                x: 0,
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 2.2,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            />
          </motion.div>

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