import React from 'react';
import {teamMembers} from '../utils/content'
const TeamSection = () => {


  return (
    <section className='py-20'>
      <div className='max-w-5xl mx-auto px-[4%] sm:px-[2%]'>
        {/* Header Section */}
        <div className='mb-12'>
          <h2 className='text-3xl font-semibold tracking-tight'>Team</h2>
          <p className='text-md sm:text-xl mt-4 max-w-md leading-7 font-light text-white/80'>
          AI innovators dedicated to automation, optimization, and enterprise success at Genfox AI.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='group relative w-full max-w-[320px] mx-auto'
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-full h-80 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105'
              />
              <div className='mt-4 text-center'>
                <h2 className='text-lg font-semibold text-white mb-2'>
                  {member.name}
                </h2>
                <p className='text-sm text-white/80'>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;