import "../stylesheets/Layout.css"
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div style={{display: "flex", minHeight: "100vh", maxHeight: "100%"}}>
                <nav style={{backgroundColor: "#A80000", padding: "20px"}}>
                    <Link to="/home" className="Side-Menu-Button"> Home </Link> <br/>
                    <Link to="/courses" className="Side-Menu-Button"> Courses </Link> <br/>
                    <Link to="/profile" className="Side-Menu-Button"> Profile </Link> <br/>
                </nav>

                <div style={{flex: 1, padding: "20px"}}>
                    <Outlet/>
                </div>
            </div>
            
        </>
    )
}

export default Layout;