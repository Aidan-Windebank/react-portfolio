

import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'



export default function App() {

  return (
    <>
      <div>
        <header>


        </header>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AboutMe/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/contact-me' element={<ContactMe/>} />
          </Routes>
        </BrowserRouter>
        
        <footer>


        </footer>
      </div>
    </>
  )
}

