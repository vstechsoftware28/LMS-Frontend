import React from "react";
import { useForm } from 'react-hook-form';
import './LeaveForm.css';

const LeaveForm = () => {
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
        alert('Form submitted successfully');
        // reset();
    };

    return (
        <>
            <div className='leave-application-form'>
                <h2>Leave Application Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='leave-form-group'>
                        <label htmlFor='id'> Student Id:</label>
                        <input id='id' type='text' {...register('id', {
                            required: 'Id is required',
                            pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Id can only contain letters and spaces' }
                        })} onBlur={() => trigger('id')} />
                        {errors.id && <p className='error'>{errors.id.message}</p>}
                    </div>
                    <div className='leave-form-group'>
                        <label htmlFor='studentName'>Student Name:</label>
                        <input id='studentName' type='text' {...register('studentName', {
                            required: 'Student name is required',
                            pattern: { value: /^[a-zA-Z\s]*$/, message: 'Student name can only contain letters and spaces' }
                        })} onBlur={() => trigger('studentName')} />
                        {errors.studentName && <p className='error'>{errors.studentName.message}</p>}
                    </div>
                    
                    <div className='leave-form-group'>
                        <label htmlFor='startDate'>Start Date:</label>
                        <input id='startDate' type='date' {...register('startDate', {
                            required: 'Start Date is required',
                        })} onBlur={() => trigger('startDate')} />
                        {errors.startDate && <p className='error'>{errors.startDate.message}</p>}
                    </div>
                    <div className='leave-form-group'>
                        <label htmlFor='endDate'>End Date:</label>
                        <input id='endDate' type='date' {...register('endDate', {
                            validate: (value) => {
                                const startDate = document.getElementById('startDate').value;
                                if (value && new Date(value) <= new Date(startDate)) {
                                    return 'End date must be after the start date';
                                }
                                return true;
                            }
                        })}
                        onBlur={() => trigger('endDate')} />
                        {errors.endDate && <p className='error'>{errors.endDate.message}</p>}
                    </div>
                    <div className='leave-form-group'>
                        <label htmlFor='reason'>Reason:</label>
                        <input id='reason' type='text' {...register('reason', {
                            required: 'Reason name is required',
                            pattern: { value: /^[a-zA-Z\s]*$/, message: 'Reason name can only contain letters and spaces' }
                        })} onBlur={() => trigger('reason')} />
                        {errors.reason && <p className='error'>{errors.reason.message}</p>}
                    </div>
                    <button type='submit' className='btn-leave btn-primary' disabled={!isValid}>
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}

export default LeaveForm;
