import React from 'react';
import { useNavigate } from 'react-router';
import imgError from '../../assets/App-Error.png'
const AppError = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center flex-col mt-20 mb-10'>
      <img className='w-2/12' src={imgError} alt="" />
      <h2 className='text-3xl font-bold mb-4 mt-10'>OPPS!! APP NOT FOUND</h2>
      <p className='text-[#627382] mb-5'>The App you are requesting is not found on our system.  please try another apps</p>
      <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" onClick={() => navigate(-1)}>Go Back</a>
    </div>
  );
};

export default AppError;