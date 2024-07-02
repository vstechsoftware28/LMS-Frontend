import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        // Minimum 8 characters, at least one letter, one number and one special character
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const handleLogin = async () => {
        setError('');

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email.");
            return;
        }

        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long and include at least one letter, one number, and one special character.");
            return;
        }

        try {
            const response = await axios.post('/api/auth/login', { email, password });
            alert(response.data);
        } catch (error) {
            setError(error.response.data || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
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
        </div>
    );
};

export default Login;
