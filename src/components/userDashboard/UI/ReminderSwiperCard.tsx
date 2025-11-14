import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./ReminderSwiperCard.css"; // <-- External CSS file

const ReminderSwiperCard = () => {
  const reminders = [
    {
      title: "Payment reminder",
      course: "Al-1.0Z: Introduction to Fundamentals of Machine Learning",
      due: "November 02, 2025",
      amount: "$12",
    },
    {
      title: "Payment reminder",
      course: "ML-2.0Z: Deep Learning Essentials",
      due: "November 15, 2025",
      amount: "$25",
    },
    {
      title: "Payment reminder",
      course: "AI-3.0Z: Advanced Neural Networks",
      due: "December 01, 2025",
      amount: "$40",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="swiper-container"
      >
        {reminders.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="reminder-card">
              <div className="reminder-box">
                <div className="reminder-content">

                  {/* Left Content */}
                  <div className="left-section">
                    <h2 className="reminder-title">
                      Payment reminder {i + 1}
                    </h2>

                    <div className="course-wrapper">
                      <p className="course-text">
                        <span>Your course: </span>
                        <span className="course-name">
                          AI-1.0Z: Introduction to Fundamentals of Machine Learning{" "}
                        </span>
                        payment is due. Please complete the payment to continue
                        uninterrupted access to courses and learning tools.
                      </p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="right-section">
                    <button className="pay-btn">Pay $12</button>

                    <p className="due-date">Due on November 02, 2025</p>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReminderSwiperCard;
