import  type { FC } from "react"
import "../landing/courses.css"
import { Link } from "react-router-dom";


interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    category: string;
    assignments: number;
    price: number;
    originalPrice: string;
}

interface CourseCardItemProps {
    course: Course;
}

const CourseCardITem: FC<CourseCardItemProps> = ({ course }) => {

    return (
        <>

            <div key={course.id} className="course-card">
                <div className="course-image-container">
                    <img src={course.image} alt={course.title} className="course-image" />
                    <div className="course-overlay">
                        <Link to="/course_details" className="view-course-link">View Course →</Link>
                    </div>
                </div>

                <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>

                    <div className="course-divider"></div>

                    <div className="course-meta">
                        <div className="meta-item">
                            <span className="meta-label">Duration</span>
                            <span className="meta-value">{course.duration}</span>
                        </div>
                        <div className="meta-divider"></div>
                        <div className="meta-item">
                            <span className="meta-label">Category</span>
                            <div className="meta-value-wrapper">
                                <span className="meta-value">{course.category}</span>
                                <svg className="info-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.50008 10.8542C7.61611 10.8542 7.72739 10.8081 7.80944 10.7261C7.89149 10.644 7.93758 10.5327 7.93758 10.4167V6.91671C7.93758 6.80068 7.89149 6.6894 7.80944 6.60735C7.72739 6.5253 7.61611 6.47921 7.50008 6.47921C7.38405 6.47921 7.27277 6.5253 7.19072 6.60735C7.10868 6.6894 7.06258 6.80068 7.06258 6.91671V10.4167C7.06258 10.6582 7.25858 10.8542 7.50008 10.8542ZM7.50008 4.58337C7.65479 4.58337 7.80316 4.64483 7.91256 4.75423C8.02196 4.86362 8.08341 5.012 8.08341 5.16671C8.08341 5.32142 8.02196 5.46979 7.91256 5.57919C7.80316 5.68858 7.65479 5.75004 7.50008 5.75004C7.34537 5.75004 7.197 5.68858 7.0876 5.57919C6.97821 5.46979 6.91675 5.32142 6.91675 5.16671C6.91675 5.012 6.97821 4.86362 7.0876 4.75423C7.197 4.64483 7.34537 4.58337 7.50008 4.58337Z" fill="#1A212F" fillOpacity="0.4" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.22925 7.49996C1.22925 4.03671 4.03683 1.22913 7.50008 1.22913C10.9633 1.22913 13.7709 4.03671 13.7709 7.49996C13.7709 10.9632 10.9633 13.7708 7.50008 13.7708C4.03683 13.7708 1.22925 10.9632 1.22925 7.49996ZM7.50008 2.10413C6.06902 2.10413 4.69657 2.67261 3.68465 3.68453C2.67274 4.69644 2.10425 6.0689 2.10425 7.49996C2.10425 8.93102 2.67274 10.3035 3.68465 11.3154C4.69657 12.3273 6.06902 12.8958 7.50008 12.8958C8.93115 12.8958 10.3036 12.3273 11.3155 11.3154C12.3274 10.3035 12.8959 8.93102 12.8959 7.49996C12.8959 6.0689 12.3274 4.69644 11.3155 3.68453C10.3036 2.67261 8.93115 2.10413 7.50008 2.10413Z" fill="#1A212F" fillOpacity="0.4" />
                                </svg>
                            </div>
                        </div>
                        <div className="meta-divider"></div>
                        <div className="meta-item">
                            <span className="meta-label">Assignments</span>
                            <span className="meta-value">{course.assignments}</span>
                        </div>
                    </div>

                    <div className="course-divider"></div>

                    <div className="course-footer">
                        <div className="price-container">
                            <div className="current-price">
                                <span className="currency">₹ </span>
                                <span className="price-amount">{course.price}</span>
                            </div>
                            <span className="original-price">{course.originalPrice}</span>
                        </div>
                        <button className="buy-button">Buy Course</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourseCardITem