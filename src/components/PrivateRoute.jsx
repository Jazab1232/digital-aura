import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext'; // Adjust the import path as needed

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    console.log('Is authenticated:', isAuthenticated); // Check if the value is correct

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;
