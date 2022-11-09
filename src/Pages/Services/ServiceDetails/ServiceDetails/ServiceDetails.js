import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewStatitics from '../ReviewStatitics/ReviewStatitics';
import AllReview from '../AllReview/AllReview';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const ServiceDetails = () => {
    const { user, logout } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, price, title, ratings, description, img, photographer } = service;
    const [reviews, setReviews] = useState([])

    const handleReview = (event) => {
        event.preventDefault()
        const message = event.target.message.value

        const review = {
            serviceId: _id,
            name: user?.displayName,
            img: user?.photoURL,
            email: user?.email,
            message: message
        }
        // console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    event.target.reset()
                    const newReview = [...reviews, review]
                    setReviews(newReview)
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?_id=${_id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setReviews(data)
            })

    }, [_id])


    const handleDelete = (id) => {

        // console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mx-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    }
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = reviews.filter(review => review._id !== id)
                            setReviews(remaining)
                        }
                    })
            }
        })
    }

    const handleEdit = (id, message) => {
        // console.log(id, message);

        const UpdateMessage = { message }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(UpdateMessage)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id)
                    const update = reviews.find(review => review._id === id)
                    update.message = message
                    const newMessage = [update, ...remaining]
                    setReviews(newMessage)
                }
            })
    }


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

                <div className='md:col-span-2 h-full z-50 order-last lg:order-none'>
                    <ReviewStatitics></ReviewStatitics>
                </div>


                {/* review list */}
                <div className='md:col-span-3'>
                    <div className="flex flex-col p-8 shadow-sm lg:p-12 bg-white">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={handleReview} className="flex flex-col w-full">
                                <textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" spellcheck="false"></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">SEND REVIEW</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 w-full  md:overflow-auto h-[500px]'>
                    {
                        reviews.length === 0 ? <h1 className='text-3xl font-bold text-white text-center mt-12'>No Reviews</h1>
                            :
                            <>
                                {
                                    reviews.map(review => <AllReview
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                        handleReviewEdit={handleEdit}
                                    ></AllReview>)
                                }
                            </>
                    }

                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;