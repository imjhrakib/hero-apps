import React from 'react';
import logo from '../../assets/logo.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <div className='px-10 bg-[#001931] p-5'>
      <div className='flex justify-between'>        
        <div>
          <a className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </a>
        </div>
        <div>
          <p className='text-xl text-white'>Social Links</p>
          <div className='flex justify-center text-white'>
            <Twitter></Twitter>
            <Facebook></Facebook>
            <Linkedin></Linkedin>
          </div>
        </div>
      </div>
      <hr className='border-gray-600 mx-40 mt-4'/>
      <div className='text-[#FAFAFA] text-center mt-5'>
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;