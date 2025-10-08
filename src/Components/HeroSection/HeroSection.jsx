import React from 'react';
import playStore from '../../assets/playStor.png'
import apple from '../../assets/apple.png'
import heroImg from '../../assets/hero.png'
import Reviews from './Reviews';
import TrendingApps from '../TrendingApps/TrendingApps';
const HeroSection = () => {
  return (
    <div className='mt-20 text-center'>
      <h1 className='text-4xl md:text-6xl font-extrabold'>We Build <br />
        <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
      <p className='text-[#627382] mx-auto w-11/12 md:w-4/6 my-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='mb-5'>
        <a href="https://play.google.com/store/games?hl=en">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-10 p-5 text-[18px]">
            <img src={playStore} alt="" className='mr-2 h-4 md:h-8' />
            Google Play</button></a>
        <a href="https://www.apple.com/app-store/"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-5 text-[18px]">
          <img src={apple} alt="" className='h-4 md:h-8 mr-2' />
          App Store</button></a>
      </div>
      <img src={heroImg} alt="" className='mx-auto px-20' />      
    </div>
  );
};

export default HeroSection;