import React from 'react';
import useTitle from '../../Hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <h1 className='mb-3 text-gray-900 mt-6 font-bold text-3xl text-center'>Feedback</h1>
            <div className="text-gray-600 flex flex-col-reverse md:flex-row justify-between items-center">

                <div className=" h-96 w-full px-6 mt-6 md:mt-0">
                    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" src="https://maps.google.com/maps?q=thakurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                <div className="px-5 mx-auto flex">
                    <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">You can share your feelings on this service in your email and message option.</p>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 min-h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;