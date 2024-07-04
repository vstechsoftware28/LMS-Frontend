import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  padding: 0; /* Remove padding */
  background-color: #f9f9f9; /* Background color */
`;

const FormContainer = styled.div`
  width: 100%; /* Full width */
  max-width: 450px; /* Maximum width */
  max-height: 80vh;
  padding: 2rem;
  background-color: #fff; /* White background for form */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  left: 100px; /* Center horizontally with margin */
  overflow: auto; /* Prevent form content from spilling */
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.25rem;
  color: #333;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const Button = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  margin: 2rem auto 0;
  border: none;
  background-color: #87CEEB;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #00BFFF;
  }
`;

const AddSubjectForm = ({ subjects, standards, divisions, teachers, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    onSubmit(formData);
  };

  return (
    <FormWrapper>
      <FormContainer>
        <FormTitle>Add Subject Form</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Standard</Label>
            <Select name="standard">
              {standards.map((standard, index) => (
                <option key={index} value={standard}>
                  {standard}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField>
            <Label>Division</Label>
            <Select name="division">
              {divisions.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </Select>
          </FormField>  
          <FormField>
            <Label>Subject Name</Label>
            <Select name="subjectName">
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField>
            <Label>Teacher Name</Label>
            <Select name="teacherName">
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </Select>
          </FormField>
          <Button type="submit">Add Subject</Button>
        </form>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddSubjectForm;
