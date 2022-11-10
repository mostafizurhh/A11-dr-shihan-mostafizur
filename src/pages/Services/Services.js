import React, { useContext, useEffect, useState } from 'react';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

import ServiceCard from './ServiceCard';

const Services = () => {
    const { loading } = useContext(OAuthContext)
    useTitle('Services')
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error))

    }, [])

    if (loading) {
        return <div className='text-center'>
            <button className="btn btn-ghost loading">Data is loading</button>
        </div>
    }

    return (
        <div className=''>
            <div className='p-3'>
                <h2 className='text-3xl text-center font-semibold mb-5'> My Practice</h2>
                <div className=' xs:flex-col md:flex'>
                    <div>
                        <img className='' src="" alt="" />
                    </div>
                    <div className='ml-3 text-justify'>
                        <p>
                            For me, my patients are at the center of everything we do. Regardless of what brings you here, heart palpitations, chest pain, vein disease, shortness of breath or even for a second opinion, your long-term health is my priority. <br />

                            I take the time to communicate with you about your health, making sure your questions are answered, ending every in-person or virtual visit asking if you have any remaining questions and I mean it because you are not a chart number to me, you are the reason I come to work each day.
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


        </div>
    );
};

export default Services;