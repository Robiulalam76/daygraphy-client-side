import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const ReviewBox = ({ handleReview }) => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex flex-col p-8 shadow-sm lg:p-12 h-[470px] bg-white">
            <h2 className="text-3xl font-semibold text-center text-gray-900">Send Your Review</h2>
            <div className="flex flex-col items-center py-3">
                <span className="text-center">Give ratings if you like the service</span>
                <div className="flex space-x-3 mt-3">
                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="" />
                    </button>
                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="" />
                    </button>
                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="" />
                    </button>
                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="" />
                    </button>
                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/616/616489.png" alt="" />
                    </button>
                </div>
            </div>
            {user?.uid ?
                <form onSubmit={handleReview} className="flex flex-col w-full">
                    <textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100  bg-gray-900" spellcheck="false"></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400 hover:bg-violet-500">SEND REVIEW</button>
                </form>
                :
                <form className="flex flex-col w-full relative">
                    <textarea disabled name='message' rows="3" placeholder="Please login to add a review....." className="p-4 bg-red-100 border-2 border-red-600 rounded-md resize-none text-xl" spellcheck="false"></textarea>

                    <button disabled type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-gray-300 text-2xl">Please <Link className='text-blue-600 hover:text-blue-700' to='/login'>login</Link> to add a review.</button>
                </form>
            }
        </div>
    );
};

export default ReviewBox;