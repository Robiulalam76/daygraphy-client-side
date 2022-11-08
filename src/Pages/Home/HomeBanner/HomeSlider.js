import React from 'react';
import img1 from '../../../assets/banner/banner (1).jpeg'
import img2 from '../../../assets/banner/banner (2).jpeg';
import img3 from '../../../assets/banner/banner (3).jpeg';
import './banner.css'
import BannerTitle from './BannerTitle';

const HomeSlider = () => {
    return (
        <div className="flex h-[450px] rounded-lg w-full overflow-y-hidden overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full rounded-lg">
                <div className='carousel-img h-full w-full'>
                    <img src={img2} className="w-full h-full rounded-lg" alt='' />
                </div>
                <div className="absolute flex justify-center md:justify-between bottom-12 md:bottom-auto transform md:-translate-y-1/2 left-5 right-5 md:top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent border-0 text-xl mr-12">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent border-0 text-xl">❯</a>
                </div>
                <BannerTitle></BannerTitle>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img h-full w-full'>
                    <img src="https://www.picktime.com/webassets/2021/img/industries/photographers-min.png" className="w-full h-full rounded-lg" alt='' />
                </div>
                <div className="absolute flex justify-center md:justify-between bottom-12 md:bottom-auto transform md:-translate-y-1/2 left-5 right-5 md:top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent border-0 text-xl mr-12">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent border-0 text-xl">❯</a>
                </div>
                <BannerTitle></BannerTitle>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img h-full w-full'>
                    <img src={img3} className="w-full h-full rounded-lg" alt='' />
                </div>
                <div className="absolute flex justify-center md:justify-between bottom-12 md:bottom-auto transform md:-translate-y-1/2 left-5 right-5 md:top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent border-0 text-xl mr-12">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent border-0 text-xl">❯</a>
                </div>
                <BannerTitle></BannerTitle>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img h-full w-full'>
                    <img src="https://i1.adis.ws/i/canon/canon-get-inspired-urban-nature-photography-tips-1-1920x1080-tint?$og-image$" className="w-full h-full rounded-lg" />
                </div>
                <div className="absolute flex justify-center md:justify-between bottom-12 md:bottom-auto transform md:-translate-y-1/2 left-5 right-5 md:top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-transparent border-0 text-xl mr-12">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-transparent border-0 text-xl">❯</a>
                </div>
                <BannerTitle></BannerTitle>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='carousel-img h-full w-full'>
                    <img src={img1} alt='' />
                </div>
                <div className="absolute flex justify-center md:justify-between bottom-12 md:bottom-auto transform md:-translate-y-1/2 left-5 right-5 md:top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent border-0 text-xl mr-12">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent border-0 text-xl">❯</a>
                </div>
                <BannerTitle></BannerTitle>
            </div>
        </div>
    );
};

export default HomeSlider;