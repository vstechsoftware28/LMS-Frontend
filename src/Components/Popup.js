import React, { useState } from "react";
import './Popup.css';
import axios from "axios";

const Popup = () => {
    const [formData, setFormData] = useState({
        text: '',
        studentStd: '',
        studentDiv: '',
        studentCheckbox: false,
        classTeacherCheckbox: false,
        teacherCheckbox: false,
        principalCheckbox: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value  });
        
        if (errors[name]) {
            setErrors({  ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.text) {
            tempErrors["text"] = "This field is required.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         console.log(formData);
    //         alert('Form Submitted successfully!!');
    //     }
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validate ()) {
            try {
                const response = await axios.post('http://localhost:8080', formData);
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    };

    return (
        <>
            <div className="popup">
                <h3>Notice</h3>
                <form onSubmit={onSubmit}>
                    <div className="notice-form-group">
                        <label>Notice:</label>
                        <div className="notice">
                        <textarea name="text" rows={5} value={formData.text} onChange={handleChange}></textarea>
                        {errors.text && <div className="error">{errors.text}</div>}
                        </div>
                       
                    </div>
                    <div className="notice-form-group">
                        <label>Student:</label>
                        <div className="dropdown-notice">
                            <select name="studentStd" value={formData.studentStd} onChange={handleChange}>
                                <option value=''>Std</option>
                                <option value='all'>All</option>
                                <option value='5th'>5th</option>
                                <option value='6th'>6th</option>
                                <option value='7th'>7th</option>
                                <option value='8th'>8th</option>
                                <option value='9th'>9th</option>
                                <option value='10th'>10th</option>
                            </select>
                            <select name="studentDiv" value={formData.studentDiv} onChange={handleChange}>
                                <option value=''>Div</option>
                                <option value='all'>All</option>
                                <option value='A'>A</option>
                                <option value='B'>B</option>
                                <option value='C'>C</option>
                            </select>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" name="studentCheckbox" checked={formData.studentCheckbox} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="notice-form-group">
                        <label>Class Teacher:</label>
                        <div className="checkbox-group">
                            <input type="checkbox" name="classTeacherCheckbox" checked={formData.classTeacherCheckbox} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="notice-form-group">
                        <label>Teacher:</label>
                        <div className="checkbox-group">
                            <input type="checkbox" name="teacherCheckbox" checked={formData.teacherCheckbox} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="notice-form-group">
                        <label>Principal:</label>
                        <div className="checkbox-group">
                            <input type="checkbox" name="principalCheckbox" checked={formData.principalCheckbox} onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn-notice btn-primary">Save</button>
                </form>
            </div>
        </>
    );
}

export default Popup;
