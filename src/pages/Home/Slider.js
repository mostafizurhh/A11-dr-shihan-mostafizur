import React from 'react';
import slider1 from './slider1.png'
import slider2 from './slider2.png'
import slider3 from './slider3.jpeg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={slider1} className="w-full" alt='' />

                    <div className="absolute top-1 left-4 right-5 md:top-3/4 lg:left-3/4 md:left-1/4">
                        <h5 className='text-2xl font-semibold italic text-white '>"No Beauty Shines Brighter Than a healthy heart."</h5>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" alt='' />

                    <div className="absolute top-4 left-4 right-5 md:top-3/4 lg:left-1/3 md:left-1/4">
                        <h5 className='text-2xl font-semibold italic text-center text-white'>"Family... <br /> Where Life Begains And Love Never Ends. <br /> So, Care For Your Family and Your Heart."</h5>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-1 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" alt='' />
                    <div className="absolute top-1/2 left-4 right-5 md:top-3/4 lg:left-1/3 md:left-1/4">
                        <h5 className='text-2xl font-semibold italic text-center text-white capitalize'>"happiness is the highest form of health."</h5>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-1 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;