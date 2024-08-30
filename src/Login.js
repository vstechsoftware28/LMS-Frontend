import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
    return (
        <>
            <div className='login-form'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='login-form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' {...register('email', {
                            required: 'Email is required',
                            placeholder:'enter email',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email can only contain letters and spaces' }
                        })} onBlur={() => trigger('email')} />
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                    </div>
                    <div className='login-form-group'>
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
                    <button type='submit' className='btn-login btn-primary' disabled={!isValid}>
                        Login
                    </button>
                    <p className='link'>
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;




// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [error, setError] = useState('');

// const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// };

// const validatePassword = (password) => {
//     // Minimum 8 characters, at least one letter, one number and one special character
//     const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return re.test(password);
// };

// const handleLogin = async () => {
//     setError('');

//     if (!email || !password) {
//         setError("Please fill in all fields.");
//         return;
//     }

//     if (!validateEmail(email)) {
//         setError("Please enter a valid email.");
//         return;
//     }

//     if (!validatePassword(password)) {
//         setError("Password must be at least 8 characters long and include at least one letter, one number, and one special character.");
//         return;
//     }

//     try {
//         const response = await axios.post('/api/auth/login', { email, password });
//         alert(response.data);
//     } catch (error) {
//         setError(error.response.data || "An error occurred. Please try again.");
//     }
// };



{/* <div className="container">
<div className="form-container">
    <h2>Login</h2>
    {error && <p className="error">{error}</p>}
    <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
    />
    <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
    />
    <button onClick={handleLogin}>Login</button>
    <p>
        <Link to="/forgot-password">Forgot your password?</Link>
    </p>
</div>
</div> */}