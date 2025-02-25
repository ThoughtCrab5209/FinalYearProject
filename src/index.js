import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Courses from "./pages/Courses.js";


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
          <Route path="courses" element={<Courses/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
