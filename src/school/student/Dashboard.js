import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
import Calendar from "react-calendar"; // Assuming you have a calendar component library like react-calendar
import {
  FaArrowsAlt,
  FaCog,
  FaEllipsisV,
  FaChartLine,
  FaListAlt,
  FaFileAlt,
  FaUserFriends,
  FaMedal,
  FaGraduationCap,
  FaUserCircle,
  FaCommentDots,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaFilter,
  FaSortAmountDownAlt,
  FaTh,
  FaClock,
} from "react-icons/fa";
import {
  faFilter,
  faSort,
  faTh,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = ({ onSubjectCardClick , onCalendarLinkClick}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageSize] = useState(3);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [isCustomized, setIsCustomized] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");

  const notices = [
    "Notice 1: It's a holiday",
    "Notice 2: It's a Monday",
    "Notice 3: Holiday Holiday Holiday",
  ];

  const recentlyAccessedSubjects = [
    {
      id: "maths",
      name: "Maths",
      standard: "10th",
      division: "A",
      image: "path/to/Maths.jpg",
    },
    {
      id: "science",
      name: "Science",
      standard: "10th",
      division: "B",
      image: "path/to/Science.jpg",
    },
    {
      id: "history",
      name: "History",
      standard: "10th",
      division: "A",
      image: "path/to/History.jpg",
    },
    {
      id: "geography",
      name: "Geography",
      standard: "10th",
      division: "B",
      image: "path/to/Geography.jpg",
    },
    {
      id: "english",
      name: "English",
      standard: "10th",
      division: "A",
      image: "path/to/English.jpg",
    },
    {
      id: "computer",
      name: "Computer",
      standard: "10th",
      division: "B",
      image: "path/to/Computer.jpg",
    },
  ];

  const subjectsData = [
    {
      id: "maths",
      name: "Maths",
      standard: "10th",
      division: "A",
      image: "path/to/Maths.jpg",
      completion: 28,
    },
    {
      id: "science",
      name: "Science",
      standard: "10th",
      division: "B",
      image: "path/to/Science.jpg",
      completion: 15,
    },
    {
      id: "history",
      name: "History",
      standard: "10th",
      division: "A",
      image: "path/to/History.jpg",
      completion: 90,
    },
    {
      id: "geography",
      name: "Geography",
      standard: "10th",
      division: "B",
      image: "path/to/Geography.jpg",
      completion: 55,
    },
    {
      id: "english",
      name: "English",
      standard: "10th",
      division: "A",
      image: "path/to/English.jpg",
      completion: 75,
    },
    {
      id: "computer",
      name: "Computer",
      standard: "10th",
      division: "B",
      image: "path/to/Computer.jpg",
      completion: 25,
    },
  ];

  const onlineUsers = [
    { id: 1, username: "Mr A", icon: "FaUserCircle" },
    { id: 2, username: "Ms B", icon: "FaUserCircle" },
    { id: 3, username: "Mrs C", icon: "FaUserCircle" },
  ];

  const handleCustomizeToggle = () => {
    setIsCustomized(!isCustomized);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCalendarLinkClick = () => {
    if(onCalendarLinkClick)
      onCalendarLinkClick();
  };

  const handleNext = () => {
    if (currentIndex + 3 < recentlyAccessedSubjects.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };
  const subjectsToShowInRecent = recentlyAccessedSubjects.slice(
    currentIndex,
    currentIndex + pageSize
  );

  return (
    <div className="dashboard-container">
      <div className="left-column">
        <div className="dashboard-section notices-section">
          <div className="notices-scroll-container">
            <div className="notices">
              {notices.map((notice, index) => (
                <div className="notice" key={index}>
                  {notice}
                </div>
              ))}
              {/* Duplicate notices for seamless scrolling */}
              {notices.map((notice, index) => (
                <div className="notice" key={`repeat-${index}`}>
                  {notice}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-section recently-accessed-section">
          <div className="section-header">
            <h3>Recently Accessed Subjects</h3>
            <div className="navigation-buttons">
              <button onClick={handlePrev} disabled={currentIndex === 0}>
                <FaChevronCircleLeft />
              </button>
              <button
                onClick={handleNext}
                disabled={
                  currentIndex + pageSize >= recentlyAccessedSubjects.length
                }
              >
                <FaChevronCircleRight />
              </button>
            </div>
            {isCustomized && (
              <div className="icons">
                <FaArrowsAlt className="icon" />
                <FaCog className="icon" />
                <FaEllipsisV className="icon" />
              </div>
            )}
          </div>
          <div className="recently-accessed-content">
            {subjectsToShowInRecent.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                onClick={onSubjectCardClick}
              />
            ))}
          </div>
        </div>
        <div className="dashboard-section subjects-overview">
          <div className="section-header">
            <h3>Subjects Overview</h3>
            {isCustomized && (
              <div className="icons">
                <FaArrowsAlt className="icon" />
                <FaCog className="icon" />
                <FaEllipsisV className="icon" />
              </div>
            )}
          </div>
          {/* Dropdowns section */}
          <div class="dropdown-container">
            <div class="dropdown">
              <FaFilter className="icon" />
              <select id="dropdown1">
                <option value="all">All (except removed from view)</option>
                <option value="in-progress">In progress</option>
                <option value="future">Future</option>
                <option value="past">Past</option>
                <option value="starred">Starred</option>
                <option value="removed">Removed from view</option>
              </select>
            </div>
            <div class="dropdown">
              <FaSortAmountDownAlt className="icon" />
              <select id="dropdown2">
                <option value="course-name">Course Name</option>
                <option value="last-accessed">Last Accessed</option>
              </select>
            </div>
            <div class="dropdown">
              <FaTh className="icon" />
              <select id="dropdown3">
                <option value="card">Card</option>
                <option value="list">List</option>
                <option value="summary">Summary</option>
              </select>
            </div>
          </div>
          <div className="subjects-overview-content">
            {subjectsData.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                onClick={onSubjectCardClick}
                showForSubjectsOverview={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="dashboard-section customize-buttons">
          <button
            className="customize-page-button"
            onClick={handleCustomizeToggle}
          >
            {isCustomized ? "Default" : "Customize This Page"}
          </button>
        </div>

        <>
          {isCustomized && (
            <div className="dashboard-section analytics-graphs">
              <div className="section-header">
                <h3>Analytics Graphs</h3>
                {isCustomized && (
                  <div className="icons">
                    <FaArrowsAlt className="icon" />
                    <FaCog className="icon" />
                    <FaEllipsisV className="icon" />
                  </div>
                )}
              </div>
              <div className="analytics-content">
                <FaChartLine size={48} className="big-icons"/>
                <p></p>
              </div>
            </div>
          )}

          <div className="dashboard-section timeline">
            <div className="section-header">
              <h3>Timeline</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="timeline-content">
              <FaListAlt size={48} className="big-icons"/>
              <p>No upcoming activities due</p>
            </div>
          </div>

          <div className="dashboard-section private-files">
            <div className="section-header">
              <h3>Private Files</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="private-files-content">
              <FaFileAlt size={48} className="big-icons"/>
              <p>No files available</p>
              <a href="#">Manage private files...</a>
            </div>
          </div>

          <div className="dashboard-section online-users">
            <div className="section-header">
              <h3>Online Users</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="online-users-content">
              <p>7 online users (Last 5 minutes)</p>
              <div className="user-profiles">
                {onlineUsers.map((user) => (
                  <div className="user-info" key={user.id}>
                    <div className="user-details">
                      <FaUserCircle size={24} className="big-icons"/>
                      <p>{user.username}</p>
                    </div>
                    <FaCommentDots size={24} className="chat-icon" />
                  </div>
                ))}
                {/* Assuming FaCommentDots is your chat icon */}
              </div>
            </div>
          </div>

          <div className="dashboard-section latest-badges">
            <div className="section-header">
              <h3>Latest Badges</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="latest-badges-content">
              <FaMedal size={48} className="big-icons"/>
              <p>You have no badges to display</p>
            </div>
          </div>

          <div className="dashboard-section calendar">
            <div className="section-header">
              <h3>Calendar</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="calendar-content">
              <div className="calendar-nav">
                <Calendar onChange={handleDateChange} value={selectedDate} />
              </div>
            </div>
          </div>

          <div className="dashboard-section upcoming-courses">
            <div className="section-header">
              <h3>Upcoming Events</h3>
              {isCustomized && (
                <div className="icons">
                  <FaArrowsAlt className="icon" />
                  <FaCog className="icon" />
                  <FaEllipsisV className="icon" />
                </div>
              )}
            </div>
            <div className="upcoming-courses-content">
              <p>There are no upcoming events</p>
              <p onClick = {handleCalendarLinkClick()}>Go to calendar...</p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
