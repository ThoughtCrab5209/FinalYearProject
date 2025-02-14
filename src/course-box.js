import "./course-box.css"

export default function CourseBox(props) {

    const title = props.title
    const lecturers = props.lecturers

    return (
        <div className="Box-Main">
            <div className="Box-Sub-Top">
                {/* Course Title */}
                <div className="Course-Title">
                    {title}
                </div>
            </div>

            <div className="Box-Sub-Bottom">
                {/* Lecturers */}
                <div className="Course-Lecturers">
                    {lecturers}
                </div>
            </div>
        </div>

    );
}