import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Reviews from '../../Components/HeroSection/Reviews';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Reviews></Reviews>
      <TrendingApps></TrendingApps>
      <div className='my-5 text-center'>
        <a href='' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">          
          <h3>Show all</h3>
        </a></div>
    </div>
  );
};

export default HomePage;