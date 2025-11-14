import { useState } from "react";
import "./loggedIn.css";

type SectionType = "courses" | "playlist" | "certificates" | "ai-labs";

interface Course {
  id: string;
  title: string;
  description: string;
  validity: string;
  category: string;
  assignments: number;
  completion: number;
  image: string;
}

interface Certificate {
  id: string;
  title: string;
  completionDate: string;
  grade: string;
  image: string;
}

export default function LoggedIn() {
  const [activeSection, setActiveSection] = useState<SectionType>("courses");

  const certificates: Certificate[] = [
    {
      id: "1",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      completionDate: "Completed on 12 August 25",
      grade: "Grade Achieved: 100%",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/00aaa0f6381e1aba2db6ba98caef3394072aaae8?width=344"
    },
    {
      id: "2",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      completionDate: "Completed on 12 August 25",
      grade: "Grade Achieved: 100%",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1b87f0f52bcdb654345f4b64663250cfb2ffe460?width=344"
    },
    {
      id: "3",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      completionDate: "Completed on 12 August 25",
      grade: "Grade Achieved: 100%",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1b87f0f52bcdb654345f4b64663250cfb2ffe460?width=344"
    },
    {
      id: "4",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      completionDate: "Completed on 12 August 25",
      grade: "Grade Achieved: 100%",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/00aaa0f6381e1aba2db6ba98caef3394072aaae8?width=344"
    },
    {
      id: "5",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      completionDate: "Completed on 12 August 25",
      grade: "Grade Achieved: 100%",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/00aaa0f6381e1aba2db6ba98caef3394072aaae8?width=344"
    }
  ];

  const courses: Course[] = [
    {
      id: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      validity: "167 days",
      category: "1A",
      assignments: 28,
      completion: 62,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: "2",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      validity: "167 days",
      category: "1A",
      assignments: 28,
      completion: 62,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: "3",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      validity: "167 days",
      category: "1A",
      assignments: 28,
      completion: 0,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: "4",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      validity: "167 days",
      category: "1A",
      assignments: 28,
      completion: 0,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    },
    {
      id: "5",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      description: "A theoretically deep 7 weeks course to provide the fundamentals of machine learning with mathematical rigour, to for necessary prerequisites for other courses.",
      validity: "167 days",
      category: "1A",
      assignments: 28,
      completion: 100,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d534ad339983623000d55526c9a3e7a6d8407489?width=734"
    }
  ];

  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <div className="dashboard-header-welcome">
            <h1 className="dashboard-welcome-title">Welcome, John</h1>
            <p className="dashboard-welcome-subtitle">Let's continue your learning</p>
          </div>
          <div className="dashboard-badge">Basic</div>
        </div>

        <div className="dashboard-current-course">
          <div className="dashboard-current-course-info">
            <div className="dashboard-current-course-text">
              <h2 className="dashboard-current-course-title">AI-1.0Z: Introduction to Fundamentals of Machine Learning</h2>
              <p className="dashboard-current-course-instructor">Sajeev Sharma</p>
            </div>
            <button className="dashboard-continue-btn">
              Continue Watching
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM10.694 15.846L15.414 13.059C16.195 12.597 16.195 11.403 15.414 10.941L10.694 8.154C9.934 7.706 9 8.29 9 9.214V14.787C9 15.71 9.934 16.294 10.694 15.846Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="dashboard-tabs w-fit">
          <button 
            className={`dashboard-tab ${activeSection === "courses" ? "active" : ""}`}
            onClick={() => setActiveSection("courses")}
          >
            Courses
          </button>
          <button 
            className={`dashboard-tab ${activeSection === "playlist" ? "active" : ""}`}
            onClick={() => setActiveSection("playlist")}
          >
            Playlist
          </button>
          <button 
            className={`dashboard-tab ${activeSection === "certificates" ? "active" : ""}`}
            onClick={() => setActiveSection("certificates")}
          >
            Certificates
          </button>
          <button 
            className={`dashboard-tab ${activeSection === "ai-labs" ? "active" : ""}`}
            onClick={() => setActiveSection("ai-labs")}
          >
            AI Labs
          </button>
          <div 
            className="dashboard-tab-indicator"
            style={{
              left: activeSection === "courses" ? "0" : 
                    activeSection === "playlist" ? "26%" : 
                    activeSection === "certificates" ? "55%" : "84%"
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {activeSection === "courses" && (
          <>
            {/* Customized Course Card */}
            <div className="dashboard-customized-course">
          <div className="dashboard-customized-course-content">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M28.0078 39.094C28.7109 40.0315 29.8594 40.008 29.8594 40.008C28.1953 36.0002 25.4297 35.8127 25.4297 35.8127C22.4297 35.5549 16.9922 36.7034 16.9922 36.7034L15.4922 40.008L28.0078 39.094Z" fill="white"/>
              <path d="M32.3203 39.2343C32.5547 38.9999 32.7656 39.0937 32.7656 39.0937L45.1641 39.9843L43.7109 36.9374C41.1797 36.1406 37.0547 35.8827 37.0547 35.8827C32.5313 35.3437 30.9141 38.8593 30.9141 38.8593V39.9843C31.4297 40.2187 32.3203 39.2343 32.3203 39.2343Z" fill="white"/>
              <path d="M16.2891 18.2579H16.125L15.0703 20.9064V39.0704L16.3125 35.9532L16.2891 18.2579Z" fill="white"/>
              <path d="M44.3672 35.9532L45.5391 38.8829V21.2345L44.3672 18.2579V35.9532Z" fill="white"/>
              <path d="M46.6641 40.922L32.7656 40.0548C30.1875 42.422 27.9844 40.0782 27.9844 40.0782L13.7812 40.9689V20.9298L14.7187 19.8048H12.8203V42.3517L27.4453 41.2736C30.1875 43.3595 33.4219 41.2736 33.4219 41.2736L47.7891 42.3517V19.6642H45.5391L46.5938 20.8829L46.6641 40.922Z" fill="white"/>
              <path d="M30 2.34375C14.7188 2.34375 2.34375 14.7188 2.34375 30C2.34375 45.2812 14.7188 57.6562 30 57.6562C45.2812 57.6562 57.6562 45.2812 57.6562 30C57.6562 14.7188 45.2812 2.34375 30 2.34375ZM48.8672 43.3828L33.5625 42.2344C33.5625 42.2344 30.3984 44.6016 27.375 42.1875L11.6953 43.4766V19.1016H15.2578L16.0078 16.6875C16.0078 16.6875 27.6562 12.2812 30.3047 18.7266C30.3047 18.7266 32.1562 12.2812 44.4609 16.6641L45.3281 18.9375H48.8906L48.8672 43.3828Z" fill="white"/>
              <path d="M28.7305 27.9167C29.2941 27.9167 29.8346 28.1406 30.2331 28.5391C30.6316 28.9376 30.8555 29.4781 30.8555 30.0417C30.8555 30.6053 30.6316 31.1458 30.2331 31.5443C29.8346 31.9428 29.2941 32.1667 28.7305 32.1667C28.1669 32.1667 27.6264 31.9428 27.2279 31.5443C26.8294 31.1458 26.6055 30.6053 26.6055 30.0417C26.6055 29.4781 26.8294 28.9376 27.2279 28.5391C27.6264 28.1406 28.1669 27.9167 28.7305 27.9167ZM32.2721 20.8334C31.9931 20.8334 31.7168 20.8883 31.4589 20.9951C31.2011 21.1019 30.9669 21.2584 30.7695 21.4558C30.5722 21.6531 30.4157 21.8874 30.3089 22.1452C30.2021 22.403 30.1471 22.6793 30.1471 22.9584C30.1471 23.2374 30.2021 23.5138 30.3089 23.7716C30.4157 24.0294 30.5722 24.2637 30.7695 24.461C30.9669 24.6583 31.2011 24.8148 31.4589 24.9216C31.7168 25.0284 31.9931 25.0834 32.2721 25.0834C32.8357 25.0834 33.3762 24.8595 33.7747 24.461C34.1733 24.0625 34.3971 23.522 34.3971 22.9584C34.3971 22.3948 34.1733 21.8543 33.7747 21.4558C33.3762 21.0573 32.8357 20.8334 32.2721 20.8334Z" stroke="white" strokeWidth="1.0625"/>
              <path d="M32.6263 30.0127H37.5846M28.3763 22.9293H23.418M23.418 30.0127H24.8346M37.5846 22.9293H36.168" stroke="white" strokeWidth="1.0625" strokeLinecap="round"/>
            </svg>
            <div className="dashboard-customized-course-text">
              <h3>My Customized Course</h3>
              <div className="dashboard-customized-course-stats">
                <span>43 Lectures</span>
                <div className="dashboard-customized-course-divider"></div>
                <span>3 Assignments</span>
              </div>
            </div>
          </div>
          <button className="dashboard-customized-course-play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.409 9.35306C21.8893 9.60848 22.291 9.98975 22.5712 10.456C22.8514 10.9223 22.9994 11.4561 22.9994 12.0001C22.9994 12.544 22.8514 13.0778 22.5712 13.5441C22.291 14.0104 21.8893 14.3917 21.409 14.6471L8.597 21.6141C6.534 22.7371 4 21.2771 4 18.9681V5.03306C4 2.72306 6.534 1.26406 8.597 2.38506L21.409 9.35306Z" fill="white"/>
            </svg>
          </button>
            </div>

            {/* Section Header */}
            <div className="dashboard-section-header">
          <div className="dashboard-section-info">
            <h2 className="dashboard-section-title">My Courses</h2>
            <p className="dashboard-section-subtitle">View all your courses and their track its progress</p>
          </div>
          <button className="dashboard-add-course-btn">
            Add Course
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
            </div>

            {/* Courses Grid */}
            <div className="dashboard-courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="dashboard-course-card">
              <div className="dashboard-course-image">
                <img src={course.image} alt={course.title} />
                <div className="dashboard-course-hover">
                  <button className="dashboard-course-action-btn">
                    {course.completion === 0 ? "Start Learning" : 
                     course.completion === 100 ? "View Certificate" : 
                     "Resume Learning"}
                  </button>
                </div>
              </div>
              <div className="dashboard-course-content">
                <h3 className="dashboard-course-title">{course.title}</h3>
                <p className="dashboard-course-description">{course.description}</p>
                <div className="dashboard-course-divider"></div>
                <div className="dashboard-course-meta">
                  <div className="dashboard-course-meta-item">
                    <span className="dashboard-course-meta-label">Validity</span>
                    <span className="dashboard-course-meta-value">{course.validity}</span>
                  </div>
                  <div className="dashboard-course-meta-divider"></div>
                  <div className="dashboard-course-meta-item">
                    <span className="dashboard-course-meta-label">Category</span>
                    <div className="dashboard-course-category">
                      <span className="dashboard-course-meta-value">{course.category}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7.0013 10.3548C7.11733 10.3548 7.22861 10.3087 7.31066 10.2267C7.39271 10.1446 7.4388 10.0334 7.4388 9.91732V6.41732C7.4388 6.30129 7.39271 6.19001 7.31066 6.10796C7.22861 6.02591 7.11733 5.97982 7.0013 5.97982C6.88527 5.97982 6.77399 6.02591 6.69194 6.10796C6.6099 6.19001 6.5638 6.30129 6.5638 6.41732V9.91732C6.5638 10.1588 6.7598 10.3548 7.0013 10.3548ZM7.0013 4.08398C7.15601 4.08398 7.30438 4.14544 7.41378 4.25484C7.52318 4.36424 7.58464 4.51261 7.58464 4.66732C7.58464 4.82203 7.52318 4.9704 7.41378 5.0798C7.30438 5.18919 7.15601 5.25065 7.0013 5.25065C6.84659 5.25065 6.69822 5.18919 6.58882 5.0798C6.47943 4.9704 6.41797 4.82203 6.41797 4.66732C6.41797 4.51261 6.47943 4.36424 6.58882 4.25484C6.69822 4.14544 6.84659 4.08398 7.0013 4.08398Z" fill="#1A212F" fillOpacity="0.4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.730469 6.99935C0.730469 3.5361 3.53805 0.728516 7.0013 0.728516C10.4646 0.728516 13.2721 3.5361 13.2721 6.99935C13.2721 10.4626 10.4646 13.2702 7.0013 13.2702C3.53805 13.2702 0.730469 10.4626 0.730469 6.99935ZM7.0013 1.60352C5.57024 1.60352 4.19779 2.172 3.18587 3.18392C2.17396 4.19583 1.60547 5.56829 1.60547 6.99935C1.60547 8.43041 2.17396 9.80286 3.18587 10.8148C4.19779 11.8267 5.57024 12.3952 7.0013 12.3952C8.43237 12.3952 9.80482 11.8267 10.8167 10.8148C11.8286 9.80286 12.3971 8.43041 12.3971 6.99935C12.3971 5.56829 11.8286 4.19583 10.8167 3.18392C9.80482 2.172 8.43237 1.60352 7.0013 1.60352Z" fill="#1A212F" fillOpacity="0.4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="dashboard-course-meta-divider"></div>
                  <div className="dashboard-course-meta-item">
                    <span className="dashboard-course-meta-label">Assignments</span>
                    <span className="dashboard-course-meta-value">{course.assignments}</span>
                  </div>
                </div>
                <div className="dashboard-course-divider"></div>
                <div className="dashboard-course-progress">
                  <div className="dashboard-course-progress-bar">
                    <div 
                      className={`dashboard-course-progress-fill ${course.completion === 100 ? "complete" : ""}`}
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                  <span className="dashboard-course-progress-text">{course.completion}% Completed</span>
                </div>
              </div>
            </div>
              ))}
            </div>
          </>
        )}

        {activeSection === "certificates" && (
          <>
            {/* Certificates Header */}
            <div className="certificates-header">
              <div className="certificates-header-text">
                <h2 className="certificates-title">My Certificates</h2>
                <p className="certificates-subtitle">View and share all your earned certificates</p>
              </div>
            </div>

            {/* Certificates List */}
            <div className="certificates-list">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="certificate-item">
                  <div className="certificate-image">
                    <img src={certificate.image} alt={certificate.title} />
                  </div>
                  <div className="certificate-details">
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <p className="certificate-completion-date">{certificate.completionDate}</p>
                    <p className="certificate-grade">{certificate.grade}</p>
                  </div>
                  <div className="certificate-actions">
                    <button className="certificate-btn-secondary">Download</button>
                    <button className="certificate-btn-primary">Share to LinkedIn</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeSection === "playlist" && (
          <div className="dashboard-section-placeholder">
            <h2>Playlist Section</h2>
            <p>Content coming soon...</p>
          </div>
        )}

        {activeSection === "ai-labs" && (
          <div className="dashboard-section-placeholder">
            <h2>AI Labs Section</h2>
            <p>Content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
