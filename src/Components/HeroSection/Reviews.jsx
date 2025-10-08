import React from 'react';

const Reviews = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-15">
      <h1 className='text-3xl font-bold'>Trusted by Millions, Built for You</h1>
      <div className='mt-5 flex flex-col justify-center md:flex-row gap-4 md:gap-20'>
        <div className='text-center'>
          <h5 className='mb-2 text-[12px]'>Total Downloads</h5>
          <span className='mb-2 text-4xl font-extrabold'>29.6M</span>
          <br />
          <span className='text-[12px]'>21% more than last month</span>
        </div>
        <div className='text-center'>
          <h5 className='mb-2 text-[12px]'>Total Reviews</h5>
          <span className='mb-2 text-4xl font-extrabold'>906k</span>
          <br />
          <span className='text-[12px]'>46% more than last month</span>
        </div>
        <div className='text-center'>
          <h5 className='mb-2 text-[12px]'>Active Apps</h5>
          <span className='mb-2 text-4xl  font-extrabold'>132+</span>
          <br />
          <span className='text-[12px]'>21% more than last month</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;