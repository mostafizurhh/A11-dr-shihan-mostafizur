import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import health from './Health-Services.jpeg'
import ServiceCard from '../Services/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className=''>
            <div className='p-3'>
                <h2 className='text-3xl text-center font-semibold mb-5'> My Services</h2>
                <div className=' xs:flex-col md:flex'>
                    <div>
                        <img className='' src={health} alt="" />
                    </div>
                    <div className='ml-3 text-justify'>
                        <p>
                            I regularly see patients for Heart Screening, Kawasaki disease, Lipid disorders and hypertension, Cardiomyopathy, Stroke Screening, and Atherosclerosis. Below is a list of some of the cardiology services I offer to support my patients and assist in diagnosis.  Please click on the details button to read more.  I look forward to serve you and your family!
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center mb-10'>
                <Link to='/services'>
                    <button className="btn btn-outline btn-info">All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;