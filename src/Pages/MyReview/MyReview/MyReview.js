import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import ReviewCard from '../ReviewCard/ReviewCard';
import Swal from 'sweetalert2'

const MyReview = () => {
    useTitle('My Review')
    const { user, logout } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('user-token')
        console.log(token);
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logout])


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
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(UpdateMessage)
        })

            .then(res => {
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