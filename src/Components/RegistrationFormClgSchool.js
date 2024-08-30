import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './RegistrationFormClgSchool.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationFormClgSchool = () => {
    const [userType, setUserType] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    // const onSubmit = (data) => {
    //     console.log(data);
    //     alert('Form submitted successfully');
    //     // reset();
    // };

    const onSubmit = async (data) => {
        let endpoint = '';
        if (userType === 'College') {
            endpoint = 'http://localhost:8081/College/addCollegeRegistration';
        } else if (userType === 'School') {
            endpoint = 'http://localhost:8080/School/addSchoolRegistration';
        }

        if (endpoint) {
            try {
                const response = await axios.post(endpoint, data)
                console.log(response.data)
                alert('Form submitted successfully!!')
            } catch (error) {
                console.error(error)
                alert('Failed to submit form!!')
            }
        } else {
            alert('Please select a usertype..')
        }
    }

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div className='registration-form-school'>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='regis-school-form-group'>
                    <label htmlFor='user'>User Type:</label>
                    <select id='user' {...register('user', { required: 'User type is required' })}
                        onChange={handleUserTypeChange} >
                        <option value=''>Select Type</option>
                        <option value='College'>College</option>
                        <option value='School'>School</option>
                    </select>
                    {errors.user && <p className='error'>{errors.user.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='clgname'>
                        {userType === 'School' ? 'School Name:' : 'College Name:'}
                    </label>
                    <input id='clgname' type='text' {...register('clgname', {
                        required: userType === 'School' ? 'School name is required' : 'College name is required',
                        pattern: {
                            value: /^[a-zA-Z\s]*$/, message: userType === 'School' ? 'School name can only contain letters and spaces'
                                : 'College name can only contain letters and spaces'
                        }
                    })} onBlur={() => trigger('clgname')} />
                    {errors.clgname && <p className='error'>{errors.clgname.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='id'>Id:</label>
                    <input id='id' type='text' {...register('id', {
                        required: 'Id is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'Id can only contain letters and spaces' }
                    })} onBlur={() => trigger('id')} />
                    {errors.id && <p className='error'>{errors.id.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='principle'>Principal Name:</label>
                    <input id='principle' type='text' {...register('principle', {
                        required: 'Principal name is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'Principal name can only contain letters and spaces' }
                    })} onBlur={() => trigger('principle')} />
                    {errors.principle && <p className='error'>{errors.principle.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid Email' }
                    })} onBlur={() => trigger('email')} />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='telephone'>Telephone Number:</label>
                    <input id='telephone' type='text' {...register('telephone', {
                        required: 'Telephone Number is required',
                        pattern: { value: /^[0-9]{10,12}$/, message: 'Telephone number must be between 10 to 12 digits' }
                    })} onBlur={() => trigger('telephone')} />
                    {errors.telephone && <p className="error">{errors.telephone.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='state'>State:</label>
                    <input id='state' type='text' {...register('state', {
                        required: 'State is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'State can only contain letters and spaces' }
                    })} onBlur={() => trigger('state')} />
                    {errors.state && <p className='error'>{errors.state.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='dist'>District:</label>
                    <input id='dist' type='text' {...register('dist', {
                        required: 'District is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'District can only contain letters and spaces' }
                    })} onBlur={() => trigger('dist')} />
                    {errors.dist && <p className='error'>{errors.dist.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='tel'>Taluka:</label>
                    <input id='tel' type='text' {...register('tel', {
                        required: 'Tel is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'Tel can only contain letters and spaces' }
                    })} onBlur={() => trigger('tel')} />
                    {errors.tel && <p className='error'>{errors.tel.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='city'>City:</label>
                    <input id='city' type='text' {...register('city', {
                        required: 'City is required',
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'City can only contain letters and spaces' }
                    })} onBlur={() => trigger('city')} />
                    {errors.city && <p className='error'>{errors.city.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='pincode'>Pincode:</label>
                    <input id='pincode' type='text' {...register('pincode', {
                        required: 'Pincode is required',
                        pattern: { value: /^[0-9]{6}$/, message: 'Pincode must be exactly 6 digits' }
                    })} onBlur={() => trigger('pincode')} />
                    {errors.pincode && <p className="error">{errors.pincode.message}</p>}
                </div>
                <div className='regis-school-form-group'>
                    <label htmlFor='dob'>Registration Date:</label>
                    <input id='dob' type='date' {...register('dob', { required: 'DOB is required' })}
                        onBlur={() => trigger('dob')} />
                    {errors.dob && <p className='error'>{errors.dob.message}</p>}
                </div>

                <button type='submit' className='btn-school btn-primary' disabled={!isValid}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationFormClgSchool;