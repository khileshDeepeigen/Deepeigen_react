import CourseCardList from "./CourseCardList";
import "./coursesComp.css"

const CoursesComp = () => {

  const allCourses = [
    {
      id: 1,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 2,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 3,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 4,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 5,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 6,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: 28,
      price: 999,
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    }
  ];

  return (

    <section className="CourseComp">
      <div className="CourseComp-container">

        <div className="CourseComp-header">
          <h1 className="CourseComp-heading">Courses</h1>
          <p className="CourseComp-subheading">
            Explore all AI & ML courses from Basic to Advance
          </p>
        </div>

        <CourseCardList courses={allCourses} />
      </div>
    </section>
  )
}

export default CoursesComp