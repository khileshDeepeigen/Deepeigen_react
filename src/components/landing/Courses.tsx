import { Link } from 'react-router-dom';
import CourseCardList from '../courses/CourseCardList';
import './courses.css';

export default function Courses() {

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
    <div className="ai-courses-hero">
      <div className="ai-courses-container">
        <div className="ai-courses-header">
          <div className="header-content">
            <h1 className="course-hero-title">AI Courses</h1>
            <p className="course-hero-description">Explore all AI & ML courses from Basic to Advance</p>
          </div>
          <Link to="/courses">
            <button className="explore-button">
              Explore All Courses →
            </button>
          </Link>
        </div>

        <div className="courses-wrapper">
          <CourseCardList courses={allCourses} useSwiper />
        </div>
      </div>
    </div>
  );
}
