import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import ReviewCard from '../ReviewCard/ReviewCard';
import Swal from 'sweetalert2'

const MyReview = () => {
    useTitle('My Review')
    const { user, logout } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    function loadReviews() {
        fetch(`https://daygraphy-server.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '401 Unauthorized Access!',
                    })
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }

    useEffect(() => {
        fetch(`https://daygraphy-server.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '401 Unauthorized Access!',
                    })
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logout])


    // handle Delete
    const handleDelete = (id) => {
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

                fetch(`https://daygraphy-server.vercel.app/reviews/${id}`, {
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
                            loadReviews()
                            Swal.fire(
                                'Good job!',
                                'Review Delete Successfull',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    // handle Edit
    const handleEdit = (id, message) => {
        const UpdateMessage = { message }

        fetch(`https://daygraphy-server.vercel.app/reviews/${id}`, {
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
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id)
                    const update = reviews.find(review => review._id === id)
                    update.message = message
                    const newMessage = [update, ...remaining]
                    setReviews(newMessage)
                    loadReviews()
                    Swal.fire(
                        'Good job!',
                        'Review Update Successfull',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <div className='md:col-span-2 w-full'>
                {
                    reviews.length === 0 ? <h1 className='text-3xl font-bold text-gray-900 text-center mt-12'>No Reviews</h1>
                        :
                        <>
                            {
                                reviews.map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                ></ReviewCard>)
                            }
                        </>
                }

            </div>
        </div>
    );
};

export default MyReview;