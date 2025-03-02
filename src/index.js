import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import Profile from "./pages/Profile.js";
import NoPage from "./pages/NoPage.js"

export default function App() {
  const [windowSize, setWindowSize] = useState(1000);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  useEffect(() => {
    function resizeWindow() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', resizeWindow)
  })

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
