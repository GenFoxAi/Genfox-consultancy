import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { slideData } from '../utils/content';

const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalSlides = 3;

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    let autoPlayInterval;
    if (!isPopupOpen) {
      autoPlayInterval = setInterval(() => {
        paginate(1);
      }, 8000);
    }
    return () => clearInterval(autoPlayInterval);
  }, [currentIndex, isPopupOpen]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

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

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const swipeThreshold = 50;

  const handleDragEnd = (e, { offset }) => {
    const swipeDistance = offset.x;
    if (Math.abs(swipeDistance) > swipeThreshold) {
      paginate(swipeDistance < 0 ? 1 : -1);
    }
  };

  const currentSlide = slideData[currentIndex];

  return (
    <div className='flex flex-col items-center justify-center my-8 px-4 sm:px-8 md:px-[10%] lg:px-[16%] gap-5 relative'>
      <div className='mb-8 w-full'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>
          Case Study
        </h2>
        <p className='text-sm sm:text-md md:text-xl mt-4 max-w-md leading-6 font-light text-white/80'>
          AI-driven solutions powering automation, analytics, and innovation.
        </p>
      </div>
      <div className='w-full max-w-6xl overflow-hidden'>
        <div className='relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`slide${currentIndex}`}
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
              className='absolute w-full h-full cursor-grab active:cursor-grabbing select-none'
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                className='w-[90%] sm:w-[85%] md:w-full h-full object-contain rounded-3xl bg-white mx-auto pointer-events-none'
              />
              <button
                onClick={() => setIsPopupOpen(true)}
                className='absolute top-4 right-4 rounded-full p-2 text-gray-800 hover:bg-white transition-colors'
                aria-label='Show slide details'
              >
                <span className='text-xl font-bold cursor-pointer hover:text-blue-500'>
                  <AiOutlineInfoCircle />
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index > currentIndex ? 1 : -1;
                setCurrentIndex(index);
                setPage([index, direction]);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                currentIndex === index ? 'bg-gray-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            key='popup'
            variants={popupVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black flex items-center justify-center z-50 px-4'
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsPopupOpen(false);
            }}
          >
            <motion.div className='p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative text-white custom-scrollbar bg-black'>
              <div className='w-full flex justify-center mb-4 sm:mb-6'>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className='text-white bg-gray-700/50 px-3 cursor-pointer rounded-full pb-1 text-2xl sm:text-4xl font-thin hover:bg-gray-700 transition-colors'
                >
                  ×
                </button>
              </div>
              <div className='flex flex-col sm:flex-row gap-6 sm:gap-8'>
                <div className='w-full sm:w-[40%]'>
                  <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                    {currentSlide.projectName}
                  </h3>
                  {currentSlide.usecase && (
                    <h4 className='text-base sm:text-lg text-white/70 mt-1 sm:mt-2'>
                      {currentSlide.usecase}
                    </h4>
                  )}
                  <div className='w-full border-t border-gray-600 my-4'></div>

                  <div className='text-base sm:text-lg text-white/80 space-y-3'>
                    <p>
                      <span className='font-semibold text-white'>
                        Launched:
                      </span>{' '}
                      Q1 2024
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        Tech Stack:
                      </span>{' '}
                      AI, React, Cloud
                    </p>
                    <p>
                      <span className='font-semibold text-white'>Users:</span>{' '}
                      150+ Families
                    </p>
                    <p>
                      <span className='font-semibold text-white'>Impact:</span>{' '}
                      48% Time Saved
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        Accuracy:
                      </span>{' '}
                      98% AI Detection
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        Cost Savings:
                      </span>{' '}
                      $10K/Year
                    </p>
                  </div>

                  <div className='w-full border-t border-gray-600 my-4'></div>
                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Key Features
                  </h4>
                  <ul className='text-base sm:text-lg text-white/80 space-y-2 list-disc pl-5'>
                    <li>Real-time Attendance Tracking</li>
                    <li>AI-Powered Meal Planning</li>
                    <li>Integrated Chat System</li>
                    <li>24/7 Live Support</li>
                  </ul>

                  <div className='w-full border-t border-gray-600 my-4'></div>
                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Team
                  </h4>
                  <div className='text-base sm:text-lg text-white/80 space-y-2'>
                    <p>
                      <span className='font-semibold text-white'>
                        Lead Dev:
                      </span>{' '}
                      Jane Doe
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        Designer:
                      </span>{' '}
                      John Smith
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        AI Specialist:
                      </span>{' '}
                      Alex Carter
                    </p>
                  </div>

                  <div className='w-full border-t border-gray-600 my-4'></div>
                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Milestones
                  </h4>
                  <div className='text-base sm:text-lg text-white/80 space-y-2'>
                    <p>Q1 2024: Beta Launch</p>
                    <p>Q3 2024: 100+ Users</p>
                    <p>Q4 2024: Full Release</p>
                  </div>
                </div>

                <div className='w-full sm:w-[60%]'>
                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Problem
                  </h4>
                  <p className='text-base sm:text-lg text-white/70 mb-4'>
                    {currentSlide.problem}
                  </p>
                  <div className='w-full border-t border-gray-600 my-4'></div>

                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Solution
                  </h4>
                  <p className='text-base sm:text-lg text-white/70 mb-4'>
                    {currentSlide.solution}
                  </p>
                  <div className='w-full border-t border-gray-600 my-4'></div>

                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Summary
                  </h4>
                  <p className='text-base sm:text-lg text-white/70 mb-4'>
                    {currentSlide.summary}
                  </p>
                </div>
              </div>

              <div className='w-full mt-6'>
                <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                  Assets
                </h4>
                <img
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className='w-full h-auto rounded-lg object-contain mb-4'
                />
                {currentSlide.video && (
                  <>
                    <div className='w-full border-t border-gray-600 my-4'></div>
                    <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                      Video
                    </h4>
                    <iframe
                      src='https://drive.google.com/file/d/1FHkLN5Td6nggP_223EQrowSuDyTVt-Jo/preview'
                      width='100%'
                      height='480'
                      allow='autoplay'
                      className='w-full rounded-lg'
                    ></iframe>
                  </>
                )}
                {currentSlide.additionalImages && currentSlide.additionalImages.length > 0 && (
                  <>
                    <div className='w-full border-t border-gray-600 my-4'></div>
                    <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                      Additional Images
                    </h4>
                    <div className='grid grid-cols-2 gap-4'>
                      {currentSlide.additionalImages.map((img, index) => (
                        <div key={index} className='flex flex-col items-center'>
                          <img
                            src={img}
                            alt={`Additional image ${index + 1}`}
                            className='w-full h-[600px] rounded-lg object-contain'
                          />
                          <p className='text-white mt-2'>{index + 1}.</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwipeCarousel;
