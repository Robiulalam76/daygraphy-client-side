import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reply from '../../../../assets/icons/response (1).png'
import edit from '../../../../assets/icons/edit.png'
import trash from '../../../../assets/icons/trash.png'

const AllReview = ({ review, handleDelete, handleEdit, }) => {
    const { _id, serviceId, time, name, img, email, message } = review;
    const [showInput, setShowInput] = useState(false)
    const [editMessage, setEditMessage] = useState('')

    const handleOnchange = (event) => {
        event.preventDefault()
        const message = event.target.value
        setEditMessage(message)
    }

    return (
        <div className="w-full border-t py-1 border-l border-blue-900">
            <div className="bg-gray-100 p-6 shadow border-x-2 border-gray-400">
                <div className='flex justify-between items-center  pb-2 border-b border-gray-600'>
                    <div className="flex items-center">
                        <img src={img} className="w-12 border-blue-900 border h-12 rounded-full" alt='' />
                        <div className="flex items-center justify-between mb-3">
                            <div className="pl-3 w-full ">
                                <p className="text-xl font-medium leading-5 text-blue-900">{name ? name : <small>No Name</small>}</p>
                                <p className="text-sm leading-normal text-gray-500">{email ? email : <small>Email Not Found</small>}</p>
                            </div>
                        </div>
                    </div>
                    <small className='text-right text-gray-900'>{time}</small>
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


            <div className={`md:col-span-3 ${showInput ? 'block z-50' : 'hidden'}`}>
                <div className="flex flex-col shadow-sm bg-white">
                    <div className="flex flex-col p-3 items-center w-full">
                        <div className="flex flex-col w-full">
                            <textarea onChange={handleOnchange} name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                            <Link className='w-full' onClick={() => setShowInput(false)}>
                                <button onClick={() => handleEdit(_id, editMessage)} className="py-2 px-4 mt-3 font-semibold rounded-md text-gray-900 bg-violet-400">UPDATE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;