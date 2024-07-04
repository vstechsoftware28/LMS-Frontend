import React from 'react';
import './AddSubjectForm.css'; // Import CSS file for traditional styling

const AddSubjectForm = ({ subjects, standards, divisions, teachers, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    onSubmit(formData);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Add Subject Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="label">Standard</label>
            <select className="select" name="standard">
              {standards.map((standard, index) => (
                <option key={index} value={standard}>
                  {standard}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label className="label">Division</label>
            <select className="select" name="division">
              {divisions.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>  
          <div className="form-field">
            <label className="label">Subject Name</label>
            <select className="select" name="subjectName">
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label className="label">Teacher Name</label>
            <select className="select" name="teacherName">
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </div>
          <button className="button" type="submit">Add Subject</button>
        </form>
      </div>
    </div>
  );
};

export default AddSubjectForm;
