import {createBrowserRouter} from "react-router";
import App from "../App";
import AllAppsList from "../pages/AllAppsList/AllAppsList";
import HomePage from "../pages/HomePage/HomePage";
import InstalledApps from "../pages/InstalledApp/InstalledApps";

export const router = createBrowserRouter([
  {
    path:"/",
    Component:App,
    children:[
      {index:true,Component:HomePage},
      {path:'AllAppList',Component:AllAppsList},
      {path:'InstalledApps', Component:InstalledApps}
    ]
  }
])