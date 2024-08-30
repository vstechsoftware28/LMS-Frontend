import React, { useState, useEffect } from "react";
import './Timetable.css'

const Timetable = () => {

    const initialTimetable = {
        "9:00 AM - 10:00 AM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "10:00 AM - 11:00 AM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "11:00 AM - 12:00 PM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "12:00 PM - 01:00 PM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "01:00 PM - 02:00 PM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "02:00 PM - 03:00 PM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
        "03:00 PM - 04:00 PM": { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" },
    };

    const [timetable, setTimetable] = useState(() => {
        const savedTimetable = localStorage.getItem('timetable');
        return savedTimetable ? JSON.parse(savedTimetable) : initialTimetable;
    });

    const handleEdit = (timeSlot, day) => {
        const newSubject = prompt("Enter the subject:");
        if (newSubject !== null && newSubject.trim() !== "") {
            const updatedTimetable = {
                ...timetable,
                [timeSlot]: {
                    ...timetable[timeSlot],
                    [day]: newSubject
                }
            };
            setTimetable(updatedTimetable);
            localStorage.setItem('timetable', JSON.stringify(updatedTimetable));
        }
        else if (newSubject !== null) {
            alert("Please fill in a valid input.");
        }
    };

    // const addTimeSlot = () => {
    //     let newTimeSlot = "";


    //     while (true) {
    //         newTimeSlot = prompt("Enter the new time slot (e.g., '04:00 PM - 05:00 PM'):");

    //         if (newTimeSlot === null) {
    //             return;
    //         }

    //         if (newTimeSlot.trim() === "") {
    //             alert("Please fill in a valid time slot.");
    //         } else if (timetable[newTimeSlot]) {
    //             alert("Time slot already exists or is invalid.");
    //         } else {
    //             break;
    //         }
    //     }

    //     const position = prompt("Enter the position where you want to add the new time slot (e.g., 1 for first position):");

    //     if (!position) {
    //         return;
    //     }

    //     const positionIndex = parseInt(position, 10) - 1;
    //     const timeSlots = Object.keys(timetable);

    //     if (positionIndex >= 0 && positionIndex <= timeSlots.length) {
    //         const updatedTimetable = {};
    //         timeSlots.forEach((slot, index) => {
    //             if (index === positionIndex) {
    //                 updatedTimetable[newTimeSlot] = { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" };
    //             }
    //             updatedTimetable[slot] = timetable[slot];
    //         });
    //         if (positionIndex >= timeSlots.length) {
    //             updatedTimetable[newTimeSlot] = { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" };
    //         }
    //         setTimetable(updatedTimetable);
    //         localStorage.setItem('timetable', JSON.stringify(updatedTimetable));
    //     } else {
    //         alert("Invalid position.");
    //     }
    // };

    const addTimeSlot = () => {
        let newTimeSlot = "";
    
        while (true) {
            newTimeSlot = prompt("Enter the new time slot (e.g., '04:00 PM - 05:00 PM'):");
    
            if (newTimeSlot === null) {
                return;
            }
    
            if (newTimeSlot.trim() === "") {
                alert("Please fill in a valid time slot.");
            } else if (timetable[newTimeSlot]) {
                alert("Time slot already exists.");
            } else if (isOverlapping(newTimeSlot)) {
                alert("Time slot overlaps with an existing time slot.");
            } else {
                break;
            }
        }
    
        const position = prompt("Enter the position where you want to add the new time slot (e.g., 1 for first position):");
    
        if (!position) {
            return;
        }
    
        const positionIndex = parseInt(position, 10) - 1;
        const timeSlots = Object.keys(timetable);
    
        if (positionIndex >= 0 && positionIndex <= timeSlots.length) {
            const updatedTimetable = {};
            timeSlots.forEach((slot, index) => {
                if (index === positionIndex) {
                    updatedTimetable[newTimeSlot] = { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" };
                }
                updatedTimetable[slot] = timetable[slot];
            });
            if (positionIndex >= timeSlots.length) {
                updatedTimetable[newTimeSlot] = { Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "" };
            }
            setTimetable(updatedTimetable);
            localStorage.setItem('timetable', JSON.stringify(updatedTimetable));
        } else {
            alert("Invalid position.");
        }
    };
    
    const isOverlapping = (newTimeSlot) => {
        const [newStartTime, newEndTime] = newTimeSlot.split(" - ").map(convertTo24Hour);
        
        for (const existingTimeSlot of Object.keys(timetable)) {
            const [existingStartTime, existingEndTime] = existingTimeSlot.split(" - ").map(convertTo24Hour);
    
            if (
                (newStartTime >= existingStartTime && newStartTime < existingEndTime) ||
                (newEndTime > existingStartTime && newEndTime <= existingEndTime) ||
                (newStartTime <= existingStartTime && newEndTime >= existingEndTime)
            ) {
                return true;
            }
        }
        return false;
    };
    
    const convertTo24Hour = (time) => {
        const [hours, minutes] = time.split(/:| /);
        const isPM = time.includes("PM");
    
        let hour = parseInt(hours, 10);
        if (isPM && hour !== 12) {
            hour += 12;
        } else if (!isPM && hour === 12) {
            hour = 0;
        }
    
        return hour * 60 + parseInt(minutes, 10); 
    };
    

    const removeTimeSlot = (timeSlot) => {
        if (window.confirm("Are you sure you want to remove this row?")) {
            const updatedTimetable = { ...timetable };
            delete updatedTimetable[timeSlot];
            setTimetable(updatedTimetable);
            localStorage.setItem('timetable', JSON.stringify(updatedTimetable));
        }

    };

    return (
        <>

            <table className="timetable">
                <thead>
                    <tr>
                        <th className="table-th">Time</th>
                        <th className="table-th">Monday</th>
                        <th className="table-th">Tuesday</th>
                        <th className="table-th">Wednesday</th>
                        <th className="table-th">Thursday</th>
                        <th className="table-th">Friday</th>
                        <th className="table-th">Saturday</th>
                        <th className="table-th">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(timetable).map(timeSlot => (
                        <tr key={timeSlot}>
                            <td className="table-td">{timeSlot}</td>
                            {Object.keys(timetable[timeSlot]).map(day => (
                                <td className="table-td" key={day} onClick={() => handleEdit(timeSlot, day)}>
                                    {timetable[timeSlot][day] || "Edit"}
                                </td>
                            ))}
                            <td className="table-td">
                                <button className="remove-btn" onClick={() => removeTimeSlot(timeSlot)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-btn" onClick={addTimeSlot}>Add Time Slot</button>
        </>
    );
}

export default Timetable;
