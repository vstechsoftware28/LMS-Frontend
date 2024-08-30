import React, { useState } from "react";
import './UpdateVideoForm.css';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const UpdateVideoForm = () => {

    const [file, setFile] = useState(null);
    const [showForm, setShowForm] = useState(true);
    const [loading, setLoading] = useState(false);
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

        if (file) {
            const videoURL = URL.createObjectURL(file);
            console.log('Uploaded Video URL:', videoURL);
        }
        alert('Form submitted successfully');
        // reset();
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    return(
        <>
            {showForm && (
                <div className='update-video-form'>
                    <div className='icon' onClick={toggleFormVisibility}>
                        <FaTimes />
                    </div>
                    <h2>Video Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='update-video-form-group'>
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
                        <div className='update-video-form-group'>
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
                        <div className='update-video-form-group'>
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
                        <div className='update-video-form-group'>
                            <label htmlFor='file'>Upload Video:</label>
                            <input id='file' type='file' accept="video/*" onChange={handleFileChange} />
                        </div>
                        <div className='update-video-form-group'>
                            <label htmlFor='file1'>Notes:</label>
                            <input id='file1' type='file' onChange={handleFileChange} />
                        </div>
                        <button type='submit' className='btn-video btn-primary' disabled={!isValid}>
                            Update
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdateVideoForm;