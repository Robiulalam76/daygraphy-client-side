import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reply from '../../../../assets/icons/response (1).png'
import edit from '../../../../assets/icons/edit.png'
import trash from '../../../../assets/icons/trash.png'

const AllReview = ({ review, handleDelete, handleReviewEdit }) => {
    const { _id, serviceId, name, img, email, message } = review;
    const [showInput, setShowInput] = useState(false)

    return (
        <div className="w-full bg-white">
            <div className="bg-white p-6 shadow">
                <div className="flex items-center border-b border-gray-200">
                    <img src={img} className="w-12 h-12 rounded-full" alt='' />
                    <div className="flex items-start justify-between w-full">
                        <div className="pl-3 w-full">
                            <p className="text-xl font-medium leading-5 text-gray-800">{name}</p>
                            <p className="text-sm leading-normal pt-2 text-gray-500">{email}</p>
                        </div>
                        <h1>tarikh</h1>
                    </div>
                </div>
                <div className="px-2">
                    <p className="text-sm leading-5 py-4 text-gray-600">
                        {message}
                    </p>
                    <hr />
                    <div className="flex justify-end items-center mt-3">
                        <Link className='flex-grow text-gray-600 hover:text-blue-600'><img className='w-6 inline' src={reply} alt="" /> Reply</Link>
                        <button onClick={() => setShowInput(!showInput)} ><img className='w-6 mr-6' src={edit} alt="" /></button>
                        <button onClick={() => handleDelete(_id)}><img className='w-6' src={trash} alt="" /></button>
                    </div>
                </div>
            </div>


            <div className={`md:col-span-3 ${showInput ? 'block' : 'hidden'}`}>
                <div className="flex flex-col shadow-sm bg-white">
                    <div className="flex flex-col p-3 items-center w-full">
                        <form onSubmit={() => handleReviewEdit(_id)} className="flex flex-col w-full">
                            <textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" spellcheck="false"></textarea>
                            <button type="submit" className="py-4 mt-3 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">UPDATE</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllReview;