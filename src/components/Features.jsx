import React from 'react';

const Features = () => {
  return (
    <section className="py-20 sm:py-16 md:py-20 mx-auto">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-8 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-4">
        <div className="text-left sm:text-left text-center flex-1 min-w-[200px] sm:min-w-[180px] md:min-w-[200px]">
          <span className="block mb-2 sm:mb-2 md:mb-2 mx-auto sm:mx-0 w-fit">
            <img 
              src="https://img.icons8.com/?size=80&id=4FIAGySoSla4&format=png&color=BEBEBE" 
              alt="time" 
            />
          </span>
          <p className="flex-start text-lg px-10 sm:px-0  sm:text-base md:text-lg text-white/80 font-light flex w-full float-left sm:text-left text-center">
            Quick onboarding faster than new hires
          </p>
        </div>
        <div className="text-left sm:text-left text-center flex-1 min-w-[200px] sm:min-w-[180px] md:min-w-[200px]">
          <span className="text-2xl block mb-2 sm:mb-2 md:mb-2 mx-auto sm:mx-0 w-fit">
            <img 
              src="https://img.icons8.com/?size=80&id=vPkulGr9ykhD&format=png&color=BEBEBE" 
              alt="fast" 
            />
          </span>
          <p className="flex-start text-lg px-10 sm:px-0  sm:text-base md:text-lg text-white/80 font-light flex w-full float-left sm:text-left text-center mt-1">
            Updates weekly after agreeing on tasks
          </p>
        </div>
        <div className="text-left sm:text-left text-center flex-1 min-w-[200px] sm:min-w-[180px] md:min-w-[200px]">
          <span className="text-2xl block mb-6 sm:mb-4 md:mb-6 mx-auto sm:mx-0 w-fit">
            <img 
              src="https://img.icons8.com/?size=60&id=676&format=png&color=BEBEBE" 
              alt="smile" 
            />
          </span>
          <p className="flex-start text-lg  px-10 sm:px-0  sm:text-base md:text-lg text-white/80 font-light flex w-full float-left sm:text-left text-center">
            Revisions to your full satisfaction
          </p>
        </div>
        <div className="text-center flex-1 min-w-[200px] sm:min-w-[180px] md:min-w-[200px]">
          <span className="text-2xl block mb-2 sm:mb-2 md:mb-2 mx-auto sm:mx-0 w-fit">
            <img 
              src="https://img.icons8.com/?size=60&id=3685&format=png&color=BEBEBE" 
              alt="globe"
              
            />
          </span>
          <p className="flex-start px-10 sm:px-0 text-lg sm:text-base md:text-lg text-white/80 font-light flex w-full float-left sm:text-left text-center mt-3">
            AI solutions that drive measurable impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;