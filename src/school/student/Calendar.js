import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './Calendar.css'; // Import CSS file for traditional styling

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Meeting',
    start: new Date(2024, 5, 25, 10, 0),
    end: new Date(2024, 5, 25, 12, 0)
  },
  {
    id: 2,
    title: 'Presentation',
    start: new Date(2024, 5, 28, 13, 0),
    end: new Date(2024, 5, 28, 15, 0)
  },
  {
    id: 3,
    title: 'Conference',
    start: new Date(2024, 6, 5, 9, 0),
    end: new Date(2024, 6, 5, 17, 0)
  }
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Calendar</h2>
      <div className="date-picker-container">
        <FaCalendarAlt className="search-icon" />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          popperProps={{
            positionFixed: true,
            style: { zIndex: 3 },
          }}
          popperPlacement="top"
          popperModifiers={{
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: 'viewport'
            },
            offset: {
              enabled: true,
              offset: '0, 10'
            },
          }}
        />
      </div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={selectedDate}
        onNavigate={handleDateChange}
      />
    </div>
  );
};

export default Calendar;
