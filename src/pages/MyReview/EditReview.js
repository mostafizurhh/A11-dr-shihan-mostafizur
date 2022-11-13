import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';



const EditReview = () => {
    const editReview = useLoaderData()
    const [message, setMessage] = useState(editReview);

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    /* update a specific data in UI, Server and DB */

    const handleUpdateReview = (event) => {
        event.preventDefault()
        // console.log(message)
        fetch(`https://dr-shihan-mostafizur-server-mostafizurhh.vercel.app/reviews/${editReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Modified Successfully')
                    event.target.reset()
                    navigate(from, { replace: true })/* navigate user */
                }
            })
            .catch(e => console.error(e))
    }

    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...message }
        newReview[field] = value
        console.log(newReview)
        setMessage(newReview)
    }


    return (
        <div>
            <form onSubmit={handleUpdateReview} className='flex flex-col items-center justify-center'>

                <input name='servicename' type="text" placeholder="Service Name" defaultValue={editReview.serviceName} className="input input-bordered w-full max-w-md mb-3" readOnly />

                <textarea onChange={handleChange} name='message' type="text" placeholder="Your Opinion" defaultValue={editReview.message} className="textarea-bordered textarea w-full max-w-md h-40 " required />
                <button className='btn mt-4'>Update Review</button>
            </form>
        </div>
    );
};

export default EditReview;