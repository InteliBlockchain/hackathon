import React, { useState } from "react";
import Image from "next/image";

import right from '../assets/arrow-right.svg'
import left from '../assets/arrow-left.svg'

export const Carousel = ({ children }:
    { children: React.ReactNode[] }
) => {
    const slides = children;

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-screen w-full h-max m-auto px-4 group'>
            <div className='w-[85%] md:w-[60%] mx-auto h-full duration-500 transition-all ease-in-out transform hover:scale-105'>
                {/* render the card */}
                {slides[currentIndex]}
            </div>

            {/* Left Arrow */}
            <button onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-[15%] text-2xl rounded-r-full md:rounded-l-full p-2 bg-black/20 text-white cursor-pointer'>
                <Image src={left} alt={"Left arrow"} />
            </button>

            {/* Right Arrow */}
            <button onClick={nextSlide} className='absolute top-[50%] -translate-x-0 -translate-y-1/2 right-0 md:right-[15%] text-2xl rounded-l-full md:rounded-r-full p-2 bg-black/20 text-white cursor-pointer'>
                <Image src={right} alt={"Right arrow"} />
            </button>
        </div>
    );
};