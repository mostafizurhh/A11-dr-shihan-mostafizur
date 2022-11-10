import React from 'react';
import logo from './error.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center mt-80 md:mt-0 lg:mt-40'>
            <img src={logo} alt="" />
        </div>
    );
};

export default ErrorPage;