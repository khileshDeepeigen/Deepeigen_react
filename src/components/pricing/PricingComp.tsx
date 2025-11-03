import CourseCardList from "../courses/CourseCardList";
import PricingCard from "./PricingCard"
import "./pricingComp.css"

const PricingComp = () => {

      const allCourses = [
    {
      id: 1,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 2,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 3,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 4,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 5,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: 6,
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      duration: "6 Months",
      category: "1A",
      assignments: "28",
      price: "999",
      originalPrice: "5,999",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    }
  ];

    return (
        <div className="Pricing__Page">
            <div className="Pricing__UserHeader">
                <h1>
                    Welcome, John
                </h1>
                <p>Start your learning with DeepEigen</p>
            </div>
            <div className="Pricing__Container">
                <div className="P__Subscription">
                    <PricingCard />
                </div>
                <div className="P__Courses">
                    <div className="P__Course_Header">
                        <h1>All Courses</h1>
                        <p>Explore all AI & ML courses from Basic to Advance</p>
                    </div>
                    <CourseCardList courses={allCourses} />
                </div>
            </div>
        </div>
    )
}

export default PricingComp