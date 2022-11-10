import React from 'react';
import useTitle from '../../hooks/useTitle';
import MyServices from '../Home/MyServices';
import Contact from './Contact';
import Covid from './Covid';
import Insurance from './Insurance';
import Slider from './Slider';


const Home = () => {
    useTitle('Home')
    return (
        <div className='p-3'>
            <Slider></Slider>
            <Covid></Covid>
            <MyServices></MyServices>
            <Insurance></Insurance>
            <Contact></Contact>
        </div>
    );
};

export default Home;