import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, image, title, description, fee } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10 mt-8">
            <PhotoView src={image}>
                <img src={image} style={{ padding: 10, height: 350 }} alt="" />
            </PhotoView>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100) + '...'}</p>
                <p>Price: ${fee}</p>
                <Link to={`/services/${_id}`}>
                    <button className="btn btn-primary btn-sm">See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;