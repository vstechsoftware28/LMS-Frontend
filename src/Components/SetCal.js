import React, { useState } from "react";
import Calendar from "react-calendar";
import './SetCal.css';

const SetCal = () => {
    const [date, setDate] = useState(new Date());
    const onChange = (date) => {
        setDate(date);
    }
    return(
        <>
        <div className="cal">
            <h1>Calender</h1>
            <Calendar onChange={onChange} value={date}/>
            <p>Selected Date: {date.toDateString()}</p>
        </div>
        </>
    )
}
export default SetCal;