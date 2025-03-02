import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative m-[2%] rounded-4xl'>
      {/* Layered Backgrounds */}
      <div className='absolute inset-0 z-0 flex justify-center'>
        {/* First background layer */}
        {/* <div className='absolute bottom-0 left-0 w-full h-[40%] bg-gray-700 opacity-30 rounded-b-4xl transform translate-y-4'></div> */}
        {/* Second background layer */}
        <div className='absolute bottom-0  w-[98%]  h-[55%] bg-gray-200 opacity-50 rounded-b-4xl transform translate-y-2'></div>
        {/* Third background layer */}
        <div className='absolute bottom-0  w-[95%] h-[50%] bg-gray-500 opacity-70 rounded-b-4xl transform translate-y-4'></div>
      </div>

      {/* Main Hero Content with background-one (on top of layers) */}
      <div className='relative z-10 background-one text-white overflow-hidden rounded-4xl'>
        <div className='mx-auto px-2 pb-20 pt-45 flex flex-col h-full sm:pb-16 sm:pt-32 md:pb-20 md:pt-40 lg:pb-20 lg:pt-45 xl:pb-24 xl:pt-48'>
          {/* Heading */}
          <div className=''>
            <h1 className='text-[2.6rem] px-2 sm:px-[15%] font-bold leading-12 tracking-tight text-white gradient-text sm:text-5xl sm:leading-tight md:text-6xl md:leading-snug lg:text-[6rem] lg:leading-[5.8rem] xl:text-[7.6rem] xl:leading-28'>
              <span className='whitespace-nowrap'>AI Services</span>
              <br />
              <span className='whitespace-nowrap'>for your Business</span>
              <br />
              <span className='whitespace-nowrap'>Growth</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className='mt-6 text-md text-gray-300 max-w-5xl px-2 sm:px-[15%] sm:mt-4 sm:text-base md:mt-5 md:text-lg lg:mt-6 lg:text-lg xl:mt-6 xl:text-xl'>
          From automation to AI strategy, we help enterprises unlock AI’s full potential. Boost efficiency, innovation, and competitive edge
          </p>

          {/* Buttons and Links */}
          <div className='px-2 sm:px-[15%] mt-10 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-6 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-12'>
            {/* Button Container */}
            <div className='flex flex-row space-x-4 gap-2 sm:space-x-0'>
              <button className='bg-[#daeb20] text-black font-semibold py-3 px-8 rounded-lg cursor-pointer hover:scale-105 transition-colors w-full sm:w-auto sm:py-2 sm:px-6 md:py-3 md:px-7 lg:py-3 lg:px-8 xl:py-4 xl:px-9'>
                Partner with AI Experts
              </button>
              {/* <Link
                to='/services'
                className='text-gray-300 hover:bg-[#8d9294] hover:text-white font-semibold py-3 px-8 rounded-sm transition-colors w-full sm:w-auto sm:py-2 sm:px-6 md:py-3 md:px-7 lg:py-3 lg:px-8 xl:py-4 xl:px-9 text-center'
              >
                Our services
              </Link> */}
            </div>
            {/* Divider */}
            <div className='w-full h-px bg-gray-400 sm:w-px sm:h-16'></div>
            {/* Loved by Founders */}
            <div className='flex items-center space-x-4 text-gray-300 mt-4 sm:mt-0 sm:space-x-3 md:space-x-3 lg:space-x-4 xl:space-x-4'>
              <div className='text-base sm:text-sm md:text-base lg:text-base xl:text-lg'>
                <span>AI in Enterprise </span> <br />
                <span>Solutions</span>
              </div>
              {/* <div className='flex -space-x-2'>
                <img
                  src='/pic-1.avif'
                  alt='Founder1'
                  className='w-10 h-10 rounded-full sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12'
                />
                <img
                  src='pic-2.avif'
                  alt='Founder 2'
                  className='w-10 h-10 rounded-full sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12'
                />
                <img
                  src='pic-3.avif'
                  alt='Founder 3'
                  className='w-10 h-10 rounded-full sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12'
                />
              </div> */}
              <span className='text-sm w-10 h-10 flex justify-center items-center bg-[#8d9294] rounded-full text-white sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12'>
                ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
