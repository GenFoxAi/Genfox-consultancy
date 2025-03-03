import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CallToAction = ({ isOpen, setIsOpen }) => {
  const SpringModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      services: '',
      description: '',
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formData.fullName) {
        setStatus('Please enter your full name');
        return;
      }
      if (!formData.email || !emailPattern.test(formData.email)) {
        setStatus('Invalid email address');
        return;
      }
      // if (!formData.services) {
      //   setStatus('Please select services');
      //   return;
      // }
      if (!formData.description) {
        setStatus('Please provide a description');
        return;
      }

      setStatus('Submitting...');

      const googleFormEndpoint =
        'https://docs.google.com/forms/d/e/1FAIpQLScAgLLKnECEjtV1jFbQXigzD99b2Xpp6YmXHZu8xquOOw-uwA/formResponse';

      const body = new URLSearchParams();
      body.append('entry.580948521', formData.fullName);
      body.append('entry.2140212436', formData.email);
      body.append('entry.383664879', formData.services);
      body.append('entry.1551970246', formData.description);

      try {
        await fetch(googleFormEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        });
        setStatus('Success! Your response has been submitted.');
        setFormData({
          fullName: '',
          email: '',
          services: '',
          description: '',
        });
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
        }, 2000);
      } catch (error) {
        setStatus('Failed to submit. Please try again.');
      }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur py-[15%] p-4 sm:p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer overflow-y-auto custom-scrollbar"
          >
            <motion.div
              initial={{ scale: 0, rotate: '12.5deg' }}
              animate={{ scale: 1, rotate: '0deg' }}
              exit={{ scale: 0, rotate: '0deg' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[white] text-white p-4 sm:p-6 rounded-4xl w-full max-w-2xl shadow-xl cursor-default relative max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="relative z-10">
                <img src="/genfox.png" className='h-15 mx-auto' alt="logogenfox" />
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-black">
                  Genfox.AI Support
                </h3>
                <p className="text-center mb-6 text-black/50">
                  Please fill out the form below to contact us.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium mb-1 text-black"
                      >
                        What is your name? *
                      </label>
                      <input
                        id="fullName"
                        placeholder="John Doe"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black border-b-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1 text-black"
                      >
                        What is your email? *
                      </label>
                      <input
                        id="email"
                        placeholder="john@company.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black border-b-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>
{/* 
                  <div className="mb-4">
                    <label
                      htmlFor="services"
                      className="block text-sm font-medium mb-1 text-black"
                    >
                      What services are you interested in? *
                    </label>
                    <select
                      id="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black border-b-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                    >
                      <option value="">Select services</option>
                      <option value="Developing a custom AI solution">
                        Developing a custom AI solution
                      </option>
                      <option value="AI Strategy & Consulting">AI Strategy & Consulting</option>
                      <option value="Enterprise AI Optimization">Enterprise AI Optimization</option>
                      <option value="Multi-Agent AI Development">Multi-Agent AI Development</option>
                      <option value="Autonomous AI Systems">Autonomous AI Systems</option>
                      <option value="LLM Fine-Tuning & Custom AI Models">
                        LLM Fine-Tuning & Custom AI Models
                      </option>
                      <option value="AI-Powered Automation">AI-Powered Automation</option>
                    </select>
                  </div> */}

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium mb-1 text-black"
                    >
                      How can we help? *
                    </label>
                    <textarea
                      id="description"
                      placeholder="Type your response here..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black border-b-2 border-black focus:ring-0 focus:border-black focus:outline-none"
                      rows="2"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-transparent hover:border-2 hover:border-black hover:text-black/80 hover border-2 cursor-pointer border-white/70 transition-colors text-black font-semibold w-full py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-black hover:scale-102 hover:opacity-90 transition-opacity text-white cursor-pointer font-semibold w-full py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>

                  {status && (
                    <p className="mt-4 text-sm text-center text-black">{status}</p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <section className="text-white py-[20%] sm:py-[6%] md:py-[8%]">
      <div className="px-[12%] sm:px-[8%] md:px-[12%] lg:px-[16%] flex flex-col">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 text-left">
            Still not sure?
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg">
            Contact us to learn more about Genfox AI Automation Agency and figure
            out how your team can change the way they work with AI.
          </p>
        </div>

        <div className="mb-4 sm:mb-5 md:mb-6">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full py-[10%] sm:py-[14%] md:py-[10%] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] hover:bg-gray-200 tracking-tight cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            Book Now
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-md font-light text-white/80 text-center">
          or mail us at{' '}
          <span className="underline cursor-pointer">contact@genfox.ai</span>
        </p>
      </div>

      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default CallToAction;