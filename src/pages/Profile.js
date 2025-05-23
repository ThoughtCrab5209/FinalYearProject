import "../stylesheets/Profile.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";

const Profile = () => {
    
    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    return (
        <>
            <header className={"Profile-Page-Title " + (darkTheme === "Dark" ? "Dark" : "Light")}>
                Profile
            </header> 

            <div>
               <Card style={{
                    paddingBottom: "10px",
                    margin: "0 20%",
                    boxShadow: "2px 2px 5px #A80000",
                    backgroundColor: (darkTheme === "Light" ? "#FFFFFF" : "#7D7D7D"), 
                    color: (darkTheme === "Light" ? "#000000" : "#FFFFFF")
                }}>
                    <CardContent>
                        <div style={{float: "left"}}> Full Name </div>
                        <div style={{float: "right"}}> Avery Calvin </div>
                    </CardContent>
                    <CardContent>
                        <div style={{float: "left"}}> Email Address</div>
                        <div style={{float: "right"}}> CalvinAQ@cardiff.ac.uk </div>
                    </CardContent>
                    <CardContent>
                        <div style={{float: "left"}}> Pronouns </div>
                        <div style={{float: "right"}}> She/They </div>
                    </CardContent>
                    <CardContent>
                        <div style={{float: "left"}}> Student ID </div>
                        <div style={{float: "right"}}> 21083376 </div>
                    </CardContent>
               </Card>
            </div>
        </>
    )
}

export default Profile;