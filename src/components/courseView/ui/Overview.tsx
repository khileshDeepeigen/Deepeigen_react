import { FaCalendarAlt, FaUserAlt } from "react-icons/fa"
import { PiFilmSlateBold } from "react-icons/pi"
import { FaCircleDollarToSlot } from "react-icons/fa6"
import { RiMoneyRupeeCircleFill }from "react-icons/ri"


const Overview = () => {
    return (
        <>
            <div className="content-section">
                <div className="overview">
                    <h3 className="section-title">Overview</h3>
                    <p className="section-text">
                        This machine learning course is tentatively a 7 weeks course. Ideally, a student spending 10 hours per week should be able to finish the course in the specified number of weeks.
                    </p>
                </div>

                <div className="course-schema">
                    <h3 className="section-title">Course Schema</h3>
                    <div className="schema-item">
                        <span className="schema-label">Week - 1:</span>
                        <span className="schema-value">Overview of Machine Learning Linear Regression</span>
                    </div>
                    <div className="schema-item">
                        <span className="schema-label">Week - 2:</span>
                        <span className="schema-value">Overview of Machine Learning Linear Regression</span>
                    </div>
                </div>

                <div className="course-details">
                    <h3 className="section-title">Course Details</h3>
                    <div className="details-grid">
                        <div className="detail-card">
                            <div className="card-icon">
                                <FaUserAlt />
                            </div>
                            <div>
                                <div className="card-label">Instructor</div>
                                <div className="card-value">Sanjeev Sharma</div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-icon">
                                <PiFilmSlateBold />
                            </div>
                            <div>
                                <div className="card-label">Free videos</div>
                                <div className="card-value link">Click here to watch</div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-icon">
                                <FaCircleDollarToSlot />
                            </div>
                            <div>
                                <div className="card-label">Fee: Foreign</div>
                                <div className="card-value">$25</div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-icon">
                                <RiMoneyRupeeCircleFill />
                            </div>
                            <div>
                                <div className="card-label">Fee: India</div>
                                <div className="card-value">₹ 999</div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-icon">
                                <FaCalendarAlt />
                            </div>
                            <div>
                                <div className="card-label">First Offered</div>
                                <div className="card-value">2019</div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-icon">⏱</div>
                            <div>
                                <div className="card-label">Expected Course Engagement</div>
                                <div className="card-value">10 Hrs/Week</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="help-section">
                    <h3 className="section-title">Need Help?</h3>
                    <p className="section-text">
                        If you have any questions about the course, feel free to reach out to our support team.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Overview