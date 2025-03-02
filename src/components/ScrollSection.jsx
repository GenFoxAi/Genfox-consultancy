import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cards } from '../utils/content';

const ScrollSection = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const cardHeight = 700;
  const totalCardsHeight = cardHeight * cards.length;
  const marginBottom = 0;
  const totalScrollDistance = totalCardsHeight + marginBottom * (cards.length - 1);

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -totalScrollDistance]),
    { stiffness: 300, damping: 30 }
  );

  const cardColors = ['#ffffff', '#daea22', '#19181b'];

  const shapeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  const CardWithShape = ({ card, index, color }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.3,
    });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);

    const renderShape = (index) => {
      switch (index) {
        case 0: // Card 1 - Two Rotating Squares
          return (
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              animate={controls}
              className="relative w-32 h-32 flex items-center justify-center"
            >
              {/* Larger Square - Rotates Clockwise */}
              <motion.div
                className="absolute w-24 h-24 border-2 border-black"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {/* Smaller Square - Rotates Counterclockwise */}
              <motion.div
                className="absolute w-16 h-16 border-2 border-black"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          );

        case 1: // Card 2 - Three Pulsing Circles
          return (
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              animate={controls}
              className="flex justify-center items-center space-x-4"
            >
              {/* Circle 1 */}
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-black"
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0,
                }}
              />
              {/* Circle 2 */}
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-black"
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              {/* Circle 3 */}
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-black"
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>
          );

        case 2: // Card 3 - Six Moving Triangles
          return (
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              animate={controls}
              className="w-32 h-32 relative"
            >
              {/* Triangle 1 - Diagonal Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: [-10, 10, -10],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Triangle 2 - Horizontal Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: [-30, 30, -30],
                  y: 0,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Triangle 3 - Vertical Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '0%', top: '30%' }}
                animate={{
                  x: 0,
                  y: [-30, 30, -30],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Triangle 4 - Opposite Diagonal Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '0%', top: '30%' }}
                animate={{
                  x: [10, -10, 10],
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Triangle 5 - Opposite Horizontal Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '0%', top: '30%' }}
                animate={{
                  x: [30, -30, 30],
                  y: 0,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Triangle 6 - Opposite Vertical Movement */}
              <motion.div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-white absolute"
                style={{ left: '0%', top: '30%' }}
                animate={{
                  x: 0,
                  y: [30, -30, 30],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          );

        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className="w-full p-10 rounded-4xl shadow-md flex flex-col justify-between mb-10"
        style={{
          height: `${cardHeight}px`,
          backgroundColor: color,
          color: index === 2 ? '#ffffff' : '#000000',
        }}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
          <div className="flex-grow flex items-center justify-center">
            {renderShape(index)}
          </div>
          <p className="text-left font-light text-lg mt-4">{card.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full px-[4%] sm:px-[13.5%] mx-auto my-[10%] sm:my-0 sm:h-[250vh]"
    >
      <div
        className="text-center mb-10 sm:mb-0 px-10 sm:px-4 
        sm:px-6 
         md:left-0 md:top-0 md:h-[calc(70vh-80px)] md:w-1/2 md:text-white md:flex md:items-center md:justify-center md:p-6 md:z-10 md:sticky 
        lg:p-8
        xl:p-10"
      >
        <div className="text-left">
          <h1 className="text-3xl font-medium">Services We Provide</h1>
          <h1 className="text-md text-white md:text-white/80 font-medium mb-4 hidden">
            Powering the future of AI-driven enterprises
          </h1>
          <p className="text-white md:text-white/80 font-light">
          AI isn’t just a tool. It’s a transformation.
          Our expert-driven services empower you to optimize, scale and lead in the age of intelligence
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:w-1/2 md:ml-[50%] md:h-[400vh] lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {cards.map((card, index) => (
            <CardWithShape
              key={index}
              card={card}
              index={index}
              color={cardColors[index] || '#ffffff'}
            />
          ))}
        </div>

        <div
          ref={scrollRef}
          className="hidden md:block h-[300vh] overflow-y-auto scroll-smooth snap-y snap-mandatory"
          style={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          <motion.div
            style={{ y, position: 'relative' }}
            className="flex flex-col items-center justify-start h-full"
          >
            {cards.map((card, index) => (
              <CardWithShape
                key={index}
                card={card}
                index={index}
                color={cardColors[index] || '#ffffff'}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;