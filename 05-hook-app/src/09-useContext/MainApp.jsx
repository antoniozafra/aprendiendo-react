import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage'
import {LoginPage} from './LoginPage'
import {AboutPage} from './AboutPage'
import {Navbar} from './Navbar'
import { UserProvider } from '../context/Userprovider'


const MainApp = () => {
  return (
    <UserProvider>
      
      <h1>Main APP</h1>
        <Navbar/>
      <hr />


    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='about' element={<AboutPage/>}/>

        <Route path='/*' element={<Navigate to="/about" />}></Route>
    </Routes>

    </UserProvider>
  )
}

export default MainApp
