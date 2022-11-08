import React from 'react';

const BlogCard = () => {
    return (
        <section className="pt-24 pb-36 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">Latest from Blog</h2>
                <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
                <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-wrap lg:items-center -m-4">
                            <div className="w-auto p-4">
                                <div className="overflow-hidden rounded-xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog.png" alt="" />
                                </div>
                            </div>
                            <div className="flex-1 p-4">
                                <div className="md:max-w-xs">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="mb-6">
                                            <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                            <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                <h3 className="text-xl font-semibold leading-normal">An IT services company that can grow your business</h3>
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap items-center -m-1">
                                            <div className="w-auto p-1">
                                                <img src="flaro-assets/images/blog/blog-avatar.png" alt="" />
                                            </div>
                                            <div className="w-auto p-1">
                                                <p className="text-sm font-semibold leading-relaxed">Wade Warren</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-wrap lg:items-center -m-4">
                            <div className="w-auto p-4">
                                <div className="overflow-hidden rounded-xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog2.png" alt="" />
                                </div>
                            </div>
                            <div className="flex-1 p-4">
                                <div className="md:max-w-xs">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="mb-6">
                                            <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                            <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                <h3 className="text-xl font-semibold leading-normal">How to handle your good employee for the business</h3>
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap items-center -m-1">
                                            <div className="w-auto p-1">
                                                <img src="flaro-assets/images/blog/blog-avatar2.png" alt="" />
                                            </div>
                                            <div className="w-auto p-1">
                                                <p className="text-sm font-semibold leading-relaxed">Bessie Cooper</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-wrap lg:items-center -m-4">
                            <div className="w-auto p-4">
                                <div className="overflow-hidden rounded-xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog3.png" alt="" />
                                </div>
                            </div>
                            <div className="flex-1 p-4">
                                <div className="md:max-w-xs">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="mb-6">
                                            <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                            <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                <h3 className="text-xl font-semibold leading-normal">New consulting for all kind offer related to IT services</h3>
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap items-center -m-1">
                                            <div className="w-auto p-1">
                                                <img src="flaro-assets/images/blog/blog-avatar3.png" alt="" />
                                            </div>
                                            <div className="w-auto p-1">
                                                <p className="text-sm font-semibold leading-relaxed">Albert Flores</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-wrap lg:items-center -m-4">
                            <div className="w-auto p-4">
                                <div className="overflow-hidden rounded-xl">
                                    <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/blog/blog4.png" alt="" />
                                </div>
                            </div>
                            <div className="flex-1 p-4">
                                <div className="md:max-w-xs">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="mb-6">
                                            <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                            <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                <h3 className="text-xl font-semibold leading-normal">How life insurance helps you during financial insolvency</h3>
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap items-center -m-1">
                                            <div className="w-auto p-1">
                                                <img src="flaro-assets/images/blog/blog-avatar4.png" alt="" />
                                            </div>
                                            <div className="w-auto p-1">
                                                <p className="text-sm font-semibold leading-relaxed">Jerome Bell</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCard;