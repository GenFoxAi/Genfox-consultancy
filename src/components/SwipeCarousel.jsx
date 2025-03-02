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
      projectName: 'Kinder Bench Automation System',
      usecase:
        'Streamlining Kindergarten Operations with AI-Powered Automation',
      problem:
        'Managing a kindergarten involves numerous repetitive tasks such as tracking child attendance, coordinating meal schedules, planning daily activities, and maintaining consistent communication with parents. These tasks, while essential, demanded significant time and effort from staff members, pulling their focus away from direct child engagement and care. Manual processes also led to errors, delays, and inconsistencies, which frustrated both staff and parents. Over time, this inefficiency strained resources, reduced operational effectiveness, and limited the ability to scale services without hiring additional personnel.',
      solution:
        'The Kinder Bench Automation System leverages advanced AI technology to automate key operational tasks. Attendance tracking is now handled through facial recognition software integrated with a secure check-in system, eliminating manual roll calls. Meal planning is optimized using an AI algorithm that accounts for dietary restrictions, nutritional needs, and inventory levels, generating schedules in seconds. Parent communication is streamlined via an automated messaging platform that sends real-time updates, reminders, and reports. Daily activity planning is enhanced with AI-driven suggestions tailored to educational goals and child preferences, reducing preparation time. This comprehensive solution integrates seamlessly into existing workflows, requiring minimal training.',
      summary:
        'By implementing the Kinder Bench Automation System, the kindergarten achieved a remarkable transformation in efficiency and staff satisfaction. The automation of repetitive tasks resulted in an estimated 48% reduction in time spent on administrative duties, allowing staff to dedicate more energy to fostering child development and engagement. Parents reported higher satisfaction due to improved communication and transparency, while the organization saved on operational costs by reducing manual errors and optimizing resource use. This AI-driven approach not only addressed immediate pain points but also positioned the kindergarten as a forward-thinking institution, capable of scaling operations without compromising quality.',
      image: '/test1.png',
      video:
        'https://drive.google.com/file/d/1FHkLN5Td6nggP_223EQrowSuDyTVt-Jo/view?usp=sharing',
      alt: 'donna',
    },
    {
      projectName: 'Kinder Bench Parent Portal',
      usecase: 'Enhancing Parent Engagement with a Digital Interface',
      problem:
        'Kindergarten staff struggled to keep parents consistently informed about their children’s progress, daily activities, and important announcements. Traditional methods like paper notes, sporadic emails, and phone calls were time-consuming and often ineffective, leading to miscommunication and frustration. Parents frequently felt disconnected from their child’s day-to-day experience, and staff wasted valuable time addressing individual inquiries that could have been preemptively resolved with better tools. This lack of a centralized communication hub also made it difficult to share multimedia updates or emergency alerts efficiently.',
      solution:
        'The Kinder Bench Parent Portal is a custom-built digital platform powered by AI and cloud technology. It provides parents with a user-friendly interface accessible via web and mobile devices, offering real-time access to their child’s attendance records, meal logs, activity schedules, and developmental milestones. The portal uses AI to generate personalized progress reports and predictive insights based on child data, helping parents stay informed and engaged. Automated notifications alert parents to upcoming events, payment deadlines, or urgent updates, while a secure messaging feature allows direct communication with staff. The system also supports multimedia uploads, enabling teachers to share photos and videos of classroom moments instantly.',
      summary:
        'The deployment of the Kinder Bench Parent Portal revolutionized the relationship between the kindergarten and its parent community. By centralizing communication and leveraging AI for personalized insights, the portal reduced staff workload related to parent inquiries by approximately 40%, freeing them to focus on teaching and caregiving. Parents gained unprecedented visibility into their child’s kindergarten experience, fostering trust and engagement. The system’s ability to deliver instant updates and multimedia content strengthened community ties, while its scalability ensured it could grow with the organization. Ultimately, this solution bridged the gap between home and school, creating a more connected and informed ecosystem.',
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
                {/* Left Side - Enhanced Content */}
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

                  {/* Stats Section */}
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

                  {/* Key Features Section */}
                  <div className='w-full border-t border-gray-600 my-4'></div>
                  <h4 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    Key Features
                  </h4>
                  <ul className='text-base  sm:text-lg text-white/80 space-y-2 list-disc pl-5'>
                    <li>Real-time Attendance Tracking</li>
                    <li>AI-Powered Meal Planning</li>
                    <li>Integrated Chat System</li>
                    <li>24/7 Live Support</li>
                  </ul>

                  {/* Team Section */}
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

                  {/* Milestones Section */}
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

                {/* Right Side - Problem, Solution, Summary */}
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

              {/* Assets Section */}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwipeCarousel;
