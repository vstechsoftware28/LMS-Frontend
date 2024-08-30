import React, { useState } from "react";
import './StudentTimetable.css';

const StudentTimetable = () => {
    const initialTimetable = {
        "9:00 AM - 10:00 AM": { Monday: "Math", Tuesday: "Math", Wednesday: "Math", Thursday: "Math", Friday: "Math", Saturday: "Math" },
        "10:00 AM - 11:00 AM": { Monday: "Science", Tuesday: "Science", Wednesday: "Science", Thursday: "Science", Friday: "Science", Saturday: "Science" },
        "11:00 AM - 12:00 PM": { Monday: "Physics", Tuesday: "Chemistry", Wednesday: "Math", Thursday: "Computer Science", Friday: "Music", Saturday: "Science" },
        "12:00 PM - 01:00 PM": { Monday: "Lunch Break", Tuesday: "Lunch Break", Wednesday: "Lunch Break", Thursday: "Lunch Break", Friday: "Lunch Break", Saturday: "Half Day" },
        "01:00 PM - 02:00 PM": { Monday: "Science", Tuesday: "Science", Wednesday: "Science", Thursday: "Science", Friday: "Science", Saturday: "Science" },
        "02:00 PM - 03:00 PM": { Monday: "Physics", Tuesday: "Chemistry", Wednesday: "Math", Thursday: "Computer Science", Friday: "Music", Saturday: "Science" },

    };

    const [timetable, setTimetable] = useState(initialTimetable);

    return (
        <>
            <table className="stud-timetable">
                <thead>
                    <tr>
                        <th className="stud-timetable-th">Time</th>
                        <th className="stud-timetable-th">Monday</th>
                        <th className="stud-timetable-th">Tuesday</th>
                        <th className="stud-timetable-th">Wednesday</th>
                        <th className="stud-timetable-th">Thursday</th>
                        <th className="stud-timetable-th">Friday</th>
                        <th className="stud-timetable-th">Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(timetable).map(timeSlot => (
                        <tr key={timeSlot}>
                            <td className="stud-timetable-td">{timeSlot}</td>
                            {Object.keys(timetable[timeSlot]).map(day => (
                                <td className="stud-timetable-td" key={day}>
                                    {timetable[timeSlot][day] || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentTimetable;
