import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Reviews from '../../Components/HeroSection/Reviews';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import AllAppsList from '../AllAppsList/AllAppsList';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Reviews></Reviews>
      <TrendingApps></TrendingApps>
      <div className='my-5 text-center'>        
        <Link to='AllAppList' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <button>Show all</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;