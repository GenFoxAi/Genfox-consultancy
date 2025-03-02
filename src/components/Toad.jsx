'use client';
import styles from './page.module.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { svgs } from '../utils/content';

const phrase =
  'Genfox.AI delivers cutting-edge AI solutions designed for enterprises that don’t settle. From intelligent automation to custom-built AI systems, we help you scale faster, operate smarter, and stay ahead of the competition. Trusted by industry leaders, we turn AI potential into real-world results—seamlessly, securely, and at scale.';

export default function Toad() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();

    window.addEventListener('resize', () => ScrollTrigger.refresh());
    return () => window.removeEventListener('resize', () => ScrollTrigger.refresh());
  }, []);

  const createAnimation = () => {
    gsap.set(refs.current, { opacity: 0.2 });

    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top 80%',  // Start when top of container is at 80% of viewport height
        end: 'top 20%',    // End when top of container reaches 20% of viewport height
      },
      opacity: 1,
      ease: 'none',
      stagger: window.innerWidth <= 768 ? 0.05 : 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + '_' + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split('').forEach((letter, i) => {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
      {/* Uncomment this section if you want to include the SVG content */}
      {/* <div className="flex flex-col gap-y-4">
        <p className="text-white/50">Trusted by high-performing companies</p>
        <div className="flex gap-5 gap-x-10 flex-wrap">
          {svgs.map((svg) => (
            <div key={svg.id} dangerouslySetInnerHTML={{ __html: svg.content }} />
          ))}
        </div>
      </div> */}
    </main>
  );
}