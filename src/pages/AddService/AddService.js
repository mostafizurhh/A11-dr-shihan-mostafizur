import React from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;
        const fee = form.fee.value;
        const rating = form.rating.value;

        const service = {
            title: title,
            image: image,
            description: description,
            fee: fee,
            rating: rating,
            date: new Date()
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added Successfully')
                    form.reset()
                    navigate(from, { replace: true })/* navigate user */
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <h2 className='font-bold text-center mb-3 text-xl'>Add a Service</h2>
            <form onSubmit={handleFormSubmit} className='flex flex-col items-center justify-center'>

                <input name='title' type="text" placeholder="Service Name" className="input input-bordered w-full max-w-md mb-3" required />

                <input name='image' type="text" placeholder="Your Photo URL" className="input input-bordered w-full max-w-md mb-3" required />

                <textarea name='description' type="text" placeholder="write something about service" className="textarea-bordered textarea w-full max-w-md h-40 mb-3" required />

                <input name='fee' type="text" placeholder="amount" className="input input-bordered w-full max-w-md mb-3" required />

                <input name='rating' type="text" placeholder="rate out of 5" className="input input-bordered w-full max-w-md mb-3" required />

                <button className='btn mt-4'>Submit Review</button>
            </form>
        </div>
    );
};

export default AddService;