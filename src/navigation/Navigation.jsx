import React from 'react';
import { BrowserRouter, RouterProvider, Route, Routes, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';
import Arena from '../pages/Arena';

const Navigation = () => {
     return (
          <BrowserRouter>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="arena" element={<Arena />} />
               </Routes>
          </BrowserRouter>
     )
}

export default Navigation;