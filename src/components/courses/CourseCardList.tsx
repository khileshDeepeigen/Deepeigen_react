// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import '../landing/courses.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import type { FC } from 'react';
import CourseCardITem from './CourseCardITem';

interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    category: string;
    assignments: string;
    price: number;
    originalPrice: string;
}

interface CourseCardListProps {
    courses: Course[];
    useSwiper?: boolean; // toggle between swiper/grid
}

const CourseCardList: FC<CourseCardListProps> = ({ courses, useSwiper = false }) => {

    if (useSwiper) {
        return (
            <div className="course-swiper-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="courseSwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <CourseCardITem course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }

    // Default grid layout
    return (
        <div className="courses-grid">

            {courses.map((course) => (
                <CourseCardITem key={course.id} course={course} />
            ))}
        </div>
    );
};
export default CourseCardList