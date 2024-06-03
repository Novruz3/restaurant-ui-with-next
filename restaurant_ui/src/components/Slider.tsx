"use client"
import { sliderData } from '@/data/data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1)),
    2000);
    return() => clearInterval(interval)
  },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row bg-fuchsia-50'>
      <div className='h-1/2 md:h-full flex flex-1 items-center justify-center text-red-500 flex-col font-bold gap-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center p-4 uppercase md:p-8'>
          {sliderData[currentSlide].title}
        </h1>
        <button className='py-4 px-8 bg-red-500 text-white'>Order Now</button>
      </div>
      <div className='h-1/2 w-full relative md:h-full flex-1'>
        <Image src={sliderData[currentSlide].image} alt='' className='object-cover' fill/>
      </div>
    </div>
  )
}

export default Slider