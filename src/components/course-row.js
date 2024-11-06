import CourseBox from '../components/course-box';

export default function CourseRow() {

    return (
        <>
            <span style={{float: "left"}}>
                <CourseBox content={"CM3104 Large-Scale Databases"} />
            </span>
            
            <span style={{float: "right"}}>
                <CourseBox content={"CM3104 Large-Scale Databases"} />
            </span>
        </>
    )
}