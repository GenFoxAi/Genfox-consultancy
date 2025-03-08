import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className='min-h-screen bg-black px-4 py-8 sm:px-6 lg:px-8'>
      {/* Fixed Header */}
      <Link
        to='/'
        className='fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8'
      >
        <div className='flex items-center bg-black/35 backdrop-blur-sm rounded-full py-3 px-4 w-fit'>
          <button className='text-white font-bold text-2xl flex items-center ml-1 special-font cursor-pointer'>
            <img
              src='/genfox.png'
              className='h-8 mr-1 cursor-pointer'
              alt='genfoxlogo'
            />
            Genfox
            <span className='text-sm ml-1'></span>
          </button>
        </div>
      </Link>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto text-white pt-20 pb-12'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12 text-center'>
          Privacy Policy
        </h1>
        

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            1. Introduction
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            Welcome to My Genfox – where your privacy is as sacred as your
            morning coffee! We’re dedicated to protecting your personal data
            with the same zeal we bring to perfecting our service. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website and use our services.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            2. Important Information and Who We Are
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            My Genfox is committed to protecting your privacy in accordance with
            applicable data protection laws. We are the data controller
            responsible for your personal information. In other words, if your
            data were a prized possession, we’d be the trusted guardians
            ensuring its safety.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            3. The Data We Collect About You
          </h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4 text-white/80'>
            We may collect various categories of personal data, which include
            (but aren’t limited to):
          </p>
          <ul className='list-disc pl-6 sm:pl-8 space-y-2 text-white/80'>
            <li>
              <strong>Identity Data:</strong> Your name, username, or other
              identifiers.
            </li>
            <li>
              <strong>Contact Data:</strong> Email address, phone number, or
              mailing address.
            </li>
            <li>
              <strong>Financial Data:</strong> Payment details when you make a
              purchase.
            </li>
            <li>
              <strong>Transaction Data:</strong> Records of your interactions
              and purchases.
            </li>
            <li>
              <strong>Technical Data:</strong> Information like your IP address,
              browser type, and device details.
            </li>
          </ul>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            4. How Is Your Personal Data Collected?
          </h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4 text-white/80'>
            We gather data in two main ways:
          </p>
          <ul className='list-disc pl-6 sm:pl-8 space-y-2 text-white/80'>
            <li>
              <strong>Direct Interactions:</strong> When you provide information
              through account registration, subscriptions, purchases, or
              customer support.
            </li>
            <li>
              <strong>Automated Technologies:</strong> Our website uses cookies
              and similar tools to automatically capture details about your
              browsing behavior. Think of it as us taking notes (politely) to
              improve your experience.
            </li>
          </ul>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            5. How We Use Your Personal Data
          </h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4 text-white/80'>
            We use your information to:
          </p>
          <ul className='list-disc pl-6 sm:pl-8 space-y-2 text-white/80'>
            <li>
              <strong>Provide and Enhance Services:</strong> Operate, maintain,
              and continuously improve My Genfox.
            </li>
            <li>
              <strong>Communication:</strong> Send you important updates,
              newsletters, and, if you’re up for it, the occasional promotional
              tidbit (you can opt out anytime).
            </li>
            <li>
              <strong>Personalization:</strong> Tailor our services and content
              to your unique tastes and preferences.
            </li>
            <li>
              <strong>Legal Compliance:</strong> Fulfill our contractual and
              legal obligations.
            </li>
          </ul>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            6. Data Security
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            Your data is protected by robust security measures designed to keep
            it safe from unauthorized access or breaches. While no digital
            fortress is completely impenetrable, rest assured that we work
            tirelessly to keep your data secure – consider us your digital
            bodyguards.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            7. Data Retention
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            We retain your personal data only as long as necessary to fulfill
            the purposes outlined in this policy and to comply with legal
            requirements. When the time comes to part ways with your data, we’ll
            ensure it’s securely disposed of.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            8. Your Legal Rights
          </h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4 text-white/80'>
            Depending on your location, you may have certain rights regarding
            your personal data. These rights may include, but are not limited
            to:
          </p>
          <ul className='list-disc pl-6 sm:pl-8 space-y-2 text-white/80'>
            <li>
              <strong>Access:</strong> Requesting a copy of the data we hold
              about you.
            </li>
            <li>
              <strong>Correction:</strong> Requesting updates or corrections to
              your information.
            </li>
            <li>
              <strong>Deletion:</strong> Asking us to erase your data.
            </li>
            <li>
              <strong>Restriction/Objection:</strong> Limiting or objecting to
              certain processing activities.
            </li>
          </ul>
          <p className='text-sm sm:text-base leading-relaxed mt-4 text-white/80'>
            To exercise these rights, please contact us at [Insert Contact
            Information]. We promise to handle your requests with the utmost
            care—and maybe even a smile.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            9. International Transfers
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            If we transfer your personal data across borders, we will ensure
            that it remains protected in accordance with applicable laws. Think
            of it as our way of ensuring your data gets first-class treatment,
            no matter where it goes.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            10. Third-Party Links
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            Our website may contain links to external sites that are not
            operated by us. We cannot vouch for the privacy practices of these
            third-party websites, so we encourage you to review their privacy
            policies before sharing any personal information.
          </p>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            11. Contact Details
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please reach out to us at:
          </p>
          <ul className='list-disc pl-6 sm:pl-8 space-y-2 mt-4 text-white/80'>
            <li>
              <strong>Email:</strong> [Insert Email Address]
            </li>
            <li>
              <strong>Mail:</strong> [Insert Mailing Address]
            </li>
            <li>
              <strong>Phone:</strong> [Insert Phone Number]
            </li>
          </ul>
        </section>

        <section className='mb-8 sm:mb-12'>
          <h2 className='text-xl sm:text-2xl font-medium mb-4'>
            12. Changes to the Privacy Policy
          </h2>
          <p className='text-sm sm:text-base leading-relaxed text-white/80'>
            We reserve the right to update this Privacy Policy from time to
            time. Any changes will be posted on this page with an updated
            revision date. We recommend reviewing this policy periodically to
            stay informed about how we’re protecting your data.
          </p>
        </section>

        {/* Back Button */}
        <div className='text-center mt-8 sm:mt-12'>
          <Link
            to='/'
            className='inline-block rounded-sm bg-white px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-md font-semibold text-black hover:bg-white/80 focus:ring-3 focus:ring-[#daeb20]/50 transition-all duration-200'
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <div className='flex justify-center items-center py-6'>
        <div className='h-0.5 w-full  bg-gradient-to-r from-transparent via-white/50 to-transparent'></div>
      </div>
      <footer className='text-white/60 py-4'>
        <div className='px-[16%] mx-auto flex flex-col items-center justify-center text-center'>
          {/* Top row: Copyright and social links */}
          <div className='flex flex-col md:flex-row items-center justify-between w-full mb-[8%]'>
            <div className='text-sm mb-2 md:mb-0'>
              © 2025 Genfox AI Optimization Agency.
            </div>
            <div className='flex space-x-4 text-sm'>
              <a href='#' className='hover:text-white'></a>
              <Link to='/privacy-policy' className='hover:text-white'>
                Privacy Policy
              </Link>
              <span className='mx-1'>|</span>
              <a
                href='https://www.linkedin.com/company/genfox-ai/'
                target='_blank'
                className='hover:text-white'
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom row: Powered by and Created by */}
          <div className='text-xs text-gray-500'>Powered by Genfox</div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
