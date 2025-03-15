import "../stylesheets/Home.css"
import { useState } from "react";

const Home = () => {

    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    return (
        <>
            <header className={"Home-Page-Title " + darkTheme}>
                Home
            </header>

            <div className={"Home-Page-Content " + darkTheme}>
               Hello World! If you're seeing this, you've reached the base page of 
               RedBook. This is the final year project of Avery Calvin, who is 
               designing a new Learning Management System interface for Cardiff 
               University.
            </div>
        </>
    )
}

export default Home;