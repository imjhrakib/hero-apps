import React, { useContext } from 'react';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import { AppContext } from '../../App';
import { Link } from 'react-router';
const AllAppsList = () => {
  const apps = useContext(AppContext)

  return (
    <div>
      <div className='text-center my-8'>
        <h1 className='text-4xl font-extrabold mb-2'>Our All Applications</h1>
        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between px-8'>
        <h4>({apps.length}) Apps Found</h4>
        <input type="search" name="search" id="" placeholder='search apps' className='border border-gray-400 p-1 pl-3' />
      </div>
      <div className='mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
        {
          apps.map((app, index) => (
            <Link to={`/appDetails/${app.id}`} key={index}>
              <div className="card bg-base-100 shadow-sm p-3">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title} />
                </figure>
                <div className='mt-3'>
                  <h2 className='text-left mb-2'>
                    {app.title}
                  </h2>
                  <div className="flex justify-between">
                    <div className="badge badge-outline py-4 text-[#00D390] bg-[#F1F5E8] border-none text-xl">
                      <img src={download} width={20} alt="" />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="badge badge-outline text-xl py-4 text-[#FF8811] bg-[#FFF0E1] border-none">
                      <img src={star} width={20} alt="" />
                      <span>{
                        app.ratingAvg
                      }</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default AllAppsList;