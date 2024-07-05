import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './UploadVideoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa';

const VideoForm = () => {
    const [file, setFile] = useState(null);
    const [showForm, setShowForm] = useState(true); // State to manage form visibility

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data);
        console.log(file);
        alert('Form submitted successfully');
        // reset();
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm); // Toggle form visibility
    };

    return (
        <>
            {showForm && ( // Conditional rendering of form based on showForm state
                <div className='video-form'>
                    <div className='icon' onClick={toggleFormVisibility}>
                        <FaTimes />
                    </div>
                    <h2>Video Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <label htmlFor='topic'>Topic:</label>
                            <select id='topic' {...register('topic', { required: 'Topic Name is required' })}>
                                <option value=''>Select Topic</option>
                                <option value='1'>Integration</option>
                                <option value='2'>Addition</option>
                                <option value='3'>Matrix</option>
                                <option value='4'>Ratio</option>
                            </select>
                            {errors.topic && <p className='error'>{errors.topic.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sub'>Sub Topic:</label>
                            <input
                                id='sub'
                                type='text'
                                {...register('sub', {
                                    required: 'Sub Topic name is required',
                                    pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Sub Topic name can only contain letters and spaces' }
                                })}
                                onBlur={() => trigger('sub')}
                            />
                            {errors.sub && <p className='error'>{errors.sub.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>Description:</label>
                            <input
                                id='description'
                                type='text'
                                {...register('description', {
                                    required: 'Description is required',
                                    pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Description can only contain letters and spaces' }
                                })}
                                onBlur={() => trigger('description')}
                            />
                            {errors.description && <p className='error'>{errors.description.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='file'>Upload Video:</label>
                            <input id='file' type='file' onChange={handleFileChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='file1'>Notes:</label>
                            <input id='file1' type='file' onChange={handleFileChange} />
                        </div>
                        <button type='submit' className='btn btn-primary' disabled={!isValid}>
                            Add
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default VideoForm;
