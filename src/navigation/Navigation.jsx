import React from 'react';
import { BrowserRouter, RouterProvider, Route, Routes, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';


const Navigation = () => {
     return (
          <BrowserRouter>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Home />} />
               </Routes>
          </BrowserRouter>
     )
}

export default Navigation;