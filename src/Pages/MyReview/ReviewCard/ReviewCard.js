import React, { useEffect, useState } from 'react';
import reply from '../../../assets/icons/response (1).png'
import edit from '../../../assets/icons/edit.png'
import trash from '../../../assets/icons/trash.png'
import { Link } from 'react-router-dom';

const ReviewCard = ({ review, handleDelete, handleEdit }) => {
    const { _id, serviceId, name, img, email, message, time } = review;
    const [showInput, setShowInput] = useState(false)
    const [editMessage, setEditMessage] = useState('')
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://daygraphy-server.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    const handleOnchange = (event) => {
        event.preventDefault()
        const message = event.target.value
        setEditMessage(message)
    }
    return (
        <div className='flex flex-col md:flex-row items-center md:justify-between m-4 border border-blue-900'>
            <div className='bg-gray-300 p-3 '>
                <img className='md:w-96 h-full' src={service.img} alt="" />
                <h1 className='text-gray-900 font-bold'>{service.title}</h1>
                <div className='flex items-center justify-between'>
                    <h1 className='text-rose-600 font-bold'>${service.price}</h1>
                    <h1 className='text-rose-600 font-bold'>{service.ratings}</h1>
                    <h1 className='text-rose-600 font-bold'>73 reviews</h1>
                </div>
            </div>
            <div className="w-full">
                <div className="bg-gray-100 p-6 shadow border-x-2 border-gray-400">
                    <div className='flex justify-between items-center  pb-2 border-b border-gray-600'>
                        <div className="flex items-center">
                            <img src={img} className="w-12 border-blue-600 border-2 h-12 rounded-full" alt='' />
                            <div className="flex items-center justify-between mb-3">
                                <div className="pl-3 w-full ">
                                    <p className="text-xl font-medium leading-5 text-gray-800">{name ? name : <small>No Name</small>}</p>
                                    <p className="text-sm leading-normal text-gray-500">{email ? email : <small>Email Not Found</small>}</p>
                                </div>
                            </div>
                        </div>
                        <small className='text-right'>{time}</small>
                    </div>
                    <div className="px-2">
                        <p className="text-xl leading-5 py-4 text-black">
                            {message}
                        </p>


                    </div>
                    <div className="flex justify-end p-3 items-center border-t border-gray-600 bg-gray-300 mt-3">
                        <Link className='flex-grow text-gray-600 hover:text-blue-600'><img className='w-6 inline' src={reply} alt="" /> Reply</Link>
                        <button onClick={() => setShowInput(!showInput)} ><img className='w-6 mr-6' src={edit} alt="" /></button>
                        <button onClick={() => handleDelete(_id)}><img className='w-6' src={trash} alt="" /></button>
                    </div>
                </div>


                <div className={`md:col-span-3 ${showInput ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col shadow-sm bg-white">
                        <div className="flex flex-col p-3 items-center w-full">
                            <div className="flex flex-col w-full">
                                <textarea onChange={handleOnchange} name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                                <Link className='w-full' onClick={() => setShowInput(false)}>
                                    <button onClick={() => handleEdit(_id, editMessage)} className="py-2 px-4 mt-3 font-semibold rounded-md text-gray-900 bg-violet-400 hover:bg-violet-500">UPDATE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;