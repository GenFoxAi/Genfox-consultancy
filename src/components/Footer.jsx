import React from 'react';

const Footer = () => {
  return (
    <footer className=' text-white/60 py-4'>
      <div className='px-[16%] mx-auto flex flex-col items-center justify-center text-center'>
        {/* Top row: Copyright and social links */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full mb-[8%]'>
          <div className='text-sm mb-2 md:mb-0'>
            © 2025 © Genfox AI Agency Inc.
          </div>
          <div className='flex space-x-4 text-sm'>
            <a href='#' className='hover:text-white'>
              LinkedIn
            </a>
            <span className='mx-1'>|</span>
            <a href='#' className='hover:text-white'>
              Terms
            </a>
          </div>
        </div>

        {/* Bottom row: Powered by and Created by */}
        <div className='text-xs text-gray-500'>Powered by Genfox</div>
      </div>
    </footer>
  );
};

export default Footer;
