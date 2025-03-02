import React, { useEffect, useRef } from 'react';
import { services } from '../utils/content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ number, title, description, imageSrc }) => (
  <div className="bg-[#19181b] text-white p-6 rounded-3xl shadow-md flex flex-col transform hover:scale-[1.02] transition-transform duration-300">
    <div className="flex-1">
      <div className="text-lg font-light mb-4 text-white/80 border w-fit px-2 rounded-full">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
    <div className="w-full h-[230px] overflow-hidden rounded-2xl">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

const Services = () => {
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const icon4Ref = useRef(null);
  const icon5Ref = useRef(null);
  const icon6Ref = useRef(null);
  const icon7Ref = useRef(null);
  const icon8Ref = useRef(null);
  const icon9Ref = useRef(null);
  const icon10Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Icon 1 (acrobat.png)
    gsap.set(icon1Ref.current, {
      width: 80,
      height: 80,
      position: 'absolute',
      top: '7%',
      left: '11%',
      zIndex: 0
    });
    gsap.to(icon1Ref.current, {
      y: 200,
      x: -150,
      rotation: 180,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      },
      ease: 'none',
      duration: 2
    });

    // Icon 2 (adobe-photoshop.png)
    gsap.set(icon2Ref.current, {
      width: 75,
      height: 75,
      position: 'absolute',
      top: '0%',
      left: '30%',
      zIndex: 0
    });
    gsap.to(icon2Ref.current, {
      y: 250,
      x: 100,
      rotation: 270,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1.3
      },
      ease: 'none',
      duration: 2.8
    });

    // Icon 3 (itunes.png)
    gsap.set(icon3Ref.current, {
      width: 80,
      height: 80,
      position: 'absolute',
      top: '9%',
      left: '50%',
      zIndex: 0
    });
    gsap.to(icon3Ref.current, {
      y: 300,
      x: -200,
      rotation: 360,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1.6
      },
      ease: 'none',
      duration: 3.6
    });

    // Icon 4 (after-effects.png)
    gsap.set(icon4Ref.current, {
      width: 90,
      height: 90,
      position: 'absolute',
      top: '8%',
      left: '65%',
      zIndex: 0
    });
    gsap.to(icon4Ref.current, {
      y: 350,
      x: 150,
      rotation: 450,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom 50%',
        scrub: 1.9
      },
      ease: 'none',
      duration: 4.4
    });

    // Icon 5 (twitter.png)
    gsap.set(icon5Ref.current, {
      width: 70,
      height: 70,
      position: 'absolute',
      top: '2%',
      left: '85%',
      zIndex: 0
    });
    gsap.to(icon5Ref.current, {
      y: 400,
      x: -100,
      rotation: 540,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 2.2
      },
      ease: 'none',
      duration: 5.2
    });
    // Icon 6 (twitter.png)
    gsap.set(icon6Ref.current, {
      width: 70,
      height: 70,
      position: 'absolute',
      top: '60%',
      left: '90%',
      zIndex: 0
    });
    gsap.to(icon6Ref.current, {
      y: 400,
      x: -100,
      rotation: 540,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 2.2
      },
      ease: 'none',
      duration: 5.2
    });
    // Icon 7 (twitter.png)
    gsap.set(icon7Ref.current, {
      width: 70,
      height: 70,
      position: 'absolute',
      top: '60%',
      left: '50%',
      zIndex: 0
    });
    gsap.to(icon7Ref.current, {
      y: 350,
      x: -10,
      rotation: 250,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom 20%',
        scrub: 1.9
      },
      ease: 'none',
      duration: 4.4
    });
    // Icon 8 (twitter.png)
    gsap.set(icon8Ref.current, {
      width: 70,
      height: 70,
      position: 'absolute',
      top: '60%',
      left: '20%',
      zIndex: 0
    });
    gsap.to(icon8Ref.current, {
      y: 350,
      x: 150,
      rotation: 450,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
        end: 'bottom 50%',
        scrub: 1.9
      },
      ease: 'none',
      duration: 4.4
    });

      // Icon 9 (twitter.png)
      gsap.set(icon9Ref.current, {
        width: 70,
        height: 70,
        position: 'absolute',
        top: '60%',
        left: '10%',
        zIndex: 0
      });
      gsap.to(icon9Ref.current, {
        y: 400,
        x: -100,
        rotation: 540,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 2.2
        },
        ease: 'none',
        duration: 5.2
      });

      // Icon 9 (twitter.png)
      gsap.set(icon10Ref.current, {
        width: 70,
        height: 70,
        position: 'absolute',
        top: '60%',
        left: '70%',
        zIndex: 0
      });
      gsap.to(icon10Ref.current, {
        y: 300,
        x: -100,
        rotation: 140,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 1.2
        },
        ease: 'none',
        duration: 5.2
      });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-white py-[15%] px-4 relative overflow-hidden">
      {/* Floating Icons */}
      <img ref={icon1Ref} src="/lang.png" alt="Acrobat icon" className="absolute hidden sm:block" />
      <img ref={icon2Ref} src="/deep2.png" alt="Photoshop icon" className="absolute hidden sm:block" />
      <img ref={icon3Ref} src="/chat.jpg" alt="iTunes icon" className="absolute hidden sm:block rounded-lg" />
      <img ref={icon4Ref} src="/mongodb.png" alt="After Effects icon" className="absolute hidden sm:block rounded-lg" />
      <img ref={icon5Ref} src="/langsmith.png" alt="mongo icon" className="absolute hidden sm:block" />
      <img ref={icon6Ref} src="/milvus.png" alt="milv icon" className="absolute hidden sm:block" />
      <img ref={icon7Ref} src="/grok.png" alt="lang icon" className="absolute hidden sm:block h-25 w-25" />
      <img ref={icon8Ref} src="/gemi.png" alt="lang icon" className="absolute hidden sm:block h-25 w-25" />
      <img ref={icon9Ref} src="/micro.png" alt="lang icon" className="absolute hidden sm:block h-25 w-25 rounded-lg" />
      <img ref={icon10Ref} src="/langchain.png" alt="lang icon" className="absolute hidden sm:block h-25 w-25 rounded-lg" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-semibold mb-10 text-left ml-6">
          We are suitable
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((card, index) => (
            <ServiceCard
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;