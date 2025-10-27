import CourseCard from "./CourseCard"
import "./coursesComp.css"

const CoursesComp = () => {
  return (

    <section className="CourseComp">
      <div className="CourseComp-container">

        <div className="CourseComp-header">
          <h1 className="CourseComp-heading">Courses</h1>
          <p className="CourseComp-subheading">
            Explore all AI & ML courses from Basic to Advance
          </p>
        </div>

        <CourseCard />
      </div>
    </section>
  )
}

export default CoursesComp