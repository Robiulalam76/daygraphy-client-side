import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';
import Galary from '../Galary/Galary';
import HomeSlider from '../HomeBanner/HomeSlider';
import LatestService from '../LatestService/LatestService';

const Home = () => {
    const { setLoading } = useContext(AuthContext)
    const services = useLoaderData()
    useTitle('Home')
    return (
        <div>
            <div>
                <HomeSlider></HomeSlider>
            </div>
            <div>
                <h1 className='text-gray-900 mt-6 font-bold text-3xl text-center'>Latest Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-12 px-6'>
                    {
                        services.map(service => <LatestService
                            key={service._id}
                            service={service}
                        ></LatestService>)
                    }
                </div>
                <Link onClick={() => setLoading(true)} to='/services' className='text-center flex justify-center'>
                    <button className='text-center btn btn-secondary'>SEE ALL</button>
                </Link>
            </div>
            <div>
                <Galary></Galary>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;