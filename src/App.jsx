import axios from 'axios'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import HomePage from './pages/HomePage/HomePage'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext([])

function App() {
  const [apps,setApps] = useState([])
  useEffect(()=>{
    axios.get('appsList.json').then(res=>setApps(res.data))
  },[])
   
  return (
    <>            
      <Navbar></Navbar>
      <AppContext value={apps}>
        <HomePage></HomePage>
      </AppContext>
      <Footer></Footer>
    </>
  )
}

export default App
