import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceReview from '../MyReview/ServiceReview';

const Service = () => {
    const service = useLoaderData();
    console.log(service)
    useTitle(`${service.title}`)

    const [showReviews, setShowReviews] = useState([service])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${service._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShowReviews(data)
            })
    }, [service])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
            <div className='col-span-2'>
                <p className='text-3xl font-bold mb-5'>{service.title}</p>
                <img className='w-full h-96 mb-8' src={service.image} alt="" />
                <div className='flex justify-between text-2xl font-bold mb-5'>
                    <p>Price: ${service.fee}</p>
                    <p>Rating: {service.rating}</p>
                </div>
                <p className='font-semibold text-justify italic'>{service.description}</p>
                <button className='btn btn-primary mt-4'>Book Appoinment</button>
            </div>
            <div>
                <div className='text-3xl font-bold mb-5'>Reviews</div>
                <Link to={`/addareview/${service._id}`} >
                    <button className='btn btn-info mb-5'>Add A Review</button>
                </Link>
                <div>
                    {/* Total:{showReviews.length} */}
                    {
                        showReviews.map(review => <ServiceReview
                            key={review._id}
                            review={review}
                            service={service}></ServiceReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;