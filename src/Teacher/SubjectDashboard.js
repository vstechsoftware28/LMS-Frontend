import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SubjectDashboard.css';
import { FaCaretDown, FaUser,FaRegEye,FaTrashAlt , FaComment, FaListAlt, FaCog, FaCogs, FaPen, FaFilter, FaRegFileArchive, FaLevelUpAlt, FaHistory, FaSortAmountDownAlt, FaArrowLeft, FaArrowsAlt, } from 'react-icons/fa';
import { FcComments } from "react-icons/fc";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SubjectDashboard = ({ onVideoClick, onTurnEditing, onDashboard, onSubTable }) => {
  const { name } = useParams();
  const [date, setDate] = useState(new Date());
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isGraphsDropdownVisible, setGraphsDropdownVisible] = useState(false);
  const [isTimelineDropdownVisible, setTimelineDropdownVisible] = useState(false);
  const [isDayTimelineDropdownVisible, setDayTimelineDropdownVisible] = useState(false);
  const [isDateTimelineDropdownVisible, setDateTimelineDropdownVisible] = useState(false);
  const [isPrivateFileDropdownVisible, setPrivateFileDropdownVisible] = useState(false);
  const [isOnlineUserDropdownVisible, setOnlineUserDropdownVisible] = useState(false);
  const [isLatestBudgesDropdownVisible, setLatestBudgesDropdownVisible] = useState(false);


  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleUploadLiveLecture = () => {
    alert('Upload Live Lecture clicked');

  };
  const handleVideoClick = () => {
    if (onVideoClick) {
      onVideoClick();
    }
  }
  const handleTurnEditing = () => {
    if (onTurnEditing) {
      onTurnEditing();
    }
  }
  const handleDashboardClick = () => {
    if (onDashboard) {
      onDashboard();
    }
  }
  const handleSubTableClick = () => {
    if (onSubTable) {
      onSubTable();
    }
  }
 


  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleGraphsDropdown = () => {
    setGraphsDropdownVisible(!isGraphsDropdownVisible);
  };
  const toggleTimelineDropdown = () => {
    setTimelineDropdownVisible(!isTimelineDropdownVisible);
  };
  const toggleDayTimelineDropdown = () => {
    setDayTimelineDropdownVisible(!isDayTimelineDropdownVisible);
  };
  const toggleDateTimelineDropdown = () => {
    setDateTimelineDropdownVisible(!isDateTimelineDropdownVisible);
  };
  const togglePrivateFileDropdown = () => {
    setPrivateFileDropdownVisible(!isPrivateFileDropdownVisible);
  };
  const toggleOnlineUserDropdown = () => {
    setOnlineUserDropdownVisible(!isOnlineUserDropdownVisible);
  };
  const toggleLatestBudgesDropdown = () => {
    setLatestBudgesDropdownVisible(!isLatestBudgesDropdownVisible);
  };
  const uploadedVideos = [
    { id: 1, image: '../Teacher/assets/image/Corporate Training and Professional Development.jpg', title: 'Video Title 1' },
    { id: 2, image: '../Teacher/assets/image/Diversity and Inclusion Initiatives.jpg', title: 'Video Title 2' },
    { id: 3, image: '../Teacher/assets/image/FAQs and Support Documentation.jpg', title: 'Video Title 3' },
    { id: 4, image: '../Teacher/assets/image/Live Classes and Webinars.jpg', title: 'Video Title 4' },
    { id: 5, image: '../Teacher/assets/image/Educational Resources.jpg', title: 'Video Title 5' },
    { id: 6, image: './Community Engagement.jpg', title: 'Video Title 6' },
  ];

  return (
    <>
      <div className='sub-main'>
        <div className='subject-left'>
          <div className="subject-dashboard-container">
            <div className="subject-heading">
              <a onClick={handleDashboardClick}>dashboard</a>/
              <a>classname</a>/
              <a>year</a>/
              <a>division</a>/
              <a>subjectiId</a>/
              <a onClick={handleSubTableClick}>studentTable</a>
            </div>

            <div className="button-container">
              <div className="upload-button" onClick={handleUploadLiveLecture}>Create Live Lecture</div>
              <div className="upload-button" onClick={handleVideoClick}>Upload Video Lecture</div>
            </div>
            <div className="video-container">
              {uploadedVideos.map((video) => (
                <div key={video.id} className="video-con">
                  <div className="video-box">
                    <img className="video" src={video.image} alt={video.title} />
                  </div>
                  <div className="video-title">{video.title}</div>
                </div>
              ))}
            </div>
            <div className="description">
              <h3 >Description:</h3>
              <p className="para">
                In Maths, integration is a method of adding or summing up the parts to find the whole.
                It is a reverse process of differentiation, where we <br /> reduce the functions into parts.
                This method is used to find the summation under a vast scale. In Mathematics, when we cannot
                perform <br /> general addition operations, we use integration to add values on a large scale.
              </p>
            </div>

            <div className="material">Teaching Material:</div>

          </div>
          <div className="subject-details">
            <div className="basic-info">
              <div className="sub-name">
                <span className="icon-text">
                  <p>Mathematics</p>
                </span>
                <span className="pointer" onClick={toggleDropdown}>
                  <FaCog /><FaCaretDown />

                </span>
              </div>
              <div className="url">
                <a onClick={handleDashboardClick}>Dashboard</a> /
                <a >Subjects</a> /
                <a >Mathematics</a>
              </div>
            </div>
            {isDropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li><FaCogs />Edit settings</li>
                  <li onClick={handleTurnEditing}>< FaPen />Turn editing on</li>
                  <li><FaCogs />Course completion</li>
                  <li><FaFilter />Filters</li>
                  <li><FaCogs />Grandbook setup</li>
                  <li><FaRegFileArchive />Backup</li>
                  <li><FaLevelUpAlt />Restore</li>
                  <li><FaLevelUpAlt />Import</li>
                  <li><FaArrowLeft />Reset</li>
                  <li><FaCog />More...</li>
                </ul>
              </div>
            )}
            <div className="subject-view">
              <div className="annoucement">
                <h5><FcComments />Annoucements</h5>
              </div><hr></hr>
              <div className="topic-1">
                <h3>Topic 1</h3>
              </div><hr></hr>
              <div className="topic-2">
                <h3>Topic 2</h3>
              </div><hr></hr>
              <div className="topic-3">
                <h3>Topic 3</h3>
              </div><hr></hr>
              <div className="topic-4">
                <h3>Topic 4</h3>
              </div><hr></hr>
              <div className="topic-5">
                <h3>Topic 5</h3>
              </div>

            </div>
          </div>
        </div>
        <div className='sub-right'>

          <div className='graphs'>
            <p>Analytics Graphs</p>
            <span className='graphs-icons'>
              <span className='graphs-arrow'><FaArrowsAlt /></span>
              <span className='graphs-setting' onClick={toggleGraphsDropdown}><FaCog /></span>
              <span className='graphs-down'onClick={toggleGraphsDropdown}><FaCaretDown /></span>
            </span>
            {isGraphsDropdownVisible && (
              <div className="dropdown-graphs">
                <ul>
                  <li><FaCog />Configure Analytics Graphs Block</li>
                  <li>< FaRegEye />Hide Analytics Graphs Block</li>
                  
                </ul>
              </div>
            )}
          </div>

          <div className='timeline'>
            <div className='timeline-heanding'>
              <p>Timeline</p>
              <span className='timeline-icons'>
                <span className='timeline-arrow'><FaArrowsAlt /></span>
                <span className='timeline-setting' onClick={toggleTimelineDropdown}><FaCog /></span>
                <span className='timeline-down'onClick={toggleTimelineDropdown}><FaCaretDown /></span>
              </span>
              {isTimelineDropdownVisible && (
              <div className="dropdown-timeline">
                <ul>
                  <li><FaCog />Configure Timeline Block</li>
                  <li>< FaRegEye />Hide Timeline Block</li>
                  <li>< FaTrashAlt  />Delete Timeline Block</li>
                </ul>
              </div>
            )}
            
            </div>
            <div className='timeline-dates'>
              <span className='timeline-days'onClick={toggleDayTimelineDropdown}><FaHistory /><FaCaretDown /></span>
              <span className='timeline-date'onClick={toggleDateTimelineDropdown}><FaSortAmountDownAlt /><FaCaretDown /></span>
              {isDayTimelineDropdownVisible && (
              <div className="dropdown-day-timeline">
                <ul>
                  <li>All</li>
                  <li>Overdue</li>
                  <hr></hr>
                  <li>Next 7 days</li>
                  <li>Next 30 days</li>
                  <li>Next 3 months</li>
                  <li>Next 6 months</li>
                </ul>
              </div>
            )}
            {isDateTimelineDropdownVisible && (
              <div className="dropdown-date-timeline">
                <ul>
                  <li>Sort by dates</li>
                  <li>Sort by courses</li>
                </ul>
              </div>
            )}
            </div>
            <hr className='hr'></hr>
            <div className='timeline-activity'>
              <span ><FaListAlt className='list-svg' /></span>
              <span>No upcoming activities due</span>
            </div>
          </div>
          <div className='private-file'>
            <div className='private-heanding'>
              <p>Private files</p>
              <span className='private-icons'>
                <span className='private-arrow'><FaArrowsAlt /></span>
                <span className='private-setting'onClick={togglePrivateFileDropdown}><FaCog /></span>
                <span className='private-down'onClick={togglePrivateFileDropdown}><FaCaretDown /></span>
              </span>
              {isPrivateFileDropdownVisible && (
              <div className="dropdown-private-file">
                <ul>
                  <li><FaCog />Configure Private files Block</li>
                  <li>< FaRegEye />Hide Private files Block</li>
                  <li>< FaTrashAlt  />Delete Private files Block</li>
                </ul>
              </div>
            )}
            </div>
            <div >No files available</div>
            <div className='manage-file'>Manage private files...</div>
          </div>
          <div className='online-user'>
            <div className='online-heanding'>
              <p>Online users</p>
              <span className='online-icons'>
                <span className='online-arrow'><FaArrowsAlt /></span>
                <span className='online-setting'onClick={toggleOnlineUserDropdown}><FaCog /></span>
                <span className='online-down'onClick={toggleOnlineUserDropdown}><FaCaretDown /></span>
              </span>
              {isOnlineUserDropdownVisible && (
              <div className="dropdown-online-user">
                <ul>
                  <li><FaCog />Configure Online user Block</li>
                  <li>< FaRegEye />Hide Online user Block</li>
                  <li>< FaTrashAlt  />Delete Online user Block</li>
                </ul>
              </div>
            )}
            </div>
            <div className='user-list'>
              <p>8 online users(last 5 minutes)</p>

              <ul>
                <li><FaUser className='list-user' /><span>101 Shantanu Sawant</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>102 Dnyaneshwar Warkhade</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>103 User Name</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>104 User Name</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>105 User Name</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>106 User Name</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>107 User Name</span>  <FaComment className='msg' /> </li>
                <li><FaUser className='list-user' /><span>108 User Name</span>  <FaComment className='msg' /> </li>
              </ul>
            </div>
          </div>
          <div className='latest-badges'>
            <div className='badges-heanding'>
              <p>Latest badges</p>
              <span className='badges-icons'>
                <span className='badges-arrow'><FaArrowsAlt /></span>
                <span className='badges-setting'onClick={toggleLatestBudgesDropdown}><FaCog /></span>
                <span className='badges-down'onClick={toggleLatestBudgesDropdown}><FaCaretDown /></span>
              </span>
              {isLatestBudgesDropdownVisible && (
              <div className="dropdown-timeline">
                <ul>
                  <li><FaCog />Configure Latest badges Block</li>
                  <li>< FaRegEye />Hide Latest badges Block</li>
                  <li>< FaTrashAlt  />Delete Latest badges Block</li>
                </ul>
              </div>
            )}
            </div>
            <div>You have no badges to display</div>
          </div>
          <div className='calender'>
            <div className='calender-heanding'>
              <p>Calender</p>
              <span className='calender-icons'>
                <span className='calender-arrow'><FaArrowsAlt /></span>
                <span className='calender-setting'><FaCog /></span>
                <span className='calender-down'><FaCaretDown /></span>
              </span>
            </div>
            <Calendar
          onChange={handleDateChange}
          value={date}
          className='calendar-component'
        />
          </div>

          <div className='up-events'>
            <div className='events-heanding'>
              <p>Upcoming events</p>
              <span className='events-icons'>
                <span className='events-arrow'><FaArrowsAlt /></span>
                <span className='events-setting'><FaCog /></span>
                <span className='events-down'><FaCaretDown /></span>
              </span>
            </div>
            <div>There are no upcoming events</div>
            <div className='cal-event'>Go to calender...</div>
          </div>
        </div>
      </div>



    </>
  );
};

export default SubjectDashboard;
