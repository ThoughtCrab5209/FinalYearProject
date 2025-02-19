import './styles.css';
import CourseBox from './course-box';
import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


function App() {
  const [windowSize, setWindowSize] = useState(1000);

  useEffect(() => {
    function resizeWindow() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', resizeWindow)
  })
  
  return (
    <div className="App">

      <br/>

      <header className="App-Header">
        Courses
      </header>

      <br/>

      <div className="App-Content">
        <div className='Year-Title'>
          Academic Year 24-25
          <hr/>
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox
            title={"CM3202 Emerging Technologies"} 
            lecturers={"Carolina Fuentes Toro, Nedjma Ousidhoum"}
          />
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox 
            title={"CM3203 One Semester Individual Project - 40"}
            lecturers={"Frank Langbein"}
          />
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox
            title={"CM3104 Large-Scale Databases"}
            lecturers={"Alia Abdelmoty, Christopher Jones"}
          />        
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox 
            title={"CM3109 Combinatorial Optimisation"}
            lecturers={"Richard Booth"}
          />
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox
            title={"CM3110 Security"}
            lecturers={"George Theodorakopoulos"}
          />
        </div>

        <div style={{float: "left", width: "22%"}}>
          <CourseBox
            title={"CM3117 Political Economies of Computing"}
            lecturers={"Sandy Gould"}
          />
        </div>


      </div>
        
    </div>
  );
  
}

export default App;
