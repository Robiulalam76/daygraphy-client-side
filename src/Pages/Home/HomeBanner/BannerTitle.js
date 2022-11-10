import React from 'react';

const BannerTitle = () => {
    return (
        <div className="absolute flex justify-end transform w-9/11 lg:w-2/5 -translate-y-1/2 left-8 md:left-32 top-2/4">
            <div>
                <h1 className='text-3xl mds:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    <span className='text-orange-600'>DAYGRAPHY</span><br />
                    <span className='text-4xl lg:text-6xl'>With H Al Hadi</span>
                </h1>
                <p><i className='text-2xl text-gray-200 md:font-bold pb-2'>PROFESSIONAL PHOTOGRAPHER</i></p>
                <div className='w-[96%] mt-1'>
                    <small className='mb-5  text-gray-400'>
                        This is H Al Hadi. I'm Professional PhotoGrapher. I have been working on professional photography for almost five years.  So far I have done very good work for many companies.  And still working with many companies.  I always try to make the best photography possible by my efforts.  Inshallah I will be able to give more beautiful gifts in the future.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default BannerTitle;