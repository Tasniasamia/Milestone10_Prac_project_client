import React, { useContext } from 'react';
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { authdataall } from './Authprovider';

const PrivateRoute = ({children}) => {
    const {user,load}=useContext(authdataall);
    let location = useLocation();
    if(user){
        return children;
    }
    if(load){
        <div>Loading.....</div>
    }
    return (
        <Navigate to="/resisterlayout/login" state={{ from: location }} replace />
            
        
    );
};

export default PrivateRoute;