import { createBrowserRouter } from "react-router";
import App from "../App";
import AllAppsList from "../pages/AllAppsList/AllAppsList";
import HomePage from "../pages/HomePage/HomePage";
import InstalledApps from "../pages/InstalledApp/InstalledApps";
import AppError from "../Components/Error/AppError";
import AppDetails from "../pages/AllAppsList/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: 'AllAppList', Component: AllAppsList },
      { path: 'InstalledApps', Component: InstalledApps },
      { path: 'appDetails/:id', Component: AppDetails },
      { path: '*', Component: AppError }
    ],
  }
])