import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file

const Dashboard = ({ subjects, onSubjectClick }) => {
  const [notices] = useState([
    'Notice 1: It\'s a holiday',
    'Notice 2: It\'s a Monday',
    'Notice 3: Holiday Holiday Holiday'
  ]);

  const [recentlyAccessedSubjects] = useState(['Physics', 'Chemistry', 'Maths']);

  const [allSubjectsOpen, setAllSubjectsOpen] = useState(false);

  const handleViewAllSubjects = () => {
    setAllSubjectsOpen(!allSubjectsOpen);
  };

  const handleSubjectClick = (subjectId) => {
    if (onSubjectClick) {
      onSubjectClick(subjectId);
    }
  };

  return (
    <div className="DashboardContainer">
      <div>
        <div className="ScrollContainer">
          <div className="Notices">
            {notices.map((notice, index) => (
              <div key={index} className="Notice">{notice}</div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="SectionHeader">
          <div className="SectionHeading">Recently Accessed Subjects</div>
        </div>
        <div className="RecentlyAccessedContainer">
          {recentlyAccessedSubjects.map((subject, index) => (
            <div key={index} className="RecentlyAccessedCard" onClick={() => handleSubjectClick(subject)}>{subject}</div>
          ))}
        </div>
      </div>

      <div>
        <div className="SectionHeader">
          <div className="SectionHeading">Subjects Overview</div>
        </div>

        <div className="SubjectsContainer">
          <div>
            <button className="ViewAllButton" onClick={handleViewAllSubjects}>
              {allSubjectsOpen ? 'Show Less' : 'View All'}
            </button>
          </div>
          <div className='sub-card'>
            {subjects.slice(0, allSubjectsOpen ? subjects.length : 4).map((subject, index) => (
              <div key={index} className="SubjectCard" onClick={() => handleSubjectClick(subject.id)}>{subject.title}</div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
