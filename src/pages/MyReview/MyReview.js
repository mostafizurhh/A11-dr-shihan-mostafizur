import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { OAuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';


const MyReview = () => {
    const { user, logout } = useContext(OAuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('MyReview')

    useEffect(() => {
        fetch(`https://dr-shihan-mostafizur-server-mostafizurhh.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => console.error(e))
    }, [user?.email])

    /* delete a specific review data from UI, Server and DB */
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete the review?')
        if (proceed) {
            fetch(`https://dr-shihan-mostafizur-server-mostafizurhh.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully')
                        const remaining = reviews.filter(rv => rv._id !== id)
                        setReviews(remaining)
                    }
                })
                .catch(e => console.error(e))
        }
    }

    return (
        <div>
            <>
                {
                    user?.email && reviews.length === 0 ?
                        <p className='flex justify-center items-center font-extrabold uppercase italic text-2xl sm:text-4xl text-red-500'>No reviews were added</p>
                        :
                        <>
                            <p className='text-xl mb-4'> You gave {reviews.length} reviews.</p>
                            <div className="">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Customer</th>
                                            <th>Service Name</th>
                                            <th>Review</th>
                                            <th>Rating</th>
                                            <th>Date</th>
                                            <th>Update Review</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.map(review => <ReviewRow
                                                key={review._id}
                                                review={review}
                                                handleOrderDelete={handleOrderDelete}
                                            >
                                            </ReviewRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                }
            </>
        </div>
    );
};

export default MyReview;