import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../Firebase';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const user = auth.currentUser;

  if (!user && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
