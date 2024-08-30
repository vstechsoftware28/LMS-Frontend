import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
        reset,
        getValues,
    } = useForm({
        mode: 'onBlur',
    });
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/login')
    }
    // const handleResetPassword = async () => {
    //     if (newPassword !== confirmPassword) {
    //         alert("Passwords do not match");
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('/api/auth/reset-password', { email, otp, newPassword });
    //         alert(response.data);
    //     } catch (error) {
    //         alert(error.response.data);
    //     }

    // };
    
    return (
        // <form >
        //     <h2>Reset Password</h2>
        //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        //     <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
        //     <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
        //     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        //     <button onClick={handleResetPassword}>Submit</button>
        // </form>
        <>
            <div className='reset-form'>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='reset-form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email can only contain letters and spaces' }
                        })} onBlur={() => trigger('email')} />
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                    </div>
                    <div className='reset-form-group'>
                        <label htmlFor='otp'>OTP:</label>
                        <input id='otp' type='text' {...register('otp', {
                            required: 'Otp is required',
                            pattern: { value: /^[a-zA-Z0-9\s]*$/, message: ')tp can only contain letters and spaces' }
                        })} onBlur={() => trigger('otp')} />
                        {errors.otp && <p className='error'>{errors.otp.message}</p>}
                    </div>
                    <div className='reset-form-group'>
                        <label htmlFor='pass'>Password:</label>
                        <input id='pass' type='password' {...register('pass', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            }
                        })} onBlur={() => trigger('pass')} />
                        {errors.pass && <p className="error">{errors.pass.message}</p>}
                    </div>
                    <div className='reset-form-group'>
                        <label htmlFor='confirm'>Confirm Password:</label>
                        <input id='confirm' type='password' {...register('confirm', {
                            required: 'Confirm Password is required',
                            validate: value => value === getValues('pass') || 'Password must match'
                        })} onBlur={() => trigger('confirm')} />
                        {errors.confirm && <p className="error">{errors.confirm.message}</p>}
                    </div>
                    <button type='submit' className='btn-reset btn-primary' disabled={!isValid}>
                        Submit
                    </button>
                </form>
            </div>

        </>
    );
};

export default ResetPassword;