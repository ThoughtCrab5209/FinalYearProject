import "../stylesheets/Courses.css"
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Courses = () => {
    return (
        <>
            <header className="Course-Page-Title Dark">
                Courses
            </header>

            <>
                <div className="Course-Page-Content">
                    <div className="Course-Year-Title Dark">
                        Academic Year 24-25
                        <hr />
                    </div>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3202">
                            <CardContent className="Course-Module-Title Light">
                                CM3202 Emerging Technologies
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Multiple Lecturers
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3203">
                            <CardContent className="Course-Module-Title Light">
                                CM3203 One Semester Individual Project - 40
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Frank Langbein
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3104">
                            <CardContent className="Course-Module-Title Light">
                                CM3104 Large-Scale Databases
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Multiple Lecturers
                                {/* Alia Abdelmoty, Christopher Jones */}
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3109">
                            <CardContent className="Course-Module-Title Light">
                                CM3109 Combinatorial Optimisation
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Richard Booth
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3110">
                            <CardContent className="Course-Module-Title Light">
                                CM3110 Security
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                George Theodorakopoulos
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea href="/courses/CM3117">
                            <CardContent className="Course-Module-Title Light">
                                CM3117 Political Economies of Computing
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Sandy Gould
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <div className="Course-Page-Content">
                    <div className="Course-Year-Title Dark">
                        Academic Year 23-24
                        <hr />
                    </div>

                    <Card className="Course-Module-Card" style={{boxShadow: "2px 2px 5px #A80000"}}>
                        <CardActionArea>
                            <CardContent className="Course-Module-Title Light">
                                CM2500 Placement
                            </CardContent>
                            <CardContent className="Course-Module-Names Dark">
                                Multiple Lecturers
                                {/* Martin Caminada, Joanna Emery, Leigh Hodge, James Osborne */}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </>

        </>
    )
}

export default Courses;