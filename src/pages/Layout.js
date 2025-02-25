import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/home"> Home </Link>
                <br/>
                <Link to="/courses"> Courses </Link>
                <br/>
                <Link to="/profile"> Profile </Link>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;