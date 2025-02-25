import "../stylesheets/Profile.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Profile = () => {
    return (
        <>
            <header className="Profile-Page-Title">
                Profile
            </header>

            <div className="Profile-Page-Content">
               <Card style={{width: "60vw", paddingBottom: "10px"}}>
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