import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, price, title, description, img, photographer } = service;
    return (
        <div>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">

                        {/* click to img show */}
                        <PhotoProvider>
                            <div className="foo">
                                <PhotoView src={img}>
                                    <img class="rounded-t-lg h-44 w-full" src={img} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                    </a>
                    <div class="p-6">
                        <div className='flex justify-between items-center mb-2'>
                            <h5 class="text-gray-900 text-xl font-medium">{title}</h5>
                            <h1 className='text-blue-900 text-2xl font-bold'>${price}</h1>
                        </div>
                        <div className='flex items-center mb-3'>
                            <Link to='/about'><img className='w-10 rounded-full' src={photographer} alt="" /></Link>
                            <div className='ml-2'>
                                <small className='text-gray-900 font-semibold'>Photographer</small>
                                <Link to='/about' className='text-gray-800 block'><small>H Al Hadi</small></Link>
                            </div>
                        </div>
                        <p class="text-gray-700 text-base mb-4">
                            {description?.slice(0, 100) + '...'}
                        </p>
                        <div className='flex justify-between items-center'>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">MORE DETAILS</button>
                            <p>Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

