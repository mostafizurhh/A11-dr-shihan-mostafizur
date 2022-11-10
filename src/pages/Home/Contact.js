import React from 'react';
import icon1 from './location_icon.png'
import icon2 from './time_icon.png'
import icon3 from './mail_icon.png'

const Contact = () => {
    return (
        <div className='grid grid-cols-1, md:grid-cols-2 lg:grid-cols-3 gap-5 bg-violet-400 p-2 text-white'>
            <div>
                <div className='flex items-center'>
                    <img src={icon1} alt="" />
                    <p className='ml-3 font-semibold italic'>
                        House 19, Flat, 3-A Rd No 27, Dhaka 1213, Bangladesh
                    </p>
                </div>
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={icon2} alt="" />
                    <div className='ml-3 font-semibold italic'>
                        <p>Monday-Friday 8:00am -7:00pm</p>
                        <p>Saturday & Sunday 10:00am -5:00pm</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={icon3} alt="" />
                    <div className='ml-3 font-semibold italic'>
                        <p>Email: doctor@shihanmostafizur.com</p>
                        <p>Phone: +8801725353614</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;