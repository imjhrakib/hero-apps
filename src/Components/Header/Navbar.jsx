import React from 'react';
import logo from '../../assets/logo.png'
import { GitBranchPlus, Github } from 'lucide-react';
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a href="">Home</a>
              </li>
            <li>
              <a>Apps</a>
            </li>
            <li><a>Installation</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Apps</a></li>
          <li><a>Installation</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='https://github.com/imjhrakib' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <Github></Github>
          <h3>Contribute</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;