import CourseCard from '../courses/CourseCard';
import './courses.css';

export default function Courses() {
  return (
    <div className="ai-courses-hero">
      <div className="ai-courses-container">
        <div className="ai-courses-header">
          <div className="header-content">
            <h1 className="course-hero-title">AI Courses</h1>
            <p className="course-hero-description">Explore all AI & ML courses from Basic to Advance</p>
          </div>
          <button className="explore-button">
            Explore All Courses →
          </button>
        </div>

        <div className="courses-wrapper">
          <CourseCard />

          <button className="nav-arrow nav-arrow-left" aria-label="Previous courses">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.6507 6.40661C20.7505 6.49212 20.8324 6.59644 20.8918 6.71363C20.9513 6.83081 20.987 6.95856 20.997 7.08957C21.0071 7.22058 20.9912 7.35228 20.9503 7.47714C20.9094 7.60201 20.8443 7.71759 20.7587 7.81728L13.3174 16.4999L20.7587 25.1826C20.8492 25.2815 20.919 25.3975 20.9638 25.5239C21.0085 25.6503 21.0275 25.7843 21.0194 25.9182C21.0113 26.052 20.9764 26.1828 20.9168 26.3029C20.8572 26.4229 20.774 26.5298 20.6722 26.617C20.5705 26.7043 20.4522 26.7702 20.3244 26.8109C20.1967 26.8515 20.0621 26.8661 19.9286 26.8537C19.7951 26.8413 19.6655 26.8021 19.5474 26.7386C19.4294 26.6751 19.3253 26.5885 19.2414 26.4839L11.2414 17.1506C11.0861 16.9694 11.0007 16.7386 11.0007 16.4999C11.0007 16.2613 11.0861 16.0305 11.2414 15.8493L19.2414 6.51595C19.414 6.31486 19.6594 6.19053 19.9237 6.17028C20.1879 6.15003 20.4494 6.23552 20.6507 6.40795" fill="#1A212F"/>
            </svg>
          </button>

          <button className="nav-arrow nav-arrow-right" aria-label="Next courses">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.3495 26.5934C11.2498 26.5079 11.1678 26.4036 11.1084 26.2864C11.049 26.1692 11.0132 26.0414 11.0032 25.9104C10.9932 25.7794 11.0091 25.6477 11.05 25.5229C11.0909 25.398 11.156 25.2824 11.2415 25.1827L18.6829 16.5001L11.2415 7.81739C11.151 7.71852 11.0813 7.60245 11.0365 7.47609C10.9917 7.34974 10.9728 7.21566 10.9808 7.08185C10.9889 6.94803 11.0238 6.8172 11.0835 6.69714C11.1431 6.57708 11.2263 6.47024 11.328 6.38296C11.4298 6.29569 11.5481 6.22977 11.6758 6.18911C11.8036 6.14846 11.9382 6.13391 12.0717 6.14633C12.2051 6.15874 12.3348 6.19787 12.4528 6.26139C12.5709 6.3249 12.675 6.4115 12.7589 6.51605L20.7589 15.8494C20.9142 16.0306 20.9995 16.2614 20.9995 16.5001C20.9995 16.7387 20.9142 16.9695 20.7589 17.1507L12.7589 26.4841C12.5862 26.6851 12.3408 26.8095 12.0766 26.8297C11.8123 26.85 11.5508 26.7645 11.3495 26.5921" fill="#1A212F"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
