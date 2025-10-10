import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import Root from './pages/Root/Root'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext([])
function App() {
  useEffect(() => {
    axios.get('appsList.json').then(res => setApps(res.data))
  }, [])

  const [apps, setApps] = useState([])

  return (
    <>
      <AppContext.Provider value={apps}>
      <Navbar></Navbar>
      
        <Root />
      
      <Footer></Footer>
      </AppContext.Provider>
    </>
  )
}

export default App
