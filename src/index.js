import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import CM3203 from './pages/course_pages/CM3203.js';
import CM3202 from './pages/course_pages/CM3202.js';
import Profile from "./pages/Profile.js";
import NoPage from "./pages/NoPage.js"

export default function App() {
  const [windowSize, setWindowSize] = useState(1000);
  
  useEffect(() => {
    function resizeWindow() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', resizeWindow)
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="courses/CM3202" element={<CM3202/>} />
          <Route path="courses/CM3203" element={<CM3203/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
