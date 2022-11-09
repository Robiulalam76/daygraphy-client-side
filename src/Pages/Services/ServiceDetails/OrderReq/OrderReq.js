import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';

const OrderReq = () => {
    useTitle('Order')
    const service = useLoaderData();
    const { _id, price, title, ratings, description, img, photographer } = service;
    return (
        <div className='grid md:grid-cols-2'>
            <div className=''>
                <div className="p-6 bg-white">
                    <div className='flex justify-between items-center mb-2'>
                        <h5 className="text-gray-900 text-xl md:text-3xl font-medium">{title}</h5>
                        <h1 className='text-blue-900 text-2xl md:text-4xl font-bold'>${price}</h1>
                    </div>
                    <div className='flex items-center mb-3'>
                        <Link to='/about'><img className='w-10 rounded-full' src={photographer} alt="" /></Link>
                        <div className='ml-2'>
                            <small className='text-gray-900 font-semibold'>Photographer</small>
                            <Link to='/about' className='text-gray-800 block'><small>H Al Hadi</small></Link>
                        </div>
                    </div>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <div className=''>
                        <div className="flex items-center text-black">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Rating star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <p className="ml-2 text-sm font-bold text-gray-900">{ratings}</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                            <Link className="text-sm font-medium text-gray-900 underline hover:no-underline">73 reviews</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <form className="form bg-white border-s-2 border-gray-600 border p-6 relative">

                    <div className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"><i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                    <h3 className="text-2xl text-gray-900 font-semibold">WELCOME TO ORDER REQUEST!!!</h3>
                    <p className="text-gray-600"> Please Provide Your Informations</p>
                    <div className="flex space-x-5 mt-3">
                        <input type="text" name="" id="" placeholder="Your Name" className="border p-2  w-1/2" />
                        <input type="tel" name="" id="" placeholder="Your Number" className="border p-2 w-1/2" />
                    </div>
                    <input type="email" name="" id="" placeholder="Your Email" className="border p-2 w-full mt-3" />
                    <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>
                    <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
                    <div className="flex items-baseline space-x-2 mt-2">
                        <input type="checkbox" name="" id="" className="inline-block" />
                        <p className="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                    </div>
                    <input type="submit" value="ORDER REQUEST" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />

                </form>
            </div>
        </div>

    );
};

export default OrderReq;