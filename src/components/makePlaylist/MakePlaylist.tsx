import { useState } from "react";
import "./makePlaylist.css";

interface Course {
  id: string;
  title: string;
  selected: number;
  total: number;
}

interface Lecture {
  id: string;
  courseId: string;
  title: string;
  selected: boolean;
}

export default function MakePlaylist() {
  const [courses] = useState<Course[]>([
    {
      id: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: 1,
      total: 10,
    },
    {
      id: "2",
      title: "RL-1.0Y: Fundamentals of Reinforcement Learning",
      selected: 0,
      total: 10,
    },
    {
      id: "3",
      title: "CV-2.0X: Introduction to Visual Odometry and Mapping",
      selected: 4,
      total: 10,
    },
    {
      id: "4",
      title: "GenAI-1.0X: Generative AI",
      selected: 0,
      total: 10,
    },
  ]);

  const [lectures, setLectures] = useState<Lecture[]>([
    {
      id: "1",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: true,
    },
    {
      id: "2",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: false,
    },
    {
      id: "3",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: false,
    },
    {
      id: "4",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: false,
    },
    {
      id: "5",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: false,
    },
    {
      id: "6",
      courseId: "1",
      title: "AI-1.0Z: Introduction to Fundamentals of Machine Learning",
      selected: false,
    },
  ]);

  const [wantCustomAssignment, setWantCustomAssignment] = useState(true);

  const toggleLecture = (id: string) => {
    setLectures((prev) =>
      prev.map((lecture) =>
        lecture.id === id ? { ...lecture, selected: !lecture.selected } : lecture
      )
    );
  };

  const selectedCount = lectures.filter((l) => l.selected).length;

  return (
    <div className="playlist-page">

      {/* Main Content */}
      <div className="playlist-container">
        {/* Header */}
        <div className="flex justify-between items-start gap-8">
          <div className="playlist-header-text">
            <h1 className="playlist-title">Create Your Playlist</h1>
            <p className="playlist-subtitle">
              Select all the lectures you wish to include in your custom plan
            </p>
          </div>
          <div className="playlist-subscribe-box">
            <button className="playlist-btn-subscribe">Subscribe</button>
            <p className="playlist-selected-count">
              <span className="playlist-count-number">{selectedCount}</span> Lectures selected
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="playlist-content">
          {/* Courses Section */}
          <div className="playlist-section">
            <h2 className="playlist-section-title">Courses</h2>
            
            <div className="playlist-courses-list">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`playlist-course-card ${index === 0 ? "active" : ""}`}
                >
                  <div className="playlist-course-icon">
                    <span>Machine<br/>Learning</span>
                  </div>
                  <div className="playlist-course-info">
                    <h3 className="playlist-course-title">{course.title}</h3>
                    <p className="playlist-course-count">
                      <span className="playlist-count-highlight">{course.selected}</span>
                      /{course.total} lectures {course.selected > 0 ? "selected" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="playlist-divider"></div>

          {/* Lectures Section */}
          <div className="playlist-section">
            <h2 className="playlist-section-title">Lectures</h2>
            <div className="playlist-lectures-container">
              <div className="playlist-lectures-list">
                {lectures.map((lecture) => (
                  <div
                    key={lecture.id}
                    className={`playlist-lecture-card ${lecture.selected ? "selected" : ""}`}
                    onClick={() => toggleLecture(lecture.id)}
                  >
                    <div className="playlist-lecture-info">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.0013 29.3333C23.3653 29.3333 29.3346 23.364 29.3346 16C29.3346 8.636 23.3653 2.66666 16.0013 2.66666C8.6373 2.66666 2.66797 8.636 2.66797 16C2.66797 23.364 8.6373 29.3333 16.0013 29.3333ZM14.26 21.128L20.5533 17.412C21.5946 16.796 21.5946 15.204 20.5533 14.588L14.26 10.872C13.2466 10.2747 12.0013 11.0533 12.0013 12.2853V19.716C12.0013 20.9467 13.2466 21.7253 14.26 21.128Z"
                          fill="#174CD2"
                        />
                      </svg>
                      <span className="playlist-lecture-title">{lecture.title}</span>
                    </div>
                    <div className="playlist-checkbox">
                      <div className="playlist-checkbox-container">
                        {lecture.selected ? (
                          <>
                            <div className="playlist-checkbox-checked"></div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                                fill="white"
                              />
                            </svg>
                          </>
                        ) : (
                          <div className="playlist-checkbox-unchecked"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="playlist-assignments">
          <h2 className="playlist-section-title">Assignments</h2>
          <p className="playlist-assignments-text">
            Assignments are an integral part of each subscription model, thoughtfully designed to support your learning. While we are unable to tailor assignments for every custom plan, we offer assistance in preparing assignments based on your selected lectures for a nominal fee.
          </p>
          <div
            className="playlist-assignment-option"
            onClick={() => setWantCustomAssignment(!wantCustomAssignment)}
          >
            <div className="playlist-checkbox">
              <div className="playlist-checkbox-container">
                {wantCustomAssignment ? (
                  <>
                    <div className="playlist-checkbox-checked"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
                        fill="white"
                      />
                    </svg>
                  </>
                ) : (
                  <div className="playlist-checkbox-unchecked"></div>
                )}
              </div>
            </div>
            <span className="playlist-assignment-label">I want a custom made assignment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
