import { FaCaretUp } from "react-icons/fa";
import type { Week } from '../types/courseView'
import { CheckCircle, Circle } from "lucide-react";

interface SideBarProps {
    weeks: Week[];
    expandedWeeks: number[];
    toggleWeek: (id: number) => void;
}

const SideBar : React.FC<SideBarProps> = ( {
    weeks,
    expandedWeeks,
    toggleWeek
}) => {
    return (
        <>
            <div className="sidebar-header">
                <h3 className="sidebar-title">Course Content</h3>
            </div>

            <div className="weeks-list">
                {weeks.map((week) => (
                    <div key={week.id} className="week-item">
                        <button
                            className="week-header"
                            onClick={() => toggleWeek(week.id)}
                        >
                            <span>{week.name}</span>
                            <span className={`chevron ${expandedWeeks.includes(week.id) ? 'expanded' : ''}`}>
                                <FaCaretUp />
                            </span>
                        </button>

                        {expandedWeeks.includes(week.id) && week.sections.length > 0 && (
                            <div className="week-content">
                                {week.sections.map((section, idx) => (
                                    <div key={idx} className="section">
                                        <div className="section-header">{section.name}</div>
                                        <div className="lectures-list">
                                            {section.lectures.map((lecture) => (
                                                <div key={lecture.id} className="lecture-item">
                                                    <div className="lecture-icon">
                                                        {lecture.completed ? (
                                                            <CheckCircle size={16} className="completed" />
                                                        ) : (
                                                            <Circle size={16} className="incomplete" />
                                                        )}
                                                    </div>
                                                    <div className="lecture-info">
                                                        <div className="lecture-title">{lecture.title}</div>
                                                        <div className="lecture-duration">{lecture.duration}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default SideBar