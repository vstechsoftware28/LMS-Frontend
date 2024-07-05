import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 900px;
    margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  overflow: auto;
  height: 1000px; /* Increased height */
`;

const CalendarHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const DatePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 180px;
`;

const SearchIcon = styled(FaCalendarAlt)`
  color: #ccc;
  margin-right: 10px;
`;

const StyledBigCalendar = styled(BigCalendar)`
  .rbc-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }

  .rbc-toolbar-label {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    flex-grow: 1;
    color: white;
    background-color: #3498db;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .rbc-btn-group {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
  }

  .rbc-btn-today,
  .rbc-btn-back,
  .rbc-btn-next {
    padding: 5px 8px;
    font-size: 12px;
    background-color: #87ceeb;
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
  }

  .rbc-header {
    background-color: #87ceeb;
    height: 40px;
    color: white;
    font-weight: bold;
  }

  .rbc-header + .rbc-header {
    border-left: 1px solid #ccc;
  }

  .rbc-day-bg {
    background-color: white;
  }

  .rbc-date-cell {
    background-color: transparent;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding-top: 5px;
  }

  .rbc-off-range-bg {
    background-color: #f0f0f0; /* Change the background color of other month date cells */
  }

  .rbc-off-range {
    color: #bbb; /* Change the text color of other month date cells */
  }

  .rbc-today {
    background-color: #aedcf7;
    color: #333;
  }

  .rbc-today + .rbc-date-cell {
    border-left: 1px solid #ccc;
  }

  .rbc-today + .rbc-day-bg {
    border-left: 1px solid #ccc;
  }

  .rbc-event {
    background-color: #3498db;
    color: #fff;
    border-radius: 3px;
    padding: 2px 5px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .rbc-selected {
    background-color: #3498db;
    color: #fff;
  }

  .rbc-selected:hover {
    background-color: #217dbb;
  }

  height: 100%;
`;

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
    <CalendarContainer>
      <CalendarHeader>Calendar</CalendarHeader>
      <DatePickerContainer>
        <SearchIcon />
        <StyledDatePicker
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
      </DatePickerContainer>
      <StyledBigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={selectedDate}
        onNavigate={handleDateChange}
      />
    </CalendarContainer>
  );
};

export default Calendar;
