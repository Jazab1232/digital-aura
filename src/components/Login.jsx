import React, { useEffect, useState } from "react";
import '../styles/login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/config";
import { useAuth } from './auth/AuthContext';  // Use the custom hook
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // The actual login handler
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful:', userCredential); // Add this to see if login succeeds
            setIsAuthenticated(true);
            navigate('/dashboard');

        } catch (error) {
            console.error('Login error:', error); // Log any authentication errors
        }
    };

    return (
        <div className="adminLoginContainer">
            <div className="adminLoginCard">
                <div className="adminLoginHeader">
                    <div className="adminLoginIcon">
                        <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="Admin Icon" />
                    </div>
                    <h4 className="adminLoginTitle">Admin Login</h4>
                </div>
                <div className="adminLoginBody">
                    <form className="adminLoginForm" onSubmit={handleLogin}>
                        <div>
                            <input
                                type="email"
                                name="email"
                                className="adminLoginInput"
                                placeholder="Email"
                                value={email} // Bind input value
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                className="adminLoginInput"
                                placeholder="Password"
                                value={password} // Bind input value
                                onChange={(e) => setPassword(e.target.value)} // Update state on change
                                required
                            />
                        </div>
                        <button type="submit" className="adminLoginButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
