import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // Total number of slides (hardcoded as 2 for now)
  const totalSlides = 2;

  // Handle slide navigation
  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  // Auto-play functionality
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      paginate(1); // Move to the next slide
    }, 333000); // Change slide every 3 seconds

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);

  // Variants for slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Swipe threshold (minimum drag distance to trigger slide change)
  const swipeThreshold = 100; // Pixels

  // Handle drag end to determine slide change
  const handleDragEnd = (e, { offset }) => {
    const swipeDistance = offset.x;
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance < 0) {
        paginate(1); // Dragged left -> next slide
      } else {
        paginate(-1); // Dragged right -> previous slide
      }
    }
  };

  return (
    <div className='flex flex-col px-[16%] justify-center my-[5%] gap-5'>
      <div className='mb-12'>
        <h2 className='text-3xl font-semibold tracking-tight'>Case Study</h2>
        <p className='text-md sm:text-xl mt-4 max-w-md leading-7 font-light text-white/80'>
          AI-driven solutions powering automation, analytics, and innovation.
        </p>
      </div>
      <div className='w-full max-w-6xl overflow-hidden'>
        {/* Carousel Container */}
        <div className='relative h-[500px]'>
          <AnimatePresence initial={false} custom={direction}>
            {currentIndex === 0 && (
              <motion.div
                key='slide1'
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className='absolute w-full h-full cursor-grab active:cursor-grabbing'
              >
                <div className='relative bg-white rounded-4xl py-5 h-[500px]'>
                 <img src="/test.png" alt="" />
                </div>
              </motion.div>
            )}

            {currentIndex === 1 && (
              <motion.div
                key='slide2'
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className='absolute w-full h-full cursor-grab active:cursor-grabbing'
              >
                <div className='relative bg-white rounded-4xl py-5 shadow-lg h-[500px]'>
                  <div className='flex flex-col md:flex-row'>
                    <div className='w-full p-4'>
                      <img
                        src='Usecase 2.jpg'
                        alt='John Doe'
                        className='w-full h-full rounded-lg object-cover'
                      />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                      <div className='bg-gray-200 p-4 rounded-lg mb-4 max-w-[250px] self-start'>
                        <p className='text-gray-800 text-sm'>
                          Hey, how many leave days do I have left this month?
                        </p>
                        <p className='text-sm text-gray-600 mt-2'>John Seb</p>
                      </div>

                      <div className='bg-blue-100 p-4 rounded-lg mb-4 max-w-[270px] self-end'>
                        <p className='text-blue-800 text-sm'>
                          You have a quota of 1 leave day remaining this month,
                          as you already took one last week.😊
                        </p>
                        <p className='text-sm text-blue-600 mt-2 text-right'>
                          Commit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute bottom-4 left-4 flex items-center space-x-2'>
                    <img
                      src='genfox.png'
                      alt='Automated'
                      className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                      <p className='text-gray-800 font-semibold'>Comm-IT</p>
                      <p className='text-gray-600 text-sm'>Ai Payroll System</p>
                    </div>
                  </div>
                  <div className='absolute bottom-4 right-4'>
                    <p className='special-font text-2xl font-bold gradient-text-two'>
                      Streamline Your Payroll with AI Precision
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots (Manually Written) */}
        <div className='flex justify-center mt-4 space-x-2'>
          <button
            onClick={() => {
              const direction = 0 > currentIndex ? 1 : -1;
              setCurrentIndex(0);
              setPage([0, direction]);
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === 0 ? 'bg-gray-500' : 'bg-gray-300'
            }`}
            aria-label='Go to slide 1'
          />
          <button
            onClick={() => {
              const direction = 1 > currentIndex ? 1 : -1;
              setCurrentIndex(1);
              setPage([1, direction]);
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === 1 ? 'bg-gray-500' : 'bg-gray-300'
            }`}
            aria-label='Go to slide 2'
          />
        </div>
      </div>
    </div>
  );
};

export default SwipeCarousel;
