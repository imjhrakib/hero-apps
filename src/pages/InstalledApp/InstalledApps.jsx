import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App';
import { Link } from 'react-router';

const InstalledApps = () => {
  const apps = useContext(AppContext);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("installedApps");
    setInstalledApps(saved ? JSON.parse(saved) : []);
  }, []);

  const filteredApps = apps.filter(app => installedApps.includes(app.id));

  if (filteredApps.length === 0) return <p className="text-center mt-10">No apps installed yet!</p>;

  return (
    <div className="mx-5 my-10">
      <h1 className="text-3xl text-center font-bold mb-2">Your Installed Apps</h1>
      <h4 className='text-[#627382] text-center mb-4'>Explore All Trending Apps on the Market developed by us</h4>
      <div className='flex justify-between mx-3'>
        <h5>({filteredApps.length}) Apps Found</h5>
        <select name="Sort by Size" id="myDropdown" className='p-1 border border-gray-400 text-gray-600'>
          <option value="option1">Sort by Size</option>
          <option value="option1">Low-High</option>
          <option value="option2">High-Low</option>
        </select>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {filteredApps.map((app, index) => (
          <Link to={`/appDetails/${app.id}`} key={index}>
            <div className="card bg-base-100 shadow-sm p-3">
              <img src={app.image} alt={app.title} className="w-full h-32 object-cover" />
              <h2 className='text-left mt-2 font-semibold'>{app.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
