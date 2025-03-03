import "../../stylesheets/Courses-Dark.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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



const CM3203 = () => {

    const [folderOneExpanded, setFolderOneExpanded] = React.useState(false); // Module Staff
    const [folderTwoExpanded, setFolderTwoExpanded] = React.useState(false); // Assessments and Feedback
    
    const handleFolderOneExpandClick = () => { setFolderOneExpanded(!folderOneExpanded); } // Module Staff
    const handleFolderTwoExpandClick = () => { setFolderTwoExpanded(!folderTwoExpanded); } // Assessments and Feedback


    return (
        <>
            <header className="Course-Page-Title">
                CM3203 - One Semester Individual Project - 40
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
                            <li> Frank Langbein </li>
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
        </>
    )
}

export default CM3203