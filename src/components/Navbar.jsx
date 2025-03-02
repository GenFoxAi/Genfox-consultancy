import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navbarVariants = {
    initial: { paddingTop: '3.5rem', paddingBottom: '1.25rem' },
    scrolled: { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      variants={navbarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between h-16 px-[4%] sm:px-[15%] ">
        {/* Logo Section */}
        <div className="flex items-center bg-[#343736]/64 backdrop-blur-md rounded-full py-3 px-4 ">
          <button
            onClick={scrollToTop}
            className="text-white font-bold text-2xl flex items-center ml-1 special-font cursor-pointer"
          >
            <img src="/genfox.png" className="h-8 mr-1 cursor-pointer" alt="genfoxlogo" />
            Genfox
            <span className="text-sm ml-1"></span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 bg-[#343736]/64 backdrop-blur-md rounded-full p-1">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-semibold py-3 ml-4 px-3 rounded-full transition-colors cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="success-stories"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-semibold py-3 px-2 rounded-full transition-colors cursor-pointer"
          >
          Case Study
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-semibold py-3 px-2 rounded-full transition-colors cursor-pointer"
          >
            Team
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-semibold py-3 px-2 rounded-full transition-colors cursor-pointer"
          >
            FAQ
          </Link>
          <a
            href="/buy"
            className="bg-white pr-4 text-black font-semibold py-3 px-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Navigation (Toggle + Buy) */}
        <div className="lg:hidden bg-[#343736]/24 backdrop-blur-2xl rounded-full p-1 flex items-center space-x-1">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <a
            href="/buy"
            className="bg-white text-black font-semibold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu (Full-Screen Sidebar) */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex flex-col p-6">
            {/* Close Button */}
            <button
              className="self-end p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col space-y-6 mt-8">
              <Link
                to="services"
                smooth={true}
                duration={800}
                className="text-white hover:text-gray-300 text-lg font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="success-stories"
                smooth={true}
                duration={800}
                className="text-white hover:text-gray-300 text-lg font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="team"
                smooth={true}
                duration={800}
                className="text-white hover:text-gray-300 text-lg font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="faq"
                smooth={true}
                duration={800}
                className="text-white hover:text-gray-300 text-lg font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}