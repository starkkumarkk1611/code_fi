import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Arena from "../pages/Arena";
import Registration from "../pages/registration";
import Profile from "../pages/profile";

const Navigation = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="arena" element={<Arena />} />
        <Route path="register" element={<Registration />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
