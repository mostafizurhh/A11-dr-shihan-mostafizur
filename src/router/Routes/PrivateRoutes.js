import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(OAuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='text-center'>
            <button className="btn btn-ghost loading">Data is loading</button>
        </div>
    }
    if (!user) {
        return <Navigate to='/login'
            state={{ from: location }} replace>
        </Navigate>
    }
    return children;
};

export default PrivateRoute;