import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App';
import { Link } from 'react-router';
import iconDownload from '../../assets/icon-downloads.png'
import iconRatings from '../../assets/icon-ratings.png'
import { toast } from 'react-toastify';

const InstalledApps = () => {
  const apps = useContext(AppContext);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  useEffect(() => {
    const saved = localStorage.getItem("installedApps");
    setInstalledApps(saved ? JSON.parse(saved) : []);
  }, []);

  const handleUninstallBtn = (id, companyName) => {
    const updatedApps = installedApps.filter(appId => appId !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error(`${companyName} uninstalled successfully!`);
  };

  let filteredApps = apps.filter(app => installedApps.includes(app.id));


  if (sortOrder === 'low-high') {
    filteredApps = [...filteredApps].sort((a, b) => a.size - b.size);
  } else if (sortOrder === 'high-low') {
    filteredApps = [...filteredApps].sort((a, b) => b.size - a.size);
  }


  if (filteredApps.length === 0) return <p className="text-center mt-10">No apps installed yet!</p>;

  return (
    <div className="px-5 py-10 bg-[#F5F5F5]">
      <h1 className="text-3xl text-center font-bold mb-2">Your Installed Apps</h1>
      <h4 className='text-[#627382] text-center mb-4'>Explore All Trending Apps on the Market developed by us</h4>
      <div className='flex justify-between mx-3'>
        <h5>({filteredApps.length}) Apps Found</h5>
        <select
          name="Sort by Size"
          id="myDropdown"
          className='p-1 border border-gray-400 text-gray-600'
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="option1">Sort by Size</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>
      <div className='mt-4'>
        {filteredApps.map((app) => (

          <div className="flex justify-between bg-base-100 shadow-sm p-3 mb-6 rounded-xl items-center pr-3">
            <div className='flex gap-5'>
              <div className=''><img src={app.image} alt={app.title} className="w-full h-32 object-cover" /></div>
              <div className='flex flex-col'>
                <div className='text-2xl mb-1.5 font-medium'>{app.title}</div>
                <div className='flex gap-5 items-end'>
                  <div className='text-[#00D390] flex flex-col gap-1.5 items-center'><div><img width={20} src={iconDownload} alt="" /></div><span>{app.size} M</span></div>
                  <div className='text-[#FF8811] flex flex-col gap-1.5 items-center'><div><img width={20} src={iconRatings} alt="" /></div><span>{app.reviews}</span></div>
                  <div className='text-[#627382]'>{app.downloads}</div>
                </div>
              </div>
            </div>
            <button onClick={() => handleUninstallBtn(app.id, app.companyName)} className="btn bg-[#00D390] text-white">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
