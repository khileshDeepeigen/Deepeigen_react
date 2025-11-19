import { useState } from "react";
import "./courseDetails.css";
import { Link } from "react-router-dom";

type TabType = "overview" | "curriculum" | "accessibility" | "refund" | "assignment";

export default function CourseDetails() {
    const [activeTab, setActiveTab] = useState<TabType>("overview");

    const overviewContent = [
        {
            question: "What was AI-1.0Z ML course in 2019?",
            answer: "AI-1.0Z was first offered in June 2019. It was intended to be a 28 weeks mathematically rigorous course. The 2019 course covered several topics in Machine Learning with graduate level mathematical depth."
        },
        {
            question: "What is AI-1.0Z ML course at present?",
            answer: "The first 6 weeks content of the 2019 AI-1.0Z Machine Learning course has been expanded to 7 weeks, and is being offered 2020 onward to serve as a non-exhaustive (number of topics) course in machine learning.\nThis 7 weeks course serves as a prerequisite (for machine learning mathematics) for some of the Category-II courses being offered by Eigen AI Labs.\nThis course can be taken by registrants to get deeply trained machine learning mathematics to develop the ability to further read any book in machine learning. Once registrants go through the mathematical rigour of this short 7 weeks course, we are of the opinion that they will be ready to read and understand machine learning related books to futher expand their knowledge."
        },
        {
            question: "What about some topics that are mentioned in introductory lectures?",
            answer: "The lectures were recorded in 2019 with an intent of providing full course. Since the course has been shortened, in the lectures some of the topics from 2019 course will be mentioned (in terms of what will be covered in the course), but they are no longer the part of the course being offered."
        },
        {
            question: "What if I take longer duration to understand the content?",
            answer: "This is a self-paced course. Typically it should not take you more than 3 months to complete the course. But you have 6 months from the date of registration to complete the course. Beyond that period, please check the details on the Access tab above."
        },
        {
            question: "What are prerequisites?",
            answer: "This course assumes that you have basic background knowledge of\nLinear Algebra\nProbability\n(Multivariate-) Calculus\nFurthermore, registrants are exptected to know at least one computer programming language. The assignments will be in Python, and thus, we expect the registrants to learn python programming concepts on their own.\nWe expect that the registrants can learn libraries like numpy on their own, and can implement mathematical programs using the python programming language."
        }
    ];

    const getTabIndicatorPosition = (tab: TabType): string => {
        const positions: Record<TabType, string> = {
            overview: "0px",
            curriculum: "20%",
            accessibility: "40%",
            refund: "60%",
            assignment: "80%"
        };
        return positions[tab];
    };

    return (
        <div className="course-container">
            <div className="course-max-width">
                <div className="course-layout">

                    {/* Course Header */}
                    <div className="course-header">
                        <div className="course-header-left">
                            <div className="course-header-title-section">
                                <h1 className="course-header-title">
                                    AI-1.0Z: Introduction to Fundamentals of Machine Learning
                                </h1>
                                <p className="course-header-subtitle">
                                    A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.
                                </p>
                            </div>

                            <div className="course-header-badges">
                                <div className="course-badge">
                                    <span className="course-badge-label">Level:</span>
                                    <span className="course-badge-value">Beginner to Intermediate</span>
                                </div>
                                <div className="course-badge">
                                    <span className="course-badge-label">Content Depth:</span>
                                    <span className="course-badge-value">Category-IA</span>
                                </div>
                            </div>
                        </div>

                        {/* Video Thumbnail */}
                        <div className="course-video">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/74f289bf101aac552149d49ab3d4516eb2c8a48a?width=974"
                                alt="Course Video"
                            />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="course-main">
                        <div className="course-main-content">


                            {/* Tab Navigation & Content */}
                            <div className="course-tabs-container">
                                {/* Tabs */}
                                <div className="course-tabs-header">
                                    <button
                                        onClick={() => setActiveTab("overview")}
                                        className={`course-tab-button ${activeTab === "overview" ? "active" : "inactive"}`}
                                    >
                                        Overview
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("curriculum")}
                                        className={`course-tab-button ${activeTab === "curriculum" ? "active" : "inactive"}`}
                                    >
                                        Curriculum
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("accessibility")}
                                        className={`course-tab-button ${activeTab === "accessibility" ? "active" : "inactive"}`}
                                    >
                                        Accessibility
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("refund")}
                                        className={`course-tab-button ${activeTab === "refund" ? "active" : "inactive"}`}
                                    >
                                        Refund
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("assignment")}
                                        className={`course-tab-button ${activeTab === "assignment" ? "active" : "inactive"}`}
                                    >
                                        Assignment
                                    </button>

                                    {/* Active Tab Indicator */}
                                    <div
                                        className="course-tab-indicator"
                                        style={{ left: getTabIndicatorPosition(activeTab) }}
                                    ></div>
                                </div>

                                {/* Tab Content */}
                                <div className="course-tab-content">
                                    {overviewContent.map((item, index) => (
                                        <div key={index} className="course-qa-item">
                                            <h3 className="course-qa-question">
                                                {item.question}
                                            </h3>
                                            <p className="course-qa-answer">
                                                {item.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Course Details */}
                    <div className="course-sidebar">
                        <div className="course-details-card">
                            {/* Header */}
                            <div className="course-details-header">
                                <h2 className="course-details-title">Course Details</h2>
                                <p className="course-details-subtitle">Everything you need to know</p>
                            </div>

                            {/* Details List */}
                            <div className="course-details-content">
                                <div className="course-details-list">
                                    {/* Instructor */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H6.67375C6.86301 27.0001 7.0484 26.9464 7.20838 26.8453C7.36836 26.7442 7.49636 26.5997 7.5775 26.4287C8.06377 25.4021 8.83151 24.5346 9.79143 23.9271C10.7514 23.3196 11.864 22.9971 13 22.9971C14.136 22.9971 15.2486 23.3196 16.2086 23.9271C17.1685 24.5346 17.9362 25.4021 18.4225 26.4287C18.5036 26.5997 18.6316 26.7442 18.7916 26.8453C18.9516 26.9464 19.137 27.0001 19.3263 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM13 21C12.2089 21 11.4355 20.7654 10.7777 20.3259C10.1199 19.8864 9.60723 19.2616 9.30448 18.5307C9.00173 17.7998 8.92252 16.9956 9.07686 16.2196C9.2312 15.4437 9.61216 14.731 10.1716 14.1716C10.731 13.6122 11.4437 13.2312 12.2196 13.0769C12.9956 12.9225 13.7998 13.0017 14.5307 13.3045C15.2616 13.6072 15.8864 14.1199 16.3259 14.7777C16.7654 15.4355 17 16.2089 17 17C17 18.0609 16.5786 19.0783 15.8284 19.8284C15.0783 20.5786 14.0609 21 13 21ZM27 25H19.9287C19.4927 24.2484 18.9371 23.5729 18.2838 23H24C24.2652 23 24.5196 22.8946 24.7071 22.7071C24.8946 22.5196 25 22.2652 25 22V10C25 9.73478 24.8946 9.48043 24.7071 9.29289C24.5196 9.10536 24.2652 9 24 9H8C7.73478 9 7.48043 9.10536 7.29289 9.29289C7.10536 9.48043 7 9.73478 7 10V22C6.99989 22.2218 7.07351 22.4373 7.20928 22.6127C7.34505 22.788 7.53526 22.9133 7.75 22.9688C7.08148 23.5479 6.51413 24.2344 6.07125 25H5V7H27V25Z" fill="#174CD2" fillOpacity="0.7" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Instructor</div>
                                            <div className="course-detail-value">Sanjeev Sharma</div>
                                        </div>
                                    </div>

                                    {/* Free Videos */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0002 2.66666C13.1789 2.66799 11.6416 2.67999 10.3336 2.75732V8.33332H15.0002V2.66666ZM8.33356 2.96132C6.70289 3.22132 5.53222 3.70799 4.61889 4.61866C3.70689 5.53066 3.22156 6.70266 2.96289 8.33332H8.33356V2.96132Z" fill="#174CD2" fillOpacity="0.7" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.66602 16C2.66602 13.7333 2.66602 11.8747 2.75802 10.3333H29.2393C29.3327 11.8747 29.3327 13.7333 29.3327 16C29.3327 18.2667 29.3327 20.1253 29.2407 21.6667H2.75935C2.66602 20.1253 2.66602 18.2667 2.66602 16ZM16.5473 13.872C17.9607 14.8213 18.666 15.296 18.666 16C18.666 16.704 17.9593 17.1787 16.5473 18.128C15.1167 19.0893 14.4007 19.5707 13.8673 19.2173C13.3327 18.864 13.3327 17.9107 13.3327 16C13.3327 14.0893 13.3327 13.136 13.866 12.7827C14.3993 12.4293 15.1167 12.9107 16.5473 13.872Z" fill="#174CD2" fillOpacity="0.7" />
                                                <path d="M29.0376 8.33332C28.7789 6.70266 28.2936 5.53066 27.3816 4.61866C26.4696 3.70666 25.2976 3.22132 23.6669 2.96132V8.33332H29.0376ZM17.0002 2.66666C18.8216 2.66799 20.3589 2.67999 21.6669 2.75732V8.33332H17.0002V2.66666ZM29.0376 23.6667H23.6669V29.0373C25.2976 28.7787 26.4696 28.292 27.3802 27.38C28.2936 26.468 28.7802 25.2973 29.0376 23.6667ZM21.6669 23.6667V29.2413C20.3589 29.3187 18.8216 29.3307 17.0002 29.3333V23.6667H21.6669ZM15.0002 29.3333V23.6667H10.3336V29.2413C11.6416 29.3187 13.1789 29.3307 15.0002 29.3333ZM8.33356 23.6667V29.0373C6.70289 28.7787 5.53222 28.292 4.61889 27.38C3.70689 26.468 3.22156 25.2973 2.96289 23.6667H8.33356Z" fill="#174CD2" fillOpacity="0.7" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Free videos</div>
                                            <a href="#" className="course-detail-link">
                                                Click here to watch
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.99925 4.5C5.86664 4.5 5.73946 4.44732 5.64569 4.35355C5.55193 4.25979 5.49925 4.13261 5.49925 4C5.49925 3.86739 5.55193 3.74021 5.64569 3.64645C5.73946 3.55268 5.86664 3.5 5.99925 3.5H11.9992C12.1319 3.5 12.259 3.55268 12.3528 3.64645C12.4466 3.74021 12.4992 3.86739 12.4992 4V10C12.4992 10.1326 12.4466 10.2598 12.3528 10.3536C12.259 10.4473 12.1319 10.5 11.9992 10.5C11.8666 10.5 11.7395 10.4473 11.6457 10.3536C11.5519 10.2598 11.4992 10.1326 11.4992 10V5.20667L4.35258 12.3533C4.2578 12.4417 4.13243 12.4897 4.0029 12.4874C3.87336 12.4852 3.74977 12.4327 3.65817 12.3411C3.56656 12.2495 3.51408 12.1259 3.5118 11.9963C3.50951 11.8668 3.55759 11.7414 3.64591 11.6467L10.7926 4.5H5.99925Z" fill="#174CD2" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Fee Foreign */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9993 29.3333C23.3633 29.3333 29.3327 23.364 29.3327 16C29.3327 8.63599 23.3633 2.66666 15.9993 2.66666C8.63535 2.66666 2.66602 8.63599 2.66602 16C2.66602 23.364 8.63535 29.3333 15.9993 29.3333ZM16.9993 7.99999C16.9993 7.73477 16.894 7.48042 16.7065 7.29288C16.5189 7.10535 16.2646 6.99999 15.9993 6.99999C15.7341 6.99999 15.4798 7.10535 15.2922 7.29288C15.1047 7.48042 14.9993 7.73477 14.9993 7.99999V8.42266C12.826 8.81199 10.9993 10.4453 10.9993 12.6667C10.9993 15.2227 13.4167 17 15.9993 17C17.8353 17 18.9993 18.208 18.9993 19.3333C18.9993 20.4587 17.8353 21.6667 15.9993 21.6667C14.1647 21.6667 12.9993 20.4587 12.9993 19.3333C12.9993 19.0681 12.894 18.8138 12.7065 18.6262C12.5189 18.4387 12.2646 18.3333 11.9993 18.3333C11.7341 18.3333 11.4798 18.4387 11.2922 18.6262C11.1047 18.8138 10.9993 19.0681 10.9993 19.3333C10.9993 21.5547 12.826 23.188 14.9993 23.5773V24C14.9993 24.2652 15.1047 24.5196 15.2922 24.7071C15.4798 24.8946 15.7341 25 15.9993 25C16.2646 25 16.5189 24.8946 16.7065 24.7071C16.894 24.5196 16.9993 24.2652 16.9993 24V23.5773C19.1727 23.188 20.9993 21.5547 20.9993 19.3333C20.9993 16.7773 18.582 15 15.9993 15C14.1647 15 12.9993 13.792 12.9993 12.6667C12.9993 11.5413 14.1647 10.3333 15.9993 10.3333C17.8353 10.3333 18.9993 11.5413 18.9993 12.6667C18.9993 12.9319 19.1047 13.1862 19.2922 13.3738C19.4798 13.5613 19.7341 13.6667 19.9993 13.6667C20.2646 13.6667 20.5189 13.5613 20.7065 13.3738C20.894 13.1862 20.9993 12.9319 20.9993 12.6667C20.9993 10.4453 19.1727 8.81199 16.9993 8.42266V7.99999Z" fill="#174CD2" fillOpacity="0.7" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Fee: Foreign</div>
                                            <div className="course-detail-value">$25</div>
                                        </div>
                                    </div>

                                    {/* Fee India */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.0327 23C19.2771 22.7778 19.4105 22.5 19.4327 22.1667C19.4549 21.8334 19.3438 21.5445 19.0993 21.3L15.3994 17.4L15.4327 17.3H15.766C16.966 17.3 17.9607 16.9334 18.75 16.2C19.5394 15.4667 20.0225 14.6111 20.1994 13.6334H20.766C20.9882 13.6334 21.1718 13.5556 21.3167 13.4C21.4616 13.2445 21.5336 13.0556 21.5327 12.8334C21.5318 12.6111 21.4598 12.4276 21.3167 12.2827C21.1736 12.1378 20.99 12.0658 20.766 12.0667H20.166C20.0993 11.7334 19.9829 11.4169 19.8167 11.1174C19.6505 10.8178 19.4447 10.5231 19.1994 10.2334H20.766C20.9882 10.2334 21.1718 10.1556 21.3167 10C21.4616 9.84446 21.5336 9.65558 21.5327 9.43335C21.5318 9.21113 21.4598 9.02802 21.3167 8.88402C21.1736 8.74002 20.99 8.66758 20.766 8.66669H11.4327C11.166 8.66669 10.9385 8.76135 10.75 8.95069C10.5616 9.14002 10.4669 9.36758 10.466 9.63335C10.4651 9.89913 10.5598 10.1214 10.75 10.3C10.9402 10.4787 11.1678 10.5676 11.4327 10.5667H15.666C16.2438 10.5667 16.7162 10.7111 17.0834 11C17.4505 11.2889 17.7002 11.6445 17.8327 12.0667H11.2327C11.0105 12.0667 10.8269 12.1445 10.682 12.3C10.5371 12.4556 10.4651 12.6445 10.466 12.8667C10.4669 13.0889 10.5394 13.2725 10.6834 13.4174C10.8274 13.5622 11.0105 13.6342 11.2327 13.6334H17.866C17.7327 14.0778 17.4771 14.4614 17.0993 14.784C16.7216 15.1067 16.2105 15.2676 15.566 15.2667H13.2994C13.0105 15.2667 12.7607 15.3334 12.55 15.4667C12.3394 15.6 12.178 15.7889 12.066 16.0334C11.954 16.2778 11.9207 16.528 11.966 16.784C12.0114 17.04 12.1336 17.2787 12.3327 17.5L17.3327 22.9667C17.5549 23.2111 17.8327 23.3334 18.166 23.3334C18.4994 23.3334 18.7882 23.2222 19.0327 23ZM15.9994 29.3334C14.1549 29.3334 12.4216 28.9831 10.7994 28.2827C9.17713 27.5822 7.76602 26.6325 6.56602 25.4334C5.36602 24.2342 4.41624 22.8231 3.71668 21.2C3.01713 19.5769 2.66691 17.8436 2.66602 16C2.66513 14.1565 3.01535 12.4231 3.71668 10.8C4.41802 9.17691 5.3678 7.7658 6.56602 6.56669C7.76424 5.36758 9.17535 4.4178 10.7994 3.71735C12.4234 3.01691 14.1567 2.66669 15.9994 2.66669C17.842 2.66669 19.5753 3.01691 21.1994 3.71735C22.8234 4.4178 24.2345 5.36758 25.4327 6.56669C26.6309 7.7658 27.5811 9.17691 28.2834 10.8C28.9856 12.4231 29.3354 14.1565 29.3327 16C29.33 17.8436 28.9798 19.5769 28.282 21.2C27.5842 22.8231 26.6345 24.2342 25.4327 25.4334C24.2309 26.6325 22.8198 27.5827 21.1994 28.284C19.5789 28.9854 17.8456 29.3351 15.9994 29.3334Z" fill="#174CD2" fillOpacity="0.7" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Fee: India</div>
                                            <div className="course-detail-value">₹ 999</div>
                                        </div>
                                    </div>

                                    {/* First Offered */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3328 3.33331C10.3328 3.0681 10.2275 2.81374 10.0399 2.62621C9.85239 2.43867 9.59803 2.33331 9.33282 2.33331C9.0676 2.33331 8.81325 2.43867 8.62571 2.62621C8.43817 2.81374 8.33282 3.0681 8.33282 3.33331V5.43998C6.41282 5.59331 5.15415 5.96931 4.22882 6.89598C3.30215 7.82131 2.92615 9.08131 2.77148 11H29.2275C29.0728 9.07998 28.6968 7.82131 27.7701 6.89598C26.8448 5.96931 25.5848 5.59331 23.6662 5.43865V3.33331C23.6662 3.0681 23.5608 2.81374 23.3733 2.62621C23.1857 2.43867 22.9314 2.33331 22.6662 2.33331C22.4009 2.33331 22.1466 2.43867 21.959 2.62621C21.7715 2.81374 21.6662 3.0681 21.6662 3.33331V5.35065C20.7795 5.33331 19.7848 5.33331 18.6662 5.33331H13.3328C12.2142 5.33331 11.2195 5.33331 10.3328 5.35065V3.33331Z" fill="#174CD2" fillOpacity="0.7" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.66602 16C2.66602 14.8813 2.66602 13.8867 2.68335 13H29.3153C29.3327 13.8867 29.3327 14.8813 29.3327 16V18.6667C29.3327 23.6947 29.3327 26.2093 27.77 27.7707C26.2073 29.332 23.694 29.3333 18.666 29.3333H13.3327C8.30468 29.3333 5.79002 29.3333 4.22868 27.7707C2.66735 26.208 2.66602 23.6947 2.66602 18.6667V16ZM22.666 18.6667C23.0196 18.6667 23.3588 18.5262 23.6088 18.2761C23.8589 18.0261 23.9993 17.687 23.9993 17.3333C23.9993 16.9797 23.8589 16.6406 23.6088 16.3905C23.3588 16.1405 23.0196 16 22.666 16C22.3124 16 21.9733 16.1405 21.7232 16.3905C21.4732 16.6406 21.3327 16.9797 21.3327 17.3333C21.3327 17.687 21.4732 18.0261 21.7232 18.2761C21.9733 18.5262 22.3124 18.6667 22.666 18.6667ZM22.666 24C23.0196 24 23.3588 23.8595 23.6088 23.6095C23.8589 23.3594 23.9993 23.0203 23.9993 22.6667C23.9993 22.313 23.8589 21.9739 23.6088 21.7239C23.3588 21.4738 23.0196 21.3333 22.666 21.3333C22.3124 21.3333 21.9733 21.4738 21.7232 21.7239C21.4732 21.9739 21.3327 22.313 21.3327 22.6667C21.3327 23.0203 21.4732 23.3594 21.7232 23.6095C21.9733 23.8595 22.3124 24 22.666 24ZM17.3327 17.3333C17.3327 17.687 17.1922 18.0261 16.9422 18.2761C16.6921 18.5262 16.353 18.6667 15.9993 18.6667C15.6457 18.6667 15.3066 18.5262 15.0565 18.2761C14.8065 18.0261 14.666 17.687 14.666 17.3333C14.666 16.9797 14.8065 16.6406 15.0565 16.3905C15.3066 16.1405 15.6457 16 15.9993 16C16.353 16 16.6921 16.1405 16.9422 16.3905C17.1922 16.6406 17.3327 16.9797 17.3327 17.3333ZM17.3327 22.6667C17.3327 23.0203 17.1922 23.3594 16.9422 23.6095C16.6921 23.8595 16.353 24 15.9993 24C15.6457 24 15.3066 23.8595 15.0565 23.6095C14.8065 23.3594 14.666 23.0203 14.666 22.6667C14.666 22.313 14.8065 21.9739 15.0565 21.7239C15.3066 21.4738 15.6457 21.3333 15.9993 21.3333C16.353 21.3333 16.6921 21.4738 16.9422 21.7239C17.1922 21.9739 17.3327 22.313 17.3327 22.6667ZM9.33268 18.6667C9.6863 18.6667 10.0254 18.5262 10.2755 18.2761C10.5255 18.0261 10.666 17.687 10.666 17.3333C10.666 16.9797 10.5255 16.6406 10.2755 16.3905C10.0254 16.1405 9.6863 16 9.33268 16C8.97906 16 8.63992 16.1405 8.38987 16.3905C8.13983 16.6406 7.99935 16.9797 7.99935 17.3333C7.99935 17.687 8.13983 18.0261 8.38987 18.2761C8.63992 18.5262 8.97906 18.6667 9.33268 18.6667ZM9.33268 24C9.6863 24 10.0254 23.8595 10.2755 23.6095C10.5255 23.3594 10.666 23.0203 10.666 22.6667C10.666 22.313 10.5255 21.9739 10.2755 21.7239C10.0254 21.4738 9.6863 21.3333 9.33268 21.3333C8.97906 21.3333 8.63992 21.4738 8.38987 21.7239C8.13983 21.9739 7.99935 22.313 7.99935 22.6667C7.99935 23.0203 8.13983 23.3594 8.38987 23.6095C8.63992 23.8595 8.97906 24 9.33268 24Z" fill="#174CD2" fillOpacity="0.7" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">First Offered</div>
                                            <div className="course-detail-value">2019</div>
                                        </div>
                                    </div>

                                    {/* Current Status */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_698_1195" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28">
                                                    <path d="M29.3327 16C29.3327 23.364 23.3633 29.3334 15.9993 29.3334C8.63535 29.3334 2.66602 23.364 2.66602 16C2.66602 8.63602 8.63535 2.66669 15.9993 2.66669C23.3633 2.66669 29.3327 8.63602 29.3327 16Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 9.66669C16.2652 9.66669 16.5196 9.77204 16.7071 9.95958C16.8946 10.1471 17 10.4015 17 10.6667V15.5867L20.04 18.6267C20.1382 18.7182 20.2171 18.8286 20.2717 18.9513C20.3264 19.074 20.3558 19.2064 20.3581 19.3407C20.3605 19.4749 20.3358 19.6083 20.2855 19.7328C20.2352 19.8573 20.1603 19.9704 20.0654 20.0654C19.9704 20.1604 19.8573 20.2352 19.7328 20.2855C19.6083 20.3358 19.4749 20.3605 19.3406 20.3581C19.2064 20.3558 19.0739 20.3264 18.9513 20.2717C18.8286 20.2171 18.7182 20.1383 18.6267 20.04L15.2933 16.7067C15.1057 16.5193 15.0002 16.2651 15 16V10.6667C15 10.4015 15.1054 10.1471 15.2929 9.95958C15.4804 9.77204 15.7348 9.66669 16 9.66669Z" fill="black" />
                                                </mask>
                                                <g mask="url(#mask0_698_1195)">
                                                    <path d="M0 0H32V32H0V0Z" fill="#174CD2" fillOpacity="0.7" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Current Status</div>
                                            <div className="course-detail-value">Starts Upon Registration</div>
                                        </div>
                                    </div>

                                    {/* Expected Course Engagement */}
                                    <div className="course-detail-item">
                                        <div className="course-detail-icon-box">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9992 2.66669C10.4885 2.66669 7.73255 2.66669 6.92988 4.40002C6.8608 4.54931 6.80286 4.70351 6.75655 4.86135C6.20988 6.71069 8.15921 8.85469 12.0552 13.1414L14.6659 16H17.3325L19.9432 13.1427C23.8392 8.85469 25.7872 6.71069 25.2419 4.86269C25.1957 4.70394 25.1378 4.54884 25.0685 4.39869C24.2659 2.66669 21.5099 2.66669 15.9992 2.66669Z" fill="#174CD2" />
                                                <path opacity="0.5" d="M6.93148 27.6C7.73415 29.3333 10.4902 29.3333 16.0008 29.3333C21.5115 29.3333 24.2675 29.3333 25.0702 27.6C25.1392 27.4507 25.1972 27.2965 25.2435 27.1387C25.7901 25.2893 23.8408 23.1453 19.9448 18.8587L17.3342 16H14.6675L12.0568 18.8573C8.16082 23.1453 6.21282 25.2893 6.75815 27.1373C6.80437 27.2973 6.86215 27.4507 6.93148 27.6Z" fill="#174CD2" />
                                            </svg>
                                        </div>
                                        <div className="course-detail-text">
                                            <div className="course-detail-label">Expected Course Engagement</div>
                                            <div className="course-detail-value">10 Hrs/Week</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Buy Button */}
                                <Link to="/course-view">
                                    <button className="course-button-primary">
                                        Buy this course
                                    </button>
                                </Link>

                                {/* Divider with "or" */}
                                <div className="course-divider">
                                    <div className="course-divider-line"></div>
                                    <span className="course-divider-text">or</span>
                                    <div className="course-divider-line"></div>
                                </div>

                                {/* Get Full Access */}
                                <div className="course-access-section">
                                    <div>
                                        <h3 className="course-access-heading">Get Full Access</h3>
                                        <p className="course-access-subtitle">of complete curriculum & all premium courses at</p>
                                        <div className="course-price-group">
                                            <div className="course-price-symbol">₹</div>
                                            <div className="course-price-main">3,735</div>
                                            <span className="course-price-old">₹9,999</span>
                                            <span className="course-price-period">/year</span>
                                        </div>
                                    </div>

                                    {/* Subscribe Button */}
                                    <button className="course-button-secondary">
                                        Subscribe
                                    </button>
                                </div>

                                {/* Need Help */}
                                <div className="course-help-box">
                                    <h4 className="course-help-title">Need Help?</h4>
                                    <p className="course-help-text">
                                        If you have any questions about the course, feel free to reach out to our support team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
