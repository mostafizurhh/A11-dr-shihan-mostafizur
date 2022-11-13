import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddAReview = () => {
    const { user } = useContext(OAuthContext)
    console.log(user)
    const serviceReviews = useLoaderData()
    console.log(serviceReviews)
    useTitle(`Add Review for ${serviceReviews.title}`)

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const userReview = form.userReview.value;

        /* create review object in order to send data to server */
        const review = {
            serviceId: serviceReviews._id,
            serviceName: serviceReviews.title,
            price: serviceReviews.fee,
            customer: name,
            email: email,
            photo: photoURL,
            message: userReview,
            rating: serviceReviews.rating,
            date: new Date(),
            id: serviceReviews.serviceId
        }

        /* call order API from server to read order object from client side */
        fetch('https://dr-shihan-mostafizur-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Review added Successfully')
                    form.reset()
                    navigate(from, { replace: true })/* navigate user */
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='flex-col items-center justify-center p-3'>
            <p className='text-xl font-bold capitalize mb-3 text-center'>Give your valuable review here</p>
            <form onSubmit={handleFormSubmit} className='flex flex-col items-center justify-center'>

                <input name='servicename' type="text" placeholder="Service Name" defaultValue={serviceReviews.title} className="input input-bordered w-full max-w-md mb-3" readOnly />

                <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-md mb-3" readOnly />

                <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full max-w-md mb-3" readOnly />

                <input name='photoURL' type="text" placeholder="Your Photo URL" defaultValue={user?.photoURL} className="input input-bordered w-full max-w-md mb-3" readOnly />

                <textarea name='userReview' type="text" placeholder="Your Opinion" className="textarea-bordered textarea w-full max-w-md h-40 " required />
                <button className='btn mt-4'>Submit Review</button>
            </form>
        </div>
    );
};

export default AddAReview;