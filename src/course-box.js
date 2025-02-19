import "./course-box.css"

export default function CourseBox(props) {

    function handleClick() {
        console.log("Clicked")
    }

    const title = props.title
    var lecturers = props.lecturers

    var lecturerCount = lecturers.split(",").length

    if (lecturerCount > 3){
        lecturers = "Multiple lecturers"
    }

    return (
        <div onClick={handleClick} className="Box-Main">
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