import "../stylesheets/Layout.css"
import {Outlet, Link} from "react-router-dom";
import React, { useState } from 'react';


const Layout = () => {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme");
    });

    function switchTheme() {
        if (darkMode === "Dark") {
            localStorage.setItem("theme", "Light");
        } else {
            localStorage.setItem("theme", "Dark");
        }

        window.location.reload(false)
    }

    return (
        <>
            <div style={{display: "flex", minHeight: "100vh", maxHeight: "100%"}}>
                <nav style={{backgroundColor: "#A80000", padding: "20px", boxShadow: "2px 0px 8px #D4D4D4"}}>
                    <Link to="/courses" className="Side-Menu-Button"> Courses </Link> <br/>
                    <Link to="/profile" className="Side-Menu-Button"> Profile </Link> <br/>

                    <Link onClick={switchTheme} className="Side-Menu-Button"> {darkMode === "Dark" ? "L" : "D"}. Theme </Link> <br/>
                </nav>

                <div style={{flex: 1, padding: "20px"}}>
                    <Outlet/>
                </div>
            </div>
            
        </>
    )
}

export default Layout;