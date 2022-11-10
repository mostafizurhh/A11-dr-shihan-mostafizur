import React from 'react';
import logo from './insurance-logo.jpeg'

const Insurance = () => {
    return (
        <div className='text-center mb-10 bg-red-100 p-2'>
            <p className='text-3xl capitalize text-amber-600'>We accept most insurance plans</p>
            <img className='mt-5 mb-5' src={logo} alt="" />
            <p className='font-semibold text-violet-900'>If you don’t see your insurance, call us for an alternative options: +8801725353614</p>
        </div>
    );
};

export default Insurance;