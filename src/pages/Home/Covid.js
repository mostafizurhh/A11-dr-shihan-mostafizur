import React from 'react';
import mask from './mask.jpeg'

const Covid = () => {
    return (
        <div className='mt-8 mb-8 text-justify'>
            <h2 className='text-2xl font-bold text-center'>Covid-19 Safety Measure</h2>
            <div className='xs:flex-col md:flex justify-center mt-5'>
                <div className='md:w-1/2 md:mr-5 mb-3 p-3 md:p-0 md:mb-0'>
                    <p>
                        Patient safety is my utmost priority. Me as a doctor has exercised diligent efforts to maximize safety measures for both patients and myself since the start of the COVID-19 outbreak. Therefore, I request you to wear a face mask and use hand sinitizer before entering my chamber.
                    </p>
                </div>
                <div className='text-center items-center justify-center flex'>

                    <img style={{ width: 300, height: 250 }} src={mask} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Covid;