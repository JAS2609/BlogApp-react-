import { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react'
import './App.css'
import authService from "./appwrite/Auth"
import {login, logout} from "./store/authSlice"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])



  
  return !loading ? (
  <ThemeProvider>
     <div className="dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen flex flex-col">
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </ThemeProvider> 
  ) : null
}

export default App