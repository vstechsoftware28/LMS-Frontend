import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './AddSubjectForm.css'; // Ensure you have your CSS file imported

const AddSubjectForm = ({ onClose, standards, divisions, teachers }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    standard: '',
    division: '',
    subjectCode: '', // Moved subjectCode before subjectName
    subjectName: '',
    teacherName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
    onClose(); // Close form after submission
  };

  return (
    <div>
      <button type="button" className="close-button" onClick={onClose}><FaTimes /></button>
      <form onSubmit={handleSubmit}>
        <h2>Add Subject Form</h2>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="standard">Standard:</label>
          <select
            id="standard"
            name="standard"
            value={formData.standard}
            onChange={handleChange}
            required
          >
            <option value="">Select Standard</option>
            {standards.map((standard, index) => (
              <option key={index} value={standard}>{standard}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="division">Division:</label>
          <select
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
          >
            <option value="">Select Division</option>
            {divisions.map((division, index) => (
              <option key={index} value={division}>{division}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subjectCode">Subject Code:</label>
          <input
            type="text"
            id="subjectCode"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subjectName">Subject Name:</label>
          <select
            id="subjectName"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            {/* Assuming subjects are passed as props or fetched */}
            {/* Replace with actual subjects data */}
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="teacherName">Teacher Name:</label>
          <select
            id="teacherName"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            required
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher, index) => (
              <option key={index} value={teacher}>{teacher}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddSubjectForm;
