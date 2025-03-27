import "../../stylesheets/Courses.css"

import * as React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import VideocamIcon from '@mui/icons-material/Videocam';
import Grid from '@mui/material/Grid2';

// Collapsible card code obtained from: https://mui.com/material-ui/react-card/
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({expand}) => !expand,
            style: {transform: 'rotate(0deg)'},
        },
        {
            props: ({expand}) => expand,
            style: {transform: 'rotate(180deg)'},
        },
    ],
}));


const CM3202 = () => {

    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("theme");
    });

    const [folderOneExpanded, setFolderOneExpanded] = React.useState(false); // Module Staff
    const [folderTwoExpanded, setFolderTwoExpanded] = React.useState(false); // Assessments and Feedback
    const [folderThreeExpanded, setFolderThreeExpanded] = React.useState(false); // Week 1
    const [folderFourExpanded, setFolderFourExpanded] = React.useState(false); // Week 2
    const [folderFiveExpanded, setFolderFiveExpanded] = React.useState(false); // Week 3

    const handleFolderOneExpandClick = () => { setFolderOneExpanded(!folderOneExpanded); } // Module Staff
    const handleFolderTwoExpandClick = () => { setFolderTwoExpanded(!folderTwoExpanded); } // Assessments and Feedback
    const handleFolderThreeExpandClick = () => { setFolderThreeExpanded(!folderThreeExpanded); } // Week 1
    const handleFolderFourExpandClick = () => { setFolderFourExpanded(!folderFourExpanded); } // Week 2
    const handleFolderFiveExpandClick = () => { setFolderFiveExpanded(!folderFiveExpanded); } // Week 3


    return (
        <>
            <header className={"Course-Page-Title " + (darkTheme === "Dark" ? "Light" : "Dark")}>
                CM3202 - Emerging Technologies
            </header>

            {/* Module Staff */}
            <Card style={{margin: "0 5%"}}>
                <CardHeader
                    action={
                        <ExpandMore expand={folderOneExpanded} onClick={handleFolderOneExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title="Module Staff"
                />
                <Collapse in={folderOneExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <ul style={{margin: 0}}>
                            <li> Carolina Fuentes Toro </li>
                            <li> Nedjma Ousidhoum </li>
                        </ul>
                    </CardContent>
                </Collapse>
            </Card>

            <br/>

            {/* Assessments and Feedback */}
            <Card style={{margin: "0 5%"}}>
                <CardHeader
                    action={
                        <ExpandMore expand={folderTwoExpanded} onClick={handleFolderTwoExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title="Assesments and Feedback"
                />
                <Collapse in={folderTwoExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        Content
                    </CardContent>
                </Collapse>
            </Card>

            <br/>

            {/* Week 1 */}
            <Card style={{margin: "0 5%"}}>
                <CardHeader
                    action={
                        <ExpandMore expand={folderThreeExpanded} onClick={handleFolderThreeExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title="Week 1 - Introduction"
                />
                <Collapse in={folderThreeExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                Spring Week 1 - Overview of emerging technologies
                            </Grid>
                        </Grid>

                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <VideocamIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                Recording Week 1 - Introduction
                            </Grid>
                        </Grid>

                    </CardContent>
                </Collapse>
            </Card>

            <br/>

            {/* Week 2 */}
            <Card style={{margin: "0 5%"}}>
                <CardHeader
                    action={
                        <ExpandMore expand={folderFourExpanded} onClick={handleFolderFourExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title="Week 2 - IoT / Industry 4.0"
                />
                <Collapse in={folderFourExpanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <b> Recording W2-IoT </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <VideocamIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                CM3202 - Online Teaching- W2.mp4
                            </Grid>
                        </Grid>

                        <br/>

                        <b> Reading Material </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                IoT-medical-things.pdf
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                IoT-Agriculture.pdf
                            </Grid>
                        </Grid>

                        <br/>

                        <b> W2-IoT-Tutorial </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <FolderZipIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                IoTDK_CANVASES.zip
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <FolderZipIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                IoTDK_CARDS.zip
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                Older-Adults-Challenges.pdf
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                Older-Adults-Challenges2.pdf
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                CM3202-tutorial-IoT(W2-25).pdf
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                IoTDK_0_INTRO.pdf
                            </Grid>
                        </Grid>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                Lab Tutorial.docx
                            </Grid>
                        </Grid>

                        <br/>

                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                CM3202-Lecture2-IoT(W2-25)_session1.pdf
                            </Grid>
                        </Grid>

                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                CM3202-Lecture2-IoT-Industry_4_0(W2-25)_session2.pdf
                            </Grid>
                        </Grid>

                        

                    </CardContent>
                </Collapse>
            </Card>

            <br/>

            {/* Week 3 */}
            <Card style={{margin: "0 5%"}}>
                <CardHeader
                    action={
                        <ExpandMore expand={folderFiveExpanded} onClick={handleFolderFiveExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title="Week 3 - Robot Interaction and Autonomous Systems"
                />
                <Collapse in={folderFiveExpanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <b> Activity W3 </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                               Activity-W3.pdf
                            </Grid>
                        </Grid>

                        <br/>

                        <b> Recording - W3 - HRI&AS </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                Week 3: Autonomous systems and HRI
                            </Grid>
                        </Grid>

                        <br/>

                        <b> Reading Material - W3 </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 11 }}>
                                No content
                            </Grid>
                        </Grid>

                        <br/>

                        <Grid container spacing={0.5}>
                            <Grid item size={{ xs: 0.5 }}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{ xs: 11 }}>
                                CM3202-Lecture W3-HRI_AS.pdf
                            </Grid>
                        </Grid>

                        <br/>

                        <b> Tutorial - W3 - Co-Design Canvas </b>
                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                co-design_canvases_example_library_robot.pdf
                            </Grid>
                        </Grid>

                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                social_robot_co-design_canvases_A1.pdf
                            </Grid>
                        </Grid>

                        <Grid container spacing={0.5}>
                            <Grid item size={{xs: 0.5}}>
                                <ArticleIcon />
                            </Grid>
                            <Grid item size={{xs: 11}}>
                                CM3202- co-design-canvas_week3.pdf
                            </Grid>
                        </Grid>

                    </CardContent>
                </Collapse>
            </Card>

        </>
    )
}

export default CM3202