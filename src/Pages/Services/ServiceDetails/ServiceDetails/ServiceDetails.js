import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewStatitics from '../ReviewStatitics/ReviewStatitics';
import AllReview from '../AllReview/AllReview';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import ReviewBox from '../ReviewBox/ReviewBox';
import ServiceDetailsInfo from '../ServiceDetailsInfo/ServiceDetailsInfo';
import './Style.css'

const ServiceDetails = () => {
    const { user, logout } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, price, title, ratings, description, img, photographer } = service;
    const [reviews, setReviews] = useState([])

    const getTime = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime;
    }

    const handleReview = (event) => {
        event.preventDefault()
        const message = event.target.message.value

        const review = {
            serviceId: _id,
            name: user?.displayName,
            img: user?.photoURL,
            email: user?.email,
            message: message,
            time: getTime(new Date)
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    event.target.reset()
                    const newReview = [review, ...reviews]
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


    // -----Handle Delete Review-----
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
                    .then(res => {
                        if (res.status === 401 || res.status === 403) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: '401 Unauthorized Access! Please Login',
                            })
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = reviews.filter(review => review._id !== id)
                            setReviews(remaining)
                        }
                    })
            }
        })
    }


    // ------Handle Review Edit------
    const handleEdit = (id, message) => {
        const UpdateMessage = { message }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(UpdateMessage)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '401 Unauthorized Access! Please Login',
                    })
                }
                return res.json()
            })
            .then(data => {
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
            <PhotoProvider>
                <div className="foo h-96">
                    <PhotoView src={img}>
                        <img className="h-full w-full" src={img} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div className='grid grid-cols-1 lg:grid-cols-5'>

                {/*-------- Service Details Info --------*/}
                <div className='md:col-span-3'>
                    <ServiceDetailsInfo service={service}></ServiceDetailsInfo>
                </div>

                {/*---------Review Statitics --------*/}
                <div className='md:col-span-2 h-full order-last lg:order-none'>
                    <ReviewStatitics></ReviewStatitics>
                </div>


                {/*---------everyone review form --------*/}
                <div className='md:col-span-3'>
                    <ReviewBox handleReview={handleReview}></ReviewBox>
                </div>


                {/*---------all review list --------*/}
                <div className='md:col-span-2 w-full lg:overflow-auto lg:max-h-[470px]'>
                    {
                        reviews.length === 0 ? <h1 className='text-3xl font-bold text-gray-900 text-center mt-12'>No Reviews</h1>
                            :
                            <>
                                {
                                    reviews.map(review => <AllReview
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit}
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