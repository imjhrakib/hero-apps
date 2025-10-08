import React from 'react';
import TrendingAppsCardSection from './TrendingAppsCardSection';

const TrendingApps = () => {
  return (
    <div className='my-10'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-5'>Trending Apps</h1>
        <p className='text-[#627382] mb-5'>Explore All Trending Apps on the Market developed by us</p></div>
        <TrendingAppsCardSection></TrendingAppsCardSection>
    </div>
  );
};

export default TrendingApps;