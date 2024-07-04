import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Subject-Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SubjectForm = () => {
    const [file, setFile] = useState(null);
    const [showForm, setShowForm] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
       
        console.log(data);
        console.log(file);
        alert('Form submitted successfully');
        navigate('/');
        // reset();
    };
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const toggleFormVisibility = () => {
        setShowForm(!showForm); 
    };
    return (
        <>
        {showForm && (
             <div className='subject-form'>
             {/* <div className='icon' onClick={toggleFormVisibility}>
                         <FaTimes />
                     </div> */}
                 <h2>Subject Form</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
 
                     <div className='form-group'>
                         <label htmlFor='code'>Subject Code:</label>
                         <input id='code' type='text' {...register('code', {
                             required: 'Subject Code is required',
                             pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Subject Code can only contain letters and spaces' }
                         })} onBlur={() => trigger('code')} />
                         {errors.code && <p className='error'>{errors.code.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='name'>Subject Name:</label>
                         <input id='name' type='text' {...register('name', {
                             required: 'Subject name is required',
                             pattern: { value: /^[a-zA-Z\s]*$/, message: 'Subject name can only contain letters and spaces' }
                         })} onBlur={() => trigger('name')} />
                         {errors.name && <p className='error'>{errors.name.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='teacher'>Teacher Name:</label>
                         <input id='teacher' type='text' {...register('teacher', {
                             required: 'Teacher name is required',
                             pattern: { value: /^[a-zA-Z\s]*$/, message: 'Teacher name can only contain letters and spaces' }
                         })} onBlur={() => trigger('teacher')} />
                         {errors.teacher && <p className='error'>{errors.teacher.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='classname'>Class Name:</label>
                         <select id='classname' {...register('classname', { required: 'Class Name is required' })} >
                             <option value=''>Select Class</option>
                             <option value='1'>1st year</option>
                             <option value='2'>2nd year</option>
                             <option value='3'>3rd year</option>
                             <option value='4'>4th year</option>
                         </select>
                         {errors.classname && <p className='error'>{errors.classname.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='div'>Division:</label>
                         <select id='div' {...register('div', { required: 'Division is required' })} >
                             <option value=''>Select Division</option>
                             <option value='A'>A</option>
                             <option value='B'>B</option>
                             <option value='C'>C</option>
                         </select>
                         {errors.div && <p className='error'>{errors.div.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='description'>Description:</label>
                         <input id='description' type='text' {...register('description', {
                             required: 'Description is required',
                             pattern: { value: /^[a-zA-Z\s]*$/, message: 'Description can only contain letters and spaces' }
                         })} onBlur={() => trigger('description')} />
                         {errors.description && <p className='error'>{errors.description.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='credit'>Credit:</label>
                         <input id='credit' type='text' {...register('credit', {
                             required: 'Credit is required',
                             pattern: { value: /^[0-9]{1}$/, message: 'Credit must be between 1  digits' }
                         })} onBlur={() => trigger('credit')} />
                         {errors.credit && <p className="error">{errors.credit.message}</p>}
                     </div>
                     <div className='form-group'>
                         <label htmlFor='file'>File:</label>
                         <input id='file' type='file' onChange={handleFileChange} />
                     </div>
                     <button type='submit' className='btn btn-primary' disabled={!isValid}>
                         Submit
                     </button>
                 </form>
             </div>

        )}
            {/* <div className="marquee">
                <div className="marquee-text">Notice - Hello Student, I will conduct the Apptitude test in tomorrow .</div>
            </div> */}
           
        </>
    );
};

export default SubjectForm;

