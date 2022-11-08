import React from 'react';

const BannerTitle = () => {
    return (
        <div className="absolute flex justify-end transform w-9/11 md:w-2/5 -translate-y-1/2 left-8 md:left-24 top-2/4">
            <div>
                <h1 className='text-3xl md:text-6xl font-bold mb-6 text-white'>
                    <span className='text-orange-600'>DAYGRAPHY</span><br />
                    <span>With H Al Hadi</span>
                </h1>
                <i className='text-2xl font-bold pb-2'>PROFESSIONAL PHOTOGRAPHER</i>
                <p className='mb-5 text-white'>
                    This is H Al Hadi. I'm Professional PhotoGrapher. I have been working on professional photography for almost five years.  So far I have done very good work for many companies.  And still working with many companies.  I always try to make the best photography possible by my efforts.  Inshallah I will be able to give more beautiful gifts in the future.
                </p>
            </div>
        </div>
    );
};

export default BannerTitle;