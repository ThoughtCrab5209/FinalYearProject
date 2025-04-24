import "../stylesheets/NoPage.css"
import { useState } from "react";

const Home = () => {
    
    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    return (
        <>
            <header className={"No-Page-Title " + (darkTheme === "Light" ? "Light" : "Dark")}>
                No Page Found
            </header>

            <div className={"No-Page-Content " + (darkTheme === "Light" ? "Light" : "Dark")}>
               The path you are trying to access sadly leads nowhere, many apologies
            </div>
        </>
    )
}

export default Home;