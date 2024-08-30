
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SubjectDashboard.css';
import { FaCaretDown, FaUser, FaRegEye, FaRegEyeSlash, FaTrashAlt, FaComment, FaListAlt, FaCog, FaCogs, FaPen, FaFilter, FaRegFileArchive, FaLevelUpAlt, FaHistory, FaSortAmountDownAlt, FaArrowLeft, FaArrowsAlt, } from 'react-icons/fa';
import { FcComments } from "react-icons/fc";
import { BiTime } from "react-icons/bi";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SubjectDashboard = ({ onVideoClick, onTurnEditing, onDashboard, onSubTable, onCalender, onConfirm, onUpdateClick}) => {
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
  const [isCalenderDropdownVisible, setCalenderDropdownVisible] = useState(false);
  const [isUpcomingEventsDropdownVisible, setUpcomingEventsDropdownVisible] = useState(false);


  const [isGraphsVisible, setGraphsVisible] = useState(true);
  const [isTimelineVisible, setTimelineVisible] = useState(true);
  const [isPrivateFilesVisible, setPrivateFilesVisible] = useState(true);
  const [isOnlineUserVisible, setOnlineUserVisible] = useState(true);
  const [isLatestBudgesVisible, setLatestBudgesVisible] = useState(true);
  const [isCalenderVisible, setCalenderVisible] = useState(true);
  const [isUpcomingEventsVisible, setUpcomingEventsVisible] = useState(true);

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
  const handleUpdateClick = () => {
    if (onUpdateClick) {
      onUpdateClick();
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

  const handleCalenderClick = () => {
    if (onCalender) {
      onCalender();
    }
  }
  const handleConfirmClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    
  }

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const toggleGraphsDropdown = () => setGraphsDropdownVisible(!isGraphsDropdownVisible);
  const toggleTimelineDropdown = () => setTimelineDropdownVisible(!isTimelineDropdownVisible);
  const toggleDayTimelineDropdown = () => setDayTimelineDropdownVisible(!isDayTimelineDropdownVisible);
  const toggleDateTimelineDropdown = () => setDateTimelineDropdownVisible(!isDateTimelineDropdownVisible);
  const togglePrivateFileDropdown = () => setPrivateFileDropdownVisible(!isPrivateFileDropdownVisible);
  const toggleOnlineUserDropdown = () => setOnlineUserDropdownVisible(!isOnlineUserDropdownVisible);
  const toggleLatestBudgesDropdown = () => setLatestBudgesDropdownVisible(!isLatestBudgesDropdownVisible);
  const toggleCalenderDropdown = () => setCalenderDropdownVisible(!isCalenderDropdownVisible);
  const toggleUpcomingEventsDropdown = () => setUpcomingEventsDropdownVisible(!isUpcomingEventsDropdownVisible);


  const toggleGraphsVisibility = () => {
    setGraphsVisible(!isGraphsVisible);
    setGraphsDropdownVisible(false);
  };
  const toggleTimelineVisibility = () => {
    setTimelineVisible(!isTimelineVisible);
    setTimelineDropdownVisible(false);
  };
  const togglePrivateFilesVisibility = () => {
    setPrivateFilesVisible(!isPrivateFilesVisible);
    setPrivateFileDropdownVisible(false);
  };
  const toggleOnlineUserVisibility = () => {
    setOnlineUserVisible(!isOnlineUserVisible);
    setOnlineUserDropdownVisible(false);
  };
  const toggleLatestBudgesVisibility = () => {
    setLatestBudgesVisible(!isLatestBudgesVisible);
    setLatestBudgesDropdownVisible(false);
  };
  const toggleCalenderVisibility = () => {
    setCalenderVisible(!isCalenderVisible);
    setCalenderDropdownVisible(false);
  };
  const toggleUpcomingEventsVisibility = () => {
    setUpcomingEventsVisible(!isUpcomingEventsVisible);
    setUpcomingEventsDropdownVisible(false);
  };


    
  const [videos, setVideos] = useState([
    { id: 1, image: '../Teacher/assets/image/Corporate Training and Professional Development.jpg', title: 'Video Title 1' },
    { id: 2, image: '../Teacher/assets/image/Diversity and Inclusion Initiatives.jpg', title: 'Video Title 2' },
    { id: 3, image: '../Teacher/assets/image/FAQs and Support Documentation.jpg', title: 'Video Title 3' },
    { id: 4, image: '../Teacher/assets/image/Live Classes and Webinars.jpg', title: 'Video Title 4' },
    { id: 5, image: '../Teacher/assets/image/Educational Resources.jpg', title: 'Video Title 5' },
    { id: 6, image: './Community Engagement.jpg', title: 'Video Title 6' },
  ]);

  const handleDeleteClick = (id) => {
    const updatedVideos = videos.filter(video => video.id !== id);
    setVideos(updatedVideos);
  };

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
              {videos.map((video) => (
                <div key={video.id} className="video-con">
                  <div className="video-box">
                    <img className="video" src={video.image} alt={video.title} />
                  </div>
                  <div className="video-info">
                    <div className="video-title">{video.title}</div>
                    <div className="video-buttons">
                      <button className="edit-btn" onClick={handleUpdateClick}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteClick(video.id)}>Delete</button>
                    </div>
                  </div>
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
              <span className='graphs-setting' onClick={toggleGraphsDropdown}><FaCog />
                <span className='tooltip'>Action Menu</span>
              </span>
              <span className='graphs-down' onClick={toggleGraphsDropdown}><FaCaretDown /></span>

            </span>
            {isGraphsDropdownVisible && (
              <div className="dropdown-graphs">
                <ul>
                  <li><FaCog />Configure Analytics Graphs Block</li>
                  <li onClick={toggleGraphsVisibility}>
                    {isGraphsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    {isGraphsVisible ? 'Hide Analytics Graphs Block' : 'Show Analytics Graphs Block'}
                  </li>
                </ul>
              </div>
            )}
            {isGraphsVisible && (
              <>
                <div></div>
              </>
            )}
          </div>
          <div className='timeline'>
            <div className='timeline-heanding'>
              <p>Timeline</p>
              <span className='timeline-icons'>
                <span className='timeline-arrow'><FaArrowsAlt /></span>
                <span className='timeline-setting' onClick={toggleTimelineDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='timeline-down' onClick={toggleTimelineDropdown}><FaCaretDown /></span>
              </span>
              {isTimelineDropdownVisible && (
                <div className="dropdown-timeline">
                  <ul>
                    <li><FaCog />Configure Timeline Block</li>
                    <li onClick={toggleTimelineVisibility}>
                      {isTimelineVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isTimelineVisible ? 'Hide Timeline Block' : 'Show Timeline Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Timeline Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isTimelineVisible && (
              <>
                <div className='timeline-dates'>
                  <span className='timeline-days' onClick={toggleDayTimelineDropdown}><BiTime /><FaCaretDown /></span>
                  <span className='timeline-date' onClick={toggleDateTimelineDropdown}><FaSortAmountDownAlt /><FaCaretDown /></span>
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
              </>
            )}

          </div>
          <div className='private-file'>
            <div className='private-heanding'>
              <p>Private files</p>
              <span className='private-icons'>
                <span className='private-arrow'><FaArrowsAlt /></span>
                <span className='private-setting' onClick={togglePrivateFileDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='private-down' onClick={togglePrivateFileDropdown}><FaCaretDown /></span>
              </span>
              {isPrivateFileDropdownVisible && (
                <div className="dropdown-private-file">
                  <ul>
                    <li><FaCog />Configure Private files Block</li>
                    <li onClick={togglePrivateFilesVisibility}>
                      {isPrivateFilesVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isPrivateFilesVisible ? 'Hide Private files Block' : 'Show Private files Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Private files Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isPrivateFilesVisible && (
              <>
                <div >No files available</div>
                <div className='manage-file'>Manage private files...</div>
              </>
            )}

          </div>
          <div className='online-user'>
            <div className='online-heanding'>
              <p>Online users</p>
              <span className='online-icons'>
                <span className='online-arrow'><FaArrowsAlt /></span>
                <span className='online-setting' onClick={toggleOnlineUserDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='online-down' onClick={toggleOnlineUserDropdown}><FaCaretDown /></span>
              </span>
              {isOnlineUserDropdownVisible && (
                <div className="dropdown-online-user">
                  <ul>
                    <li><FaCog />Configure Online user Block</li>
                    <li onClick={toggleOnlineUserVisibility}>
                      {isOnlineUserVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isOnlineUserVisible ? 'Hide Online user Block' : 'Show Online user Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Online user Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isOnlineUserVisible && (
              <>
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
              </>
            )}

          </div>
          <div className='latest-badges'>
            <div className='badges-heanding'>
              <p>Latest badges</p>
              <span className='badges-icons'>
                <span className='badges-arrow'><FaArrowsAlt /></span>
                <span className='badges-setting' onClick={toggleLatestBudgesDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='badges-down' onClick={toggleLatestBudgesDropdown}><FaCaretDown /></span>
              </span>
              {isLatestBudgesDropdownVisible && (
                <div className="dropdown-badges">
                  <ul>
                    <li><FaCog />Configure Latest badges Block</li>
                    <li onClick={toggleLatestBudgesVisibility}>
                      {isLatestBudgesVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isLatestBudgesVisible ? 'Hide Latest badges Block' : 'Show Latest badges Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Latest badges Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isLatestBudgesVisible && (
              <>
                <div>You have no badges to display</div>
              </>
            )}

          </div>
          <div className='calender'>
            <div className='calender-heanding'>
              <p>Calender</p>
              <span className='calender-icons'>
                <span className='calender-arrow'><FaArrowsAlt /></span>
                <span className='calender-setting' onClick={toggleCalenderDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='calender-down' onClick={toggleCalenderDropdown}><FaCaretDown /></span>
              </span>
              {isCalenderDropdownVisible && (
                <div className="dropdown-calender">
                  <ul>
                    <li><FaCog />Configure Calender Block</li>
                    <li onClick={toggleCalenderVisibility}>
                      {isCalenderVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isCalenderVisible ? 'Hide Calender Block' : 'Show Calender Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Calender Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isCalenderVisible && (
              <>
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  className='calendar-component'
                />
              </>
            )}

          </div>
          <div className='up-events'>
            <div className='events-heanding'>
              <p>Upcoming events</p>
              <span className='events-icons'>
                <span className='events-arrow'><FaArrowsAlt /></span>
                <span className='events-setting' onClick={toggleUpcomingEventsDropdown}><FaCog />
                  <span className='tooltip'>Action Menu</span>
                </span>
                <span className='events-down' onClick={toggleUpcomingEventsDropdown}><FaCaretDown /></span>
              </span>
              {isUpcomingEventsDropdownVisible && (
                <div className="dropdown-events">
                  <ul>
                    <li><FaCog />Configure Upcoming events Block</li>
                    <li onClick={toggleUpcomingEventsVisibility}>
                      {isUpcomingEventsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      {isUpcomingEventsVisible ? 'Hide Upcoming events Block' : 'Show Upcoming events Block'}
                    </li>
                    <li onClick={handleConfirmClick}>< FaTrashAlt />Delete Upcoming events Block</li>
                  </ul>
                </div>
              )}
            </div>
            {isUpcomingEventsVisible && (
              <>
                <div>There are no upcoming events</div>
                <div className='cal-event' onClick={handleCalenderClick}>Go to calender...</div>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectDashboard;