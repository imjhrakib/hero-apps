import React, { useContext } from 'react';
import { AppContext } from '../../App';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'

const TrendingAppsCardSection = () => {
  const apps = useContext(AppContext)
  return (
    <div className='mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4'>
      {
        apps.slice(0,8).map((app,index) => (
          <div key={index} className="card bg-base-100 shadow-sm p-3">
            <figure>
              <img
                src={app.image}
                alt={app.title} />
            </figure>
            <div className='mt-3'>
              <h2 className='text-left mb-2'>
                {app.companyName}
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
        ))
      }
    </div>
  );
};

export default TrendingAppsCardSection;