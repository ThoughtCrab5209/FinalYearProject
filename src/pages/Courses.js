import "../stylesheets/Courses.css"
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import Grid from "@mui/material/Grid2";

const Courses = () => {

    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    return (
        <>
            <header className={"Course-Page-Title " + darkTheme}>
                Courses
            </header>

            <>
                <div className="Course-Page-Content">
                    <div className={"Course-Year-Title " + darkTheme}>
                        Academic Year 24-25
                        <hr />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3202">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3202 Emerging Technologies
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Multiple Lecturers
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3203">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3203 One Semester Individual Project - 40
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Frank Langbein
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3104">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3104 Large-Scale Databases
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Multiple Lecturers
                                        {/* Alia Abdelmoty, Christopher Jones */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                    <br/>
                    
                    <Grid container spacing={2}>
                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3109">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3109 Combinatorial Optimisation
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Richard Booth
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3110">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3110 Security
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        George Theodorakopoulos
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea href="/courses/CM3117">
                                    <CardContent className="Course-Module-Title Light">
                                        CM3117 Political Economies of Computing
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Sandy Gould
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

                <br/><br/>

                <div className="Course-Page-Content">
                    <div className={"Course-Year-Title " + darkTheme}>
                        Academic Year 23-24
                        <hr />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item size={{xs: 3.75, lg: 2.75}}>
                            <Card style={{boxShadow: "2px 2px 5px #A80000"}}>
                                <CardActionArea>
                                    <CardContent className="Course-Module-Title Light">
                                        CM2500 Placement
                                    </CardContent>
                                    <CardContent className={"Course-Module-Names " + darkTheme}>
                                        Multiple Lecturers
                                        {/* Martin Caminada, Joanna Emery, Leigh Hodge, James Osborne */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                    
                </div>
            </>

        </>
    )
}

export default Courses;