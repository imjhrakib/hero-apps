import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import iconDownloads from "../../assets/icon-downloads.png";
import iconStars from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router";
import AppError from "../../Components/Error/AppError";

const AppDetails = () => {

  const apps = useContext(AppContext);
  const { id } = useParams()
  const app = apps.find(a => a.id === parseInt(id));
  if (!app) return <AppError></AppError>
  
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  const isInstalled = installedApps.includes(app.id);

  const handleInstallBtn = () => {
    if (isInstalled) {
      toast.info(`${app.companyName} is already installed!`);
    } else {
      toast.success(`Yahoo! ${app.companyName} installed successfully!`);
      const newInstalledApps = [...installedApps, app.id];
      setInstalledApps(newInstalledApps);
    }
  };
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  return (
    <div className="m-10">
      <div className="flex flex-col gap-3 md:gap-15 md:flex-row">
        <div className="w-4/12">
          <img src={app.image} alt="App Logo" />
        </div>

        <div className="w-8/12">
          <h2 className="text-4xl font-bold mb-3">{app.companyName}</h2>
          <p className="mb-3 text-[#627382] text-xl">
            {app.description}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {app.companyName}
            </span>
          </p>

          <hr className="border-gray-400 mr-10 mb-3 w-full" />

          <div className="flex gap-8 my-5 text-center">
            <div>
              <img src={iconDownloads} alt="" className="mb-2 mx-auto" />
              <p className="mb-2 text-[#627382]">Downloads</p>
              <p className="text-3xl font-bold">{app.downloads}</p>
            </div>
            <div>
              <img src={iconStars} alt="" className="mb-2 mx-auto" />
              <p className="mb-2 text-[#627382]">Average Ratings</p>
              <p className="text-3xl font-bold">{app.ratingAvg}</p>
            </div>
            <div>
              <img src={iconReview} alt="" className="mb-2 mx-auto" />
              <p className="mb-2 text-[#627382]">Total Reviews</p>
              <p className="text-3xl font-bold">{app.reviews}</p>
            </div>
          </div>

          <div className="mt-3">
            <button onClick={handleInstallBtn} className="btn bg-[#00D390] text-white">
              {isInstalled ? "Installed" : `Install (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 mr-10 my-5 w-full" />

      <h3 className="ml-10 mt-7 text-3xl font-bold text-[#001931]">Ratings</h3>
      <div className="flex justify-start mt-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            height={300}
            data={app.ratings}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h4 className="text-[#001931] font-bold text-2xl">Description</h4>
        <p className="text-[#627382] mt-2.5">{app.allDescription}</p>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default AppDetails;
