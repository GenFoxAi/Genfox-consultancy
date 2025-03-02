import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { IoMdContact } from 'react-icons/io';

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SpringModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      role: '',
      companyName: '',
      companyWebsite: '',
      companySize: '',
      annualRevenue: '',
      projectBudget: '',
      services: '',
      description: ''
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
      if (!formData.companyName) {
        setStatus('Please enter your company name');
        return;
      }
      if (!formData.companySize) {
        setStatus('Please select company size');
        return;
      }
      if (!formData.projectBudget) {
        setStatus('Please select project budget');
        return;
      }
      if (!formData.description) {
        setStatus('Please provide a description');
        return;
      }

      setStatus('Submitting...');

      const googleFormEndpoint =
        'https://docs.google.com/forms/d/e/1FAIpQLSf6wixNhxnl4103Od7drKF2rPc-fLvb-quW8tp109Q2qmM9LA/formResponse';

      const body = new URLSearchParams();
      body.append('entry.1395028843', formData.fullName);
      body.append('entry.1818829057', formData.email);
      body.append('entry.1445224656', formData.role);
      body.append('entry.884011484', formData.companyName);
      body.append('entry.836075675', formData.companyWebsite);
      body.append('entry.377500078', formData.companySize);
      body.append('entry.1458042920', formData.annualRevenue);
      body.append('entry.1736938662', formData.projectBudget);
      body.append('entry.1320618773', formData.services);
      body.append('entry.1084696328', formData.description);

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
          role: '',
          companyName: '',
          companyWebsite: '',
          companySize: '',
          annualRevenue: '',
          projectBudget: '',
          services: '',
          description: ''
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
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer no-scrollbar"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#daea20] text-white p-6 rounded-4xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/30 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-black grid place-items-center mx-auto">
                  <IoMdContact />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2 text-black">
                  Genfox.AI Support
                </h3>
                <p className="text-center mb-6 text-black/50">
                  Please fill out the form below to contact us.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-black">
                        What is your name? *
                      </label>
                      <input
                        id="fullName"
                        placeholder="John Doe"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
                        What is your email? *
                      </label>
                      <input
                        id="email"
                        placeholder="john@company.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium mb-1 text-black">
                      What is your role within your organization?
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                    >
                      <option value="">Select role</option>
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="AI Lead">AI Lead</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium mb-1 text-black">
                        Company name? *
                      </label>
                      <input
                        id="companyName"
                        placeholder="Your Company"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyWebsite" className="block text-sm font-medium mb-1 text-black">
                        Company website?
                      </label>
                      <input
                        id="companyWebsite"
                        placeholder="https://yourwebsite.com"
                        type="url"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium mb-1 text-black">
                        Company size? *
                      </label>
                      <select
                        id="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      >
                        <option value="">Select company size</option>
                        <option value="20 - 50 people">20 - 50 people</option>
                        <option value="Startup (Less than 20 employees)">Startup (Less than 20 employees)</option>
                        <option value="Small Business (20-100 employees)">Small Business (20-100 employees)</option>
                        <option value="Mid-Sized Company (100-500 employees)">Mid-Sized Company (100-500 employees)</option>
                        <option value="Enterprise (500+ employees)">Enterprise (500+ employees)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="annualRevenue" className="block text-sm font-medium mb-1 text-black">
                        Company’s annual revenue?
                      </label>
                      <select
                        id="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleChange}
                        className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      >
                        <option value="">Select revenue range</option>
                        <option value="$500K - $2M/month">$500K - $2M/month</option>
                        <option value="Less than $1M">Less than $1M</option>
                        <option value="$1M - $10M">$1M - $10M</option>
                        <option value="$10M - $100M">$10M - $100M</option>
                        <option value="$100M+">$100M+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="projectBudget" className="block text-sm font-medium mb-1 text-black">
                      Project budget? *
                    </label>
                    <select
                      id="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                      <option value="$5K - $20K">$5K - $20K</option>
                      <option value="$20K - $50K">$20K - $50K</option>
                      <option value="$50K - $100K">$50K - $100K</option>
                      <option value="$100K+">$100K+</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="services" className="block text-sm font-medium mb-1 text-black">
                      What services are you interested in?
                    </label>
                    <select
                      id="services"
                      value={formData.services}
                      onChange={handleChange}
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                    >
                      <option value="">Select services</option>
                      <option value="Developing a custom AI solution">Developing a custom AI solution</option>
                      <option value="AI Strategy & Consulting">AI Strategy & Consulting</option>
                      <option value="Enterprise AI Optimization">Enterprise AI Optimization</option>
                      <option value="Multi-Agent AI Development">Multi-Agent AI Development</option>
                      <option value="Autonomous AI Systems">Autonomous AI Systems</option>
                      <option value="LLM Fine-Tuning & Custom AI Models">LLM Fine-Tuning & Custom AI Models</option>
                      <option value="AI-Powered Automation">AI-Powered Automation</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium mb-1 text-black">
                      How can we help? *
                    </label>
                    <textarea
                      id="description"
                      placeholder="Type your response here..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                      className="w-full p-2 rounded text-black focus:ring-white focus:border-white focus:outline-white"
                      rows="4"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-transparent hover:bg-white hover:text-black hover border-2 cursor-pointer border-white/70 transition-colors text-white font-semibold w-full py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-white hover:scale-102 hover:opacity-90 transition-opacity text-black cursor-pointer font-semibold w-full py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>

                  {status && (
                    <p className="mt-4 text-sm text-center text-white">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className=" text-white py-[20%] sm:py-[6%] md:py-[8%]">
      <div className="px-[12%] sm:px-[8%] md:px-[12%] lg:px-[16%] flex flex-col">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 text-left">
            Still not sure?
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg">
            Contact us to learn more about Sanny AI Automation Agency and figure out how your team can change the way they work with AI.
          </p>
        </div>

        <div className="mb-4 sm:mb-5 md:mb-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-white text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full py-[18%] sm:py-[14%] md:py-[10%] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] hover:bg-gray-200 tracking-tight cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            Book call
          </button>
        </div>

        <p className="text-sm sm:text-base md:text-md font-light text-white/80 text-center">
          or mail us at <span className='underline cursor-pointer'>hey@genfox.ai</span>
        </p>
      </div>
      
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default CallToAction;