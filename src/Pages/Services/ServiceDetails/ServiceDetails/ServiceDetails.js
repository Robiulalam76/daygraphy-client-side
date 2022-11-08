import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewStatitics from '../ReviewStatitics/ReviewStatitics';
import AllReview from '../AllReview/AllReview';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, price, title, ratings, description, img, photographer } = service;
    return (
        <div className='my-12'>
            {/* click to img show */}
            <PhotoProvider>
                <div className="foo h-96">
                    <PhotoView src={img}>
                        <img className="h-full w-full" src={img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div className='grid grid-cols-1 lg:grid-cols-5'>
                <div className='md:col-span-3'>
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
                        <div className='flex justify-between items-center'>
                            <Link to={`/services/order-request/${_id}`}>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ORDER REQUEST</button>
                            </Link>
                            <div class="flex items-center text-black">
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Rating star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <p class="ml-2 text-sm font-bold text-gray-900">{ratings}</p>
                                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                                <Link class="text-sm font-medium text-gray-900 underline hover:no-underline">73 reviews</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:col-span-2 h-full z-50 order-last md:order-none'>
                    <ReviewStatitics></ReviewStatitics>
                </div>


                {/* review list */}
                <div className='md:col-span-3'>
                    <ReviewForm></ReviewForm>
                </div>
                <div className='md:col-span-2 w-full '>
                    <AllReview></AllReview>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;