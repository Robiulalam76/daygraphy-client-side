import React from 'react';
import About from '../About/About';
import HomeSlider from './HomeSlider';

const Home = () => {
    return (
        <div>
            <div>
                <HomeSlider></HomeSlider>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;