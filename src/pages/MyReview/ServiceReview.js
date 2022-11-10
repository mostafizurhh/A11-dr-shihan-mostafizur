import React from 'react';

const ServiceReview = ({ review, service }) => {
    console.log(review, service)

    const { serviceId, customer, photo, message, serviceName } = review
    const { _id } = service

    if (serviceId === _id) {
        return (
            <div className='mb-7 bg-stone-400 text-white p-2 rounded-lg'>
                <div className='flex items-center'>
                    <img className='rounded-full' style={{ height: 50, width: 50 }} src={photo} alt="" />
                    <p className='ml-3'>{customer}</p>
                </div>
                <p>{serviceName}</p>
                <p>{message}</p>
            </div>
        );
    }
};

export default ServiceReview;