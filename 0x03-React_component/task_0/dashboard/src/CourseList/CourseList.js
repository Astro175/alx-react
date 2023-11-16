import './CourseList.css';
import CourseListRow from './CourseListRow';
import courseShape from './CourseShape';

const CourseList = ({listCourses}) => {
    return (
        <table className="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name"
                textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (<CourseListRow textFirstCell='No courses available' isHeader={true}/>)
                :
                 listCourses.map(course => (
                    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}/>
                )
                )}
            </tbody>
        </table>
     );
}

CourseList.propType = {
    listCourses: [courseShape]
}

CourseList.defaultProps = {
    listCourses: []
}
 
export default CourseList;