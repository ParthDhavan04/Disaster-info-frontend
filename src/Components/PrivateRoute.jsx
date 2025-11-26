import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const token = localStorage.getItem('token');

    // If token exists, render child routes, otherwise redirect to login
    return token ? <Outlet /> : <Navigate to="/login" replace />;
}
