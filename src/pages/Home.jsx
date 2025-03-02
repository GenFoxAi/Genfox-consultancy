import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Toad from '../components/Toad';
import Features from '../components/Features';
import Services from '../components/Services';
import  SwipeCarousel  from '../components/SwipeCarousel';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';
import ScrollSection from '../components/ScrollSection';

const Home = () => {
  return (
    <div className=''>
      <section id="hero"><Hero /></section>
      <section id="toad"><Toad /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><Features /></section>
      <section id="services"><Services /></section>
      <section id="scroll-section"><ScrollSection /></section>
      <section id="success-stories"><SwipeCarousel /></section>
      <section id="team"><TeamSection /></section>
      <section id="faq"><FAQ /></section>
      <section id="call-to-action"><CallToAction /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
};

export default Home;