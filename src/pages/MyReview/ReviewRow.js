import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewRow = ({ review, handleOrderDelete, handleStatusUpdate }) => {
    const { user } = useContext(OAuthContext)
    // console.log(review)
    const { _id, customer, serviceName, rating, email, message, serviceId, date } = review;
    const [serviceReview, setServiceReview] = useState([])

    /* loading all service data */
    useEffect(() => {
        fetch(`https://dr-shihan-mostafizur-server-mostafizurhh.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
            .catch(e => console.error(e))
    }, [serviceId])


    return (
        <tr>
            <th>
                {/* delete a specific data from UI, Server and DB */}
                <label>
                    <button onClick={() => handleOrderDelete(_id)} className='btn btn-sm btn-outline btn-error'>x</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-24">
                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className='flex items-center'>
                <div className="avatar">
                    <div className="rounded w-24 h-24 mr-2">
                        {
                            serviceReview?.image &&
                            <img src={serviceReview.image} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
                {serviceName}
            </td>
            <td>{message}</td>
            <td>{rating}</td>
            <td>{date}</td>

            <td>
                <Link to={`/editreview/${_id}`}>
                    <button className="btn btn-ghost">
                        <FaEdit></FaEdit>
                    </button></Link>
            </td>
        </tr>
    );
};

export default ReviewRow;