import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div>
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Latest Blog</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-600">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </div>
                <BlogCard></BlogCard>
            </div>
        </div>
    );
};

export default Blogs;