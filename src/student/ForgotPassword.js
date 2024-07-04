import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetPassword, setResetPassword] = useState(false);
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

    const handleSendOtp = async () => {
        setError('');

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email.");
            return;
        }

        try {
            const response = await axios.post('/api/auth/send-otp/email', { email });
            if (response.data.success) {
                setOtpSent(true);
            } else {
                setError("Failed to send OTP. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again."); 
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('/api/auth/verify-otp', { email, otp });
            if (response.data.success) {
                setResetPassword(true);
            } else {
                setError("Invalid OTP. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    const handleResetPassword = async () => {
        setError('');

        if (!validatePassword(newPassword)) {
            setError("Password must be at least 8 characters long and include at least one letter, one number, and one special character.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post('/api/auth/reset-password', { email, newPassword });
            if (response.data.success) {
                alert("Password reset successfully. Redirecting to login page...");
                // Redirect to login page
                window.location.href = '/login';
            } else {
                setError("Failed to reset password. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Forgot Password</h2>
                {error && <p className="error">{error}</p>}
                {!otpSent && (
                    <>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                        <button onClick={handleSendOtp}>Send OTP</button>
                    </>
                )}
                {otpSent && !resetPassword && (
                    <>
                        <input 
                            type="text" 
                            value={otp} 
                            onChange={(e) => setOtp(e.target.value)} 
                            placeholder="Enter OTP" 
                        />
                        <button onClick={handleVerifyOtp}>Verify OTP</button>
                    </>
                )}
                {resetPassword && (
                    <>
                        <input 
                            type="password" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                            placeholder="New Password" 
                        />
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            placeholder="Confirm Password" 
                        />
                        <button onClick={handleResetPassword}>Reset Password</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
