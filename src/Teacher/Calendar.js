import React, { useState, useEffect, useRef } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Calendar from 'react-calendar';
import { FaWindowClose, FaCalendarAlt, FaRegClock, FaUserGraduate, FaAlignLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Calendar.css';
import Modal from './Modal';
import Swal from 'sweetalert2';

const localizer = momentLocalizer(moment);

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isFirstCalendarVisible, setFirstCalendarVisible] = useState(false);
  const [isSecondCalendarVisible, setSecondCalendarVisible] = useState(false);
  const [durationDate, setDurationDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);
  const [editingEventIndex, setEditingEventIndex] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('withoutduration');
  const [repeat, setRepeat] = useState(false);
  const [repeatWeekly, setRepeatWeekly] = useState('');

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    type: 'User',
    course: '',
    description: '',
    location: '',
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });



  const dateRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const dateDurRef = useRef(null);
  const monthDurRef = useRef(null);
  const yearDurRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const toggleFirstCalendar = () => setFirstCalendarVisible(!isFirstCalendarVisible);
  const toggleSecondCalendar = () => {
    if (selectedDuration === 'until') {
      setSecondCalendarVisible(!isSecondCalendarVisible);
    }
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setNewEvent(prevState => ({ ...prevState, start: date }));
  };

  const handleDurationDateChange = (date) => {
    setDurationDate(date);
  };

  const handleNewEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({ ...prevState, [name]: value }));
    if (name === 'type') {
      setSelectedEventType(value);
      setNewEvent(prevState => ({
        ...prevState,
        course: value === 'Course' ? prevState.course : '',
      }));
    }
  };


  const handleNewEventSubmit = (e) => {
    e.preventDefault();
  
    let eventsToSave = [];
    const baseStart = new Date(selectedDate.setHours(newEvent.hour, newEvent.minute));
    let baseEnd = new Date(baseStart);
    
    if (selectedDuration === 'duration-minutes') {
      const durationInMinutes = parseInt(e.target.querySelector('input[type="number"]').value, 10);
      baseEnd = new Date(baseStart.getTime() + durationInMinutes * 60 * 1000);
    } else {
      baseEnd = new Date(selectedDate.setHours(newEvent.hour, newEvent.minute));
    }
  
    const baseEvent = {
      ...newEvent,
      start: baseStart,
      end: baseEnd,
      seriesId: `series-${Date.now()}`, // Assign a unique seriesId
    };
  
    if (!baseEvent.title || !baseEvent.start || !baseEvent.end) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (selectedDuration === 'until') {
      const endDate = new Date(durationDate.setHours(newEvent.hour, newEvent.minute));
      if (endDate <= baseEvent.start) {
        alert('End date must be after the start date.');
        return;
      }
  
      let currentDate = new Date(baseEvent.start);
      while (currentDate <= endDate) {
        eventsToSave.push({
          ...baseEvent,
          start: new Date(currentDate),
          end: new Date(currentDate),
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (repeat && repeatWeekly) {
      const repeatCount = parseInt(repeatWeekly, 10);
      for (let i = 0; i < repeatCount; i++) {
        eventsToSave.push({
          ...baseEvent,
          start: new Date(baseEvent.start.getTime() + i * 7 * 24 * 60 * 60 * 1000),
          end: new Date(baseEvent.end.getTime() + i * 7 * 24 * 60 * 60 * 1000),
        });
      }
    } else {
      eventsToSave.push(baseEvent);
    }
  
    if (editingEventIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editingEventIndex] = baseEvent;
      setEvents(updatedEvents);
      setEditingEventIndex(null);
    } else {
      setEvents([...events, ...eventsToSave]);
    }
  
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(),
      type: '',
      course: '',
      description: '',
      location: '',
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
    });
  
    setRepeat(false);
    setRepeatWeekly('');
  
    setIsModalOpen(false);
  };
  
  
  



  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEventIndex(null);
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate(prevDate => {
      const newDate = new Date(prevDate);
      if (name === 'date') {
        newDate.setDate(parseInt(value));
      } else if (name === 'month') {
        newDate.setMonth(new Date(Date.parse(value + " 1, 2000")).getMonth());
      } else if (name === 'year') {
        newDate.setFullYear(parseInt(value));
      } else if (name === 'hour') {
        newDate.setHours(parseInt(value));
        setNewEvent(prevState => ({ ...prevState, hour: parseInt(value) }));
      } else if (name === 'minute') {
        newDate.setMinutes(parseInt(value));
        setNewEvent(prevState => ({ ...prevState, minute: parseInt(value) }));
      }
      setNewEvent(prevState => ({ ...prevState, start: newDate }));
      return newDate;
    });
  };
  useEffect(() => {
    if (dateRef.current && monthRef.current && yearRef.current) {
      const date = selectedDate.getDate();
      const month = selectedDate.toLocaleString('default', { month: 'long' });
      const year = selectedDate.getFullYear();

      dateRef.current.value = date;
      monthRef.current.value = month;
      yearRef.current.value = year;
    }
  }, [selectedDate]);

  useEffect(() => {
    if (dateDurRef.current && monthDurRef.current && yearDurRef.current) {
      const date = durationDate.getDate();
      const month = durationDate.toLocaleString('default', { month: 'long' });
      const year = durationDate.getFullYear();

      dateDurRef.current.value = date;
      monthDurRef.current.value = month;
      yearDurRef.current.value = year;
    }
  }, [durationDate]);
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.start || !selectedEvent.end) {
      console.error('Selected event is missing required fields:', selectedEvent);
    }
  }, [selectedEvent]);


  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsEventDetailsOpen(true);
  };

  const handleEditEvent = () => {
    setIsEventDetailsOpen(false);
    setIsModalOpen(true);
    setEditingEventIndex(events.indexOf(selectedEvent));
    setNewEvent({
      title: selectedEvent.title || '',
      start: selectedEvent.start || new Date(),
      end: selectedEvent.end || new Date(),
      type: selectedEvent.type || 'User',
      course: selectedEvent.course || '',
      description: selectedEvent.description || '',
      location: selectedEvent.location || '',
      hour: selectedEvent.start.getHours() || new Date().getHours(),
      minute: selectedEvent.start.getMinutes() || new Date().getMinutes(),
    });
    setSelectedEventType(selectedEvent.type || '');
  };

  const handleDeleteEvent = async () => {
    const result = await Swal.fire({
      title: `Are you sure to delete  "${selectedEvent.title}" event ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete This Event',
      cancelButtonText: 'Cancel',
      showDenyButton: true,
      denyButtonText: 'Delete All Events',
    });
  
    if (result.isConfirmed) {
      setEvents(events.filter(e => e !== selectedEvent));
      setIsEventDetailsOpen(false);
    } else if (result.isDenied) {
      // Delete all events in the series
      setEvents(events.filter(e => e.seriesId !== selectedEvent.seriesId));
      setIsEventDetailsOpen(false);
    }
  };
  
  
  // const handleDeleteEvent = () => {
  //   const confirmation = window.confirm(`Are you sure you want to delete "${selectedEvent.title}" event ?`);
  
  //   if (confirmation) {
  //     setEvents(events.filter(e => e !== selectedEvent));
  //     setIsEventDetailsOpen(false);
  //   }
  // };
  // const handleDeleteEvent = () => {
  //   setEvents(events.filter(e => e !== selectedEvent));
  //   setIsEventDetailsOpen(false);
  // };
  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };
  const handleRepeatChange = (e) => {
    setRepeat(e.target.checked);
    if (!e.target.checked) {
      setRepeatWeekly('');
    }
  };

  const handleRepeatWeeklyChange = (e) => {
    setRepeatWeekly(e.target.value);
  };
  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Calendar</h2>

      <div className="toolbar">
        <button className="new-event-button" onClick={() => setIsModalOpen(true)}>New Event</button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={selectedDate}
        onNavigate={handleDateChange}
        onSelectEvent={handleEventClick}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='form-heading'>
          <h2>New Event</h2>
          <button type="button" className="cancel-button-modal" onClick={() => setIsModalOpen(false)}><FaWindowClose /></button>
        </div>
       
        <form className="modal-form" onSubmit={handleNewEventSubmit}>
          <div className="form-group-modal">
            <label>Event Title:</label>
            <input type="text" name="title" value={newEvent.title} onChange={handleNewEventChange} required />
          </div>
          <div className="form-group-modal">
            <label>Date:</label>
            <div className='date-cal'>
              <select className='date' name='date' value={newEvent.start.getDate()} ref={dateRef} onChange={handleDropdownChange}>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select className='month' name='month' value={moment(newEvent.start).format('MMMM')} ref={monthRef} onChange={handleDropdownChange}>
                {moment.months().map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select className='year' name='year' value={newEvent.start.getFullYear()} ref={yearRef} onChange={handleDropdownChange}>
                {Array.from({ length: 75 }, (_, i) => 2027 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select className="hour" name="hour" value={newEvent.start.getHours()} onChange={handleDropdownChange}>
                {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                  <option key={hour} value={hour}>{hour}</option>
                ))}
              </select>
              <select className="minute" name="minute" value={newEvent.start.getMinutes()} onChange={handleDropdownChange}>
                {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                  <option key={minute} value={minute}>{minute}</option>
                ))}
              </select>

              <FaCalendarAlt className='modal-calendar' onClick={toggleFirstCalendar} />
              {isFirstCalendarVisible && (
                <Calendar onChange={handleDateChange} value={newEvent.start} className='calendar-modal' />
              )}
            </div>

            <div>
              {isSecondCalendarVisible && (
                <Calendar onChange={handleDurationDateChange} value={durationDate} className='calendar-modal-1' />
              )}
            </div>
          </div>

          <div className="form-group-modal">
            <label>Type of Event:</label>
            <select name="type" value={newEvent.type} onChange={handleNewEventChange} required>
              <option value="User">User</option>
              <option value="Group">Group</option>
              <option value="Course">Course</option>
            </select>
          </div>
          {selectedEventType === 'Course' && (
            <div className="form-group-modal">
              <label>Courses:</label>
              <select name="course" value={newEvent.course} onChange={handleNewEventChange} required>
                <option value="">Select Course</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Mathematics">Mathematics</option>
                <option value="History">History</option>
                <option value="Social Science">Social Science</option>
              </select>
            </div>
          )}

          <a className='anchor-show' onClick={toggleDropdown}>
            {isDropdownVisible ? 'Show less...' : 'Show more...'}
          </a>
          {isDropdownVisible && (
            <div>
              <div className="form-group-modal">
                <label>Description:</label>
                <textarea
                  name="description" title='description' value={newEvent.description}
                  onChange={handleNewEventChange} />
              </div>
              <div className="form-group-modal">
                <label>Location:</label>
                <input type='text' name="location" title='location' value={newEvent.location}
                  onChange={handleNewEventChange} />
              </div>
              <div className="form-group-modal">
                <label>Duration:</label>
                <div className='duration'>
                  <div>
                    <input type='radio' name='duration' value='withoutduration' onChange={handleDurationChange} defaultChecked />
                    <label>Without Duration</label>
                  </div>
                  <div>
                    <input type='radio' name='duration' value='until' onChange={handleDurationChange} />
                    <label>Until</label>
                  </div>
                  <div className='until-div'>
                  <select className='date-dur' value={durationDate.getDate()} disabled={selectedDuration !== 'until'} onChange={(e) => setDurationDate(prev => new Date(prev.setDate(parseInt(e.target.value))))}>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select className='month-dur' value={moment(durationDate).format('MMMM')} disabled={selectedDuration !== 'until'} onChange={(e) => setDurationDate(prev => new Date(prev.setMonth(moment(e.target.value, 'MMMM').month())))}>
              {moment.months().map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select className='year-dur' value={durationDate.getFullYear()} disabled={selectedDuration !== 'until'} onChange={(e) => setDurationDate(prev => new Date(prev.setFullYear(parseInt(e.target.value))))}>
              {Array.from({ length: 11 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select value={durationDate.getHours()} disabled={selectedDuration !== 'until'} onChange={(e) => setDurationDate(prev => new Date(prev.setHours(parseInt(e.target.value))))}>
              {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                <option key={hour} value={hour}>{hour}</option>
              ))}
            </select>
            <select value={durationDate.getMinutes()} disabled={selectedDuration !== 'until'} onChange={(e) => setDurationDate(prev => new Date(prev.setMinutes(parseInt(e.target.value))))}>
              {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                <option key={minute} value={minute}>{minute}</option>
              ))}
            </select>
                    <FaCalendarAlt className='modal-calendar' onClick={toggleSecondCalendar} disabled={selectedDuration !== 'until'} />
                  </div>

                  <div>
                    <input type='radio' name='duration' value='duration-minutes' onChange={handleDurationChange} />
                    <label>Duration in minutes</label>
                  </div>
                  <div>
                    <input type='number' disabled={selectedDuration !== 'duration-minutes'} />
                  </div>

                  <div>
                    <input type='checkbox' checked={repeat} onChange={handleRepeatChange} />
                    <label>Repeat this event</label>
                  </div>
                </div>
              </div>
              <div className="form-group-modal">
                <label>Repeat weekly, creating altogether:</label>
                <input type='number' value={repeatWeekly} onChange={handleRepeatWeeklyChange} disabled={!repeat} ></input>
              </div>
            </div>
          )}

          <button type="submit" className="submit-button-modal">Save</button>
        </form>
      </Modal>
      <Modal isOpen={isEventDetailsOpen} onClose={() => setIsEventDetailsOpen(false)}>
        <div className='form-heading'>
          <button type="button" className="cancel-button-modal" onClick={() => setIsEventDetailsOpen(false)}>
            <FaWindowClose />
          </button>
        </div>
        <div className="event-details">
          {selectedEvent && (
            <>
              <p><strong>{selectedEvent.title}</strong></p>
              <p><strong><FaRegClock /></strong> {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm A')}</p>
              {/* {Math.ceil((new Date(selectedEvent.end) - new Date(selectedEvent.start)) / (1000 * 60))} */}
              <p><strong><FaCalendarAlt /></strong> {selectedEvent.type}</p>
              {selectedEvent.type === 'Course' && (
                <p><strong><FaUserGraduate /></strong> {selectedEvent.course}</p>
              )}
              <p><strong><FaAlignLeft /></strong> {selectedEvent.description}</p>
              <p><strong><FaLocationDot /></strong> {selectedEvent.location}</p>
              <button type="button" onClick={handleDeleteEvent} className="delete-button">Delete</button>
              <button type="button" onClick={handleEditEvent} className="edit-button">Edit</button>
            </>
          )}
        </div>
      </Modal>


    </div>
  );
};

export default Calender;