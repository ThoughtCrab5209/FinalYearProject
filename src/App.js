import './App.css';
import React, { useEffect, useState } from 'react';
import CourseBox from './components/course-box';
import { Button } from 'antd'

function App() {
  const [windowSize, setWindowSize] = useState(1000);


  useEffect(() => {
    function resizeWindow() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', resizeWindow)
  })
  

  if (windowSize > 1000){
    return (
      <div className="App">
        <header className="App-Header">
          Learning Central - the better version
        </header>
  
        <br/>
  
          <>
            <div style={{float: "left", width: "25%"}}>
              <CourseBox/>
            </div>
            
            <div style={{float: "left", width: "25%"}}>
              <CourseBox/>
            </div>

            <div style={{float: "left", width: "25%"}}>
              <CourseBox/>
            </div>

            <div style={{float: "left", width: "25%"}}>
              <CourseBox/>
            </div>
          </>
        
          
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-Header">
          <div>
            <Button type="primary"> Menu </Button>
            Learning Central - the better version
          </div>
          
        </header>
  
      <br/>
  
          <>
            <div style={{float: "left", width: "50%"}}>
              <CourseBox/>
            </div>
            
            <div style={{float: "right", width: "50%"}}>
              <CourseBox/>
            </div>

            <div style={{float: "left", width: "50%"}}>
              <CourseBox/>
            </div>
            
            <div style={{float: "right", width: "50%"}}>
              <CourseBox/>
            </div>
          </>
        
          
      </div>
    );
  }


  
}

export default App;
