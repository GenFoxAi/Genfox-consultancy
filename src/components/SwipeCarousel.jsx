import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalSlides = 2;

  const slideData = [
    {
      title: 'Kinder Bench',
      savings: '~48%',
      subheading: 'ai automation of sub heading idk',
      description:
        "AI automation of childcare for a kindergarten. We invest a lot of effort in our clients' projects because we want them to succeed.",
      problem:
        'The company faced inefficiencies in managing daily tasks such as child attendance tracking, meal planning, and parent communication. These repetitive tasks required significant staff involvement, leading to a drain on time and resources that could be better spent on direct child engagement.',
      image: '/test1.png',
      video:
        'https://drive.google.com/file/d/1FHkLN5Td6nggP_223EQrowSuDyTVt-Jo/view?usp=sharing',
      alt: 'donna',
    },
    {
      title: 'Another Case Study',
      subheading: 'ai automation of sub heading idk',
      savings: '~35%',
      description: 'Innovative solutions for another client project.',
      problem:
        'Challenges in managing operational tasks led to inefficiencies.',
      image: '/test2.png',
      video: '', // No video for the second slide
      alt: 'commit',
    },
  ];

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
        <h2 className=' text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>
          Case Study
        </h2>
        <p className='text-sm sm:text-md md:text-xl mt-4 max-w-md leading-6 font-light text-white/80'>
          AI-driven solutions powering automation, analytics, and innovation.
        </p>
      </div>
      <div className='w-full max-w-6xl overflow-hidden'>
        <div className='relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
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
            )}
          </AnimatePresence>
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
          <button
            onClick={() => {
              const direction = 0 > currentIndex ? 1 : -1;
              setCurrentIndex(0);
              setPage([0, direction]);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
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
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === 1 ? 'bg-gray-500' : 'bg-gray-300'
            }`}
            aria-label='Go to slide 2'
          />
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
            className='fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 px-4'
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsPopupOpen(false);
            }}
          >
            <motion.div
              className='p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative text-white custom-scrollbar'
            >
              <div className='w-full flex justify-center mb-4 sm:mb-6'>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className='text-white bg-gray-300/20 px-3 cursor-pointer rounded-full pb-1 text-2xl sm:text-4xl font-thin hover:text-gray-300 transition-colors'
                >
                  ×
                </button>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                <div className='w-full sm:w-[40%]'>
                  <h3 className='text-xl sm:text-2xl font-medium'>
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subheading && (
                    <h3 className='text-base sm:text-lg text-white/50 mt-1 sm:mt-2'>
                      {currentSlide.subheading}
                    </h3>
                  )}
                  <div className='w-full border-t border-gray-300 my-3 sm:my-4'></div>
                  <p className='text-xl sm:text-2xl mb-1 sm:mb-2 text-white'>
                    {currentSlide.savings}
                  </p>
                  <p className='text-base sm:text-lg text-white/50'>
                    Time and resource savings
                  </p>
                </div>
                <div className='w-full sm:w-[60%]'>
                  <p className='text-base sm:text-lg mb-3 sm:mb-4 text-white/50'>
                    {currentSlide.description}
                  </p>
                  <h4 className='text-base sm:text-lg mb-1 sm:mb-2 text-white'>
                    Problem
                  </h4>
                  <p className='text-base sm:text-lg text-white/50 mb-4'>
                    {currentSlide.problem}
                  </p>
                </div>
              </div>
              <div className='w-full mt-4 flex flex-col items-center gap-4'>
                <h4 className='text-base self-start sm:text-lg mb-1 sm:mb-2 text-white'>
                  Assets
                </h4>
                <img
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className='w-full h-auto rounded-lg object-contain'
                />
                {currentIndex === 0 && currentSlide.video && (
                  <>
                    <div className='w-full border-t border-gray-300 my-3 sm:my-4'></div>
                    <h4 className='text-base self-start sm:text-lg mb-1 sm:mb-2 text-white'>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwipeCarousel;