import React, { useState } from 'react';
import './styles/courseView.css';
import { ChevronLeft } from 'lucide-react';
import video_c from '../../assets/Hero/Videos/drone.mp4'
import SideBar from './ui/SideBar';
import type { Week } from './types/courseView'
import Overview from './ui/Overview';
import DiscussionForum from './ui/DiscussionForum';
import Announcements from './ui/Announcements';

const index: React.FC = () => {
    const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1]);
    const [activeTab, setActiveTab] = useState<'overview' | 'forum' | 'announcements'>('overview');

    const weeks: Week[] = [
        {
            id: 1,
            name: 'Week - 1',
            sections: [
                {
                    name: 'Main Lectures',
                    lectures: [
                        { id: 1, title: 'Different Field in Machine Learning jbjhhjgglh ghgffgdkjh fgtughb', duration: '3 min', completed: true },
                        { id: 2, title: 'Assignment-A23', duration: '3 min', completed: true },
                        { id: 3, title: 'Introducing TAs and the Notations', duration: '3 min', completed: true },
                        { id: 4, title: 'The Bigger Picture and the Summary', duration: '3 min', completed: false },
                    ],
                },
                {
                    name: 'TA-Lectures',
                    lectures: [
                        { id: 5, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                        { id: 6, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                    ],
                },
                {
                    name: 'Programming Lectures',
                    lectures: [
                        { id: 7, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                        { id: 8, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                    ],
                },
                {
                    name: 'Assignments',
                    lectures: [
                        { id: 9, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                        { id: 10, title: 'Different Field in Machine Learning', duration: '3 min', completed: true },
                    ],
                },
            ],
        },
        { id: 2, name: 'Week - 2', sections: [] },
        { id: 3, name: 'Week - 3', sections: [] },
        { id: 4, name: 'Week - 4', sections: [] },
        { id: 5, name: 'Week - 5', sections: [] },
        { id: 6, name: 'Week - 6', sections: [] },
    ];

    const toggleWeek = (weekId: number) => {
        setExpandedWeeks((prev) =>
            prev.includes(weekId) ? prev.filter((id) => id !== weekId) : [...prev, weekId]
        );
    };

    return (
        <div className="course-view-wrapper">
            <div className='course-view-container'>

                {/* Main content of course view page */}
                <div className="course-view-main">
                    {/* Header */}
                    <div className="course-view-header">
                        <button className="back-button">
                            <ChevronLeft size={20} />
                            <span>RL-1.0Y: Fundamentals of Reinforcement Learning</span>
                        </button>
                    </div>

                    {/* Video Player */}
                    <div className="video-section">
                        <video src={video_c} autoPlay loop muted>

                        </video>
                    </div>


                    {/* Navigation Tabs */}
                    <div className="tabs-container">
                        <button
                            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab ${activeTab === 'forum' ? 'active' : ''}`}
                            onClick={() => setActiveTab('forum')}
                        >
                            Discussion Forum
                        </button>
                        <button
                            className={`tab ${activeTab === 'announcements' ? 'active' : ''}`}
                            onClick={() => setActiveTab('announcements')}
                        >
                            Announcements
                        </button>
                    </div>

                    {/* Content Sections */}
                    {activeTab === 'overview' && (
                        <Overview />
                    )}

                    {activeTab === 'forum' && (
                        <DiscussionForum />
                    )}

                    {activeTab === 'announcements' && (
                        <Announcements />
                    )}
                </div>

                {/* Sidebar of course view page */}
                <div className="course-view-sidebar">
                    <SideBar
                        weeks={weeks}
                        expandedWeeks={expandedWeeks}
                        toggleWeek={toggleWeek}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
