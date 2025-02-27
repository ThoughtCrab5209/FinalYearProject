import "../stylesheets/Layout.css"
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div style={{display: "flex", minHeight: "100vh", maxHeight: "100%"}}>
                <nav style={{backgroundColor: "#A80000", padding: "20px"}}>
                    <Link to="/home" className="Layout-Side-Menu"> Home </Link> <br/>
                    <Link to="/courses" className="Layout-Side-Menu"> Courses </Link> <br/>
                    <Link to="/profile" className="Layout-Side-Menu"> Profile </Link> <br/>
                </nav>

                <div style={{flex: 1, padding: "20px"}}>
                    <Outlet/>
                </div>
            </div>
            
        </>
    )
}

export default Layout;